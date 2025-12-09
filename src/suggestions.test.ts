import {describe, it, expect} from 'vitest'
import {getSuggestions, getSuggestionsLikeVariable} from './suggestions'

describe('Suggestions', () => {
  it('returns suggestions for paddingBottom', () => {
    const suggestions = getSuggestions('paddingBottom')
    expect(suggestions).toMatchSnapshot()
  })

  it('returns suggestions for variable part: --fgColor', () => {
    const suggestions = getSuggestionsLikeVariable('--fgColor')
    expect(suggestions[0].name).toBe('--fgColor-accent')
  })

  it.todo('returns suggestions for property: outline', () => {
    const suggestions = getSuggestions('outline')
    expect(suggestions[0].name).toBe('--focus-outline')
  })
})
