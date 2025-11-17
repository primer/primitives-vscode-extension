import {join} from 'node:path'
import {workspace, ExtensionContext, window, ViewColumn, WebviewPanel} from 'vscode'
import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from 'vscode-languageclient/node'

let client: LanguageClient

export function activate(context: ExtensionContext) {
  // we need to use dist version instead of source
  const serverModule = context.asAbsolutePath(join('dist', 'language-server.js'))

  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  const debugOptions = {execArgv: ['--nolazy', '--inspect=6011']}

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: {module: serverModule, transport: TransportKind.ipc},
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  }

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      'onLanguage:scss',
      'onLanguage:postcss',
      'onLanguage:less',
      'onLanguage:css',
      'onLanguage:html',
      'onLanguage:javascript',
      'onLanguage:javascriptreact',
      'onLanguage:typescript',
      'onLanguage:typescriptreact',
    ].map(event => ({
      scheme: 'file',
      language: event.split(':')[1],
    })),
    synchronize: {
      fileEvents: [
        workspace.createFileSystemWatcher('**/*.css'),
        workspace.createFileSystemWatcher('**/*.scss'),
        workspace.createFileSystemWatcher('**/*.sass'),
        workspace.createFileSystemWatcher('**/*.less'),
      ],
    },
  }

  // Create the language client and start the client.
  client = new LanguageClient('primitives', 'primitives Language Server', serverOptions, clientOptions)

  // Start the client. This will also launch the server
  client.start()

  let panel: WebviewPanel

  client.onRequest('open-story', ({variable, storyPath, openPanelIfClosed = true}) => {
    if (!panel && openPanelIfClosed) {
      panel = window.createWebviewPanel('custom view type', 'Primer Primitives', ViewColumn.Beside, {
        enableScripts: true,
        enableFindWidget: true,
      })
      panel.onDidDispose(() => (panel = null))
    }

    if (panel) {
      panel.title = variable.name

      panel.webview.html = `
      <style>
        body {
          padding: 0;
        }
        a {
          padding: 16px;
          text-decoration: none;
          display: flex;
          gap: 4px;
        }
        iframe {
          width: calc(100% + 20px);
          height: 100vh;
          border: none;
        }
        
      </style>
  
      <a href=https://primer.style/primitives/storybook/?path=/story/${storyPath}>
        Open in Storybook
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
        </svg>
      </a>
      
      <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://primer.style/primitives/storybook/iframe.html?args=&id=${storyPath}&viewMode=story"></iframe>
    
    `
    }
  })
}

export function deactivate() {
  if (!client) {
    return undefined
  }
  return client.stop()
}
