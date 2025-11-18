import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  InitializeResult,
  Hover,
  TextDocumentSyncKind,
} from 'vscode-languageserver/node'
import {TextDocument} from 'vscode-languageserver-textdocument'
import postcss, {type Root as ASTRoot} from 'postcss'
// import {properties, stories} from '@primer/primitives/dist/js/intellisense'
import camelCase from 'lodash.camelcase'
import {isColor} from './utils/is-color'
import {getSuggestions} from './suggestions'
import {getCssVariable} from './utils/get-css-variable'
import {getVariableInfo} from './utils/get-variable-info'

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all)

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

connection.onInitialize(async () => {
  const result: InitializeResult = {
    capabilities: {
      // Tell the client that this server supports code completion.
      completionProvider: {resolveProvider: true, triggerCharacters: [':']},
      hoverProvider: true,
      textDocumentSync: TextDocumentSyncKind.Incremental,
      definitionProvider: true,
    },
  }

  return result
})

connection.onInitialized(() => {
  // nothing to do here, i suppose?
})

// This handler provides the initial list of the completion items.
connection.onCompletion((params: TextDocumentPositionParams): CompletionItem[] => {
  const doc = documents.get(params.textDocument.uri)
  if (!doc) return []

  const currentLine = doc.getText({
    start: {line: params.position.line, character: 0},
    end: {line: params.position.line + 1, character: 0},
  })

  let ast: ASTRoot

  try {
    ast = postcss.parse(currentLine)
  } catch (error) {
    // do nothing
  }

  if (!ast || ast.nodes.length === 0) return []

  let property: string = ast.nodes[0].type === 'decl' ? camelCase(ast.nodes[0].prop) : undefined
  if (!property) return []

  // TODO: for shorthands, property might be the second property like borderColor or paddingInline
  // we can be smarter about this
  if (property === 'padding') {
    try {
      // padding: block inline
      const value = currentLine.split(':')[1].trim()
      const [blockValue] = value.split(' ')
      const blockValuePositionEnd = currentLine.indexOf(blockValue) + blockValue.length

      if (params.position.character > blockValuePositionEnd) {
        property = 'paddingInline'
      } else if (params.position.character <= blockValuePositionEnd) {
        property = 'paddingBlock'
      }
    } catch (error) {
      // do nothing
    }
  } else if (property === 'border') {
    try {
      // border: width style color
      const value = currentLine.split(':')[1].trim()
      const [borderWidth] = value.split(' ')
      const borderWidthPositionEnd = currentLine.indexOf(borderWidth) + borderWidth.length

      if (params.position.character > borderWidthPositionEnd) {
        property = 'borderColor'
      } else if (params.position.character <= borderWidthPositionEnd) {
        property = 'borderWidth'
      }
    } catch (error) {
      // do nothing
    }
  }

  const suggestedVariablesWithSortText = getSuggestions(property)

  const items = suggestedVariablesWithSortText.map(variable => {
    const item: CompletionItem = {
      label: variable.name,
      detail: String(variable.value),
      // using kind only for the icon
      kind:
        typeof variable.value === 'string' && isColor(variable.value)
          ? CompletionItemKind.Color
          : variable.kind === 'functional'
          ? CompletionItemKind.Field
          : CompletionItemKind.Constructor,
      // sortText: variable.sortText
      sortText: '---a',
      // this is slightly silly because what about multiple variables in one line
      // like shorthands or fallbacks
      insertText: currentLine.includes('var') ? variable.name : `var(${variable.name});`,
      documentation: `${variable.name} ${variable.value}`,
    }
    return item
  })

  return items
})

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  // const variableInfo = getVariableInfo(item.label as `--${string}`)
  // if (!variableInfo) return null
  // TODO: this works but reloads the page every time, commenting this out for now
  // connection.sendRequest('open-docs', {variable: variableInfo})
  return item
})

connection.onHover(params => {
  const doc = documents.get(params.textDocument.uri)
  if (!doc) return null

  const offset = doc.offsetAt(params.position)
  const variableName = getCssVariable(doc, offset)

  if (!variableName) return null

  const variableInfo = getVariableInfo(variableName)
  if (!variableInfo) return null

  let markdown = `**\`${variableInfo.name}\`**\n\n`
  markdown += `\n---\n\n`

  markdown += `- **Kind:** [${variableInfo.kind}](https://primer.style/product/primitives/token-names/#${variableInfo.kind})\n`
  markdown += `- **Type:** ${variableInfo.type}\n`
  markdown += `\n---\n\n`

  if (variableInfo.themeValues && Object.keys(variableInfo.themeValues).length > 0) {
    for (const [themeName, value] of Object.entries(variableInfo.themeValues)) {
      markdown += `- **${themeName}:** \`${value}\`\n`
    }
  } else {
    markdown += `**Value:** \`${variableInfo.value}\`\n\n`
  }

  markdown += `\n---\n\n`
  markdown += `[View documentation](${variableInfo.docsUrl})\n`

  return {
    contents: {
      kind: 'markdown',
      value: markdown,
    },
  } as Hover
})

connection.onDefinition(params => {
  const doc = documents.get(params.textDocument.uri)
  if (!doc) return null

  const offset = doc.offsetAt(params.position)
  const variableName = getCssVariable(doc, offset)
  if (!variableName) return null

  const variableInfo = getVariableInfo(variableName)
  if (!variableInfo) return null

  connection.sendRequest('open-docs', {variable: variableInfo})
  return null
})

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection)

// Listen on the connection
connection.listen()
