import {TextDocument as LanguageServerTextDocument} from 'vscode-languageserver-textdocument'
import {TextDocument as VSCodeTextDocument} from 'vscode'

export function getCurrentWord(document: LanguageServerTextDocument | VSCodeTextDocument, offset: number): string {
  const text = document.getText()
  const delimiters = ' \t\n\r":{[()]},*>+'

  // Ensure offset is within bounds
  if (offset < 0 || offset > text.length) {
    return ''
  }

  let left = offset - 1
  let right = offset

  // Move left to find start of word
  while (left >= 0 && delimiters.indexOf(text.charAt(left)) === -1) {
    left--
  }

  // Move right to find end of word
  while (right < text.length && delimiters.indexOf(text.charAt(right)) === -1) {
    right++
  }

  return text.substring(left + 1, right)
}
