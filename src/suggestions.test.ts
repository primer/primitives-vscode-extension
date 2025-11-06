import {describe, it, expect} from 'vitest'
import {getSuggestions} from './suggestions'

describe('Suggestions', () => {
  it('returns suggestions for paddingBottom', () => {
    const suggestions = getSuggestions('paddingBottom')
    expect(suggestions).toMatchSnapshot()
  })
})
