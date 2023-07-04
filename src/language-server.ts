import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  InitializeResult,
  Hover,
  TextDocumentSyncKind
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import postcss from 'postcss';
import { properties, aliases, stories } from '@primer/primitives/tokens-next-private/js/intellisense';
import camelCase from 'lodash.camelcase';
import flatten from 'lodash.flatten';
import { getCurrentWord } from './utils/get-current-word';
import { indexToAlphabet } from './utils/index-to-alphabet';
import { isColor } from './utils/is-color';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(async () => {
  const result: InitializeResult = {
    capabilities: {
      // Tell the client that this server supports code completion.
      completionProvider: { resolveProvider: true, triggerCharacters: [':'] },
      hoverProvider: true,
      textDocumentSync: TextDocumentSyncKind.Incremental,
      definitionProvider: true
    }
  };

  return result;
});

connection.onInitialized(() => {
  // nothing to do here, i suppose?
});

// This handler provides the initial list of the completion items.
connection.onCompletion((params: TextDocumentPositionParams): CompletionItem[] => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return [];

  const currentLine = doc.getText({
    start: { line: params.position.line, character: 0 },
    end: { line: params.position.line + 1, character: 0 }
  });

  let ast;

  try {
    ast = postcss.parse(currentLine);
  } catch (error) {}

  if (!ast) return [];

  let property = ast.nodes[0].type === 'decl' ? camelCase(ast.nodes[0].prop) : undefined;
  if (!property) return [];

  // TODO: for shorthands, property might be the second property like borderColor or paddingInline
  // we can be smarter about this
  if (property === 'padding') {
    try {
      // padding: block inline
      const value = currentLine.split(':')[1].trim();
      const [blockValue, inlineValue] = value.split(' ');
      const blockValuePositionEnd = currentLine.indexOf(blockValue) + blockValue.length;

      if (params.position.character > blockValuePositionEnd) {
        property = 'paddingInline';
      } else if (params.position.character <= blockValuePositionEnd) {
        property = 'paddingBlock';
      }
    } catch (error) {}
  } else if (property === 'border') {
    try {
      // border: width style color
      const value = currentLine.split(':')[1].trim();
      const [borderWidth, borderStyle, borderColor] = value.split(' ');
      const borderWidthPositionEnd = currentLine.indexOf(borderWidth) + borderWidth.length;

      if (params.position.character > borderWidthPositionEnd) {
        property = 'borderColor';
      } else if (params.position.character <= borderWidthPositionEnd) {
        property = 'borderWidth';
      }
    } catch (error) {}
  }

  let suggestedVariables;
  if (properties[property]) {
    const matchingProperty = property;
    suggestedVariables = properties[matchingProperty];
  } else if (aliases[property]) {
    const matchingProperties = aliases[property];
    suggestedVariables = flatten(matchingProperties.map((matchingProperty) => properties[matchingProperty]));
  }

  if (!suggestedVariables) return [];

  const functionalVariables = suggestedVariables.filter((variable) => variable.type === 'functional');
  const baseVariables = suggestedVariables.filter((variable) => variable.type === 'base');

  // todo: contextual repetition
  // if there are other variables in the same block/document
  // we should take hints from them like hover state or control-small or button-primary
  const suggestedVariablesWithSortText = [
    ...functionalVariables.map((variable, index) => {
      // we have to use alphabet instead of numbers to sort because it uses text
      // functional starts at aa, base start at za
      // both start with --- so that these suggestions come before silly automatic ones

      let alphabet = '---a';

      // sorting for colors
      if (variable.name.includes('icon')) alphabet = 'b';
      if (variable.name.includes('scale')) alphabet = 'c';

      return { ...variable, sortText: alphabet + indexToAlphabet(index) };
    }),
    ...baseVariables.map((variable, index) => {
      return { ...variable, sortText: `---z${indexToAlphabet(index)}` };
    })
  ];

  const offset = doc.offsetAt(params.position);
  const currentWord = getCurrentWord(doc, offset).slice(1);
  console.log({ currentWord });

  const items = suggestedVariablesWithSortText.map((variable) => {
    const item: CompletionItem = {
      label: variable.name,
      detail: variable.value,
      // using kind only for the icon
      kind: isColor(variable.value)
        ? CompletionItemKind.Color
        : variable.type === 'functional'
        ? CompletionItemKind.Field
        : CompletionItemKind.Constructor,
      sortText: variable.sortText,
      // this is slightly silly because what about multiple variables in one line
      // like shorthands or fallbacks
      insertText: currentLine.includes('var') ? variable.name : ` var(${variable.name});`,
      documentation: `${variable.name} ${variable.value}`
    };
    return item;
  });

  return items;
});

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  // experimental, could be a bad idea

  // TODO: there's a bug here when base size is open
  // it doesn't switch back to others
  if (stories[item.label]) {
    connection.sendRequest('open-story', {
      openPanelIfClosed: false,
      variable: { name: item.label },
      storyPath: stories[item.label]
    });
  }

  return item;
});

connection.onHover((params) => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return null;

  const offset = doc.offsetAt(params.position);
  const currentWord = getCurrentWord(doc, offset).slice(1);
  if (!currentWord) return null;

  const currentVariable = flatten(Object.values(properties)).find((variable) => variable.name === currentWord);

  if (currentVariable) {
    // TODO: would be nice to put docs link here as well
    return { contents: currentVariable.value } as Hover;
  }

  return null;
});

connection.onDefinition((params) => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return null;

  const offset = doc.offsetAt(params.position);
  const currentWord = getCurrentWord(doc, offset);

  if (!currentWord) return null;

  const regex = /(--[a-zA-Z0-9-]+)/g;
  const matches = currentWord.match(regex);
  if (!matches) return null;

  const variableName = matches[0];

  const found = flatten(Object.values(properties)).find((variable) => variable.name === variableName);
  if (!found) return;

  const storyPath = stories[found.name];

  connection.sendRequest('open-story', { variable: found, storyPath });
  return null;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}
