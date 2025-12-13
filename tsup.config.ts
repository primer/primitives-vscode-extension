import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/language-server.ts'],
  format: ['cjs'],
  external: ['vscode'],
  minify: true,
  // Bundle all dependencies to avoid requiring node_modules at runtime
  noExternal: [
    '@primer/primitives',
    /^lodash\./,
    'postcss',
    /^vscode-languageserver/,
  ],
  bundle: true,
  treeshake: true,
  splitting: false, // Code splitting disabled for CommonJS VSCode extension compatibility
})
