import {TextDocument as LanguageServerTextDocument} from 'vscode-languageserver-textdocument'
import {TextDocument as VSCodeTextDocument} from 'vscode'
import {getCurrentWord} from './get-current-word'

/**
 * Extracts a CSS variable name from the current cursor position.
 * @returns The CSS variable name (e.g., '--color-red') or null if not found
 */
export function getCssVariable(
  document: LanguageServerTextDocument | VSCodeTextDocument,
  offset: number,
): `--${string}` | null {
  const currentWord = getCurrentWord(document, offset)

  const match = currentWord.match(/--[a-zA-Z0-9-]+/)

  if (!match) return null

  return match[0] as `--${string}`
}
