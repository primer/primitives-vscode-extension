import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/language-server.ts'],
  format: ['cjs'],
  external: ['vscode'],
  minify: true,
  noExternal: [/@primer\/primitives/, /lodash/, /postcss/, /vscode-languageserver/, /vscode-languageserver-textdocument/],
  bundle: true,
  treeshake: true,
  splitting: false, // VSCode extensions don't support ESM code splitting well
})
