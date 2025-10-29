import {describe, it, expect} from 'vitest'
import {getSuggestions} from './suggestions'

describe('Suggestions', () => {
  it.skip('returns suggestions for a given property', () => {
    const suggestions = getSuggestions('padding')

    expect(suggestions[0]).toStrictEqual({
      name: '--control-xsmall-paddingBlock',
      value: '0.125rem',
      type: 'functional',
      file: {name: 'size', path: 'dist/css/functional/size/size.css'},
      sortText: '---aa',
    })

    expect(suggestions[1]).toStrictEqual({
      name: '--control-small-paddingBlock',
      value: '0.25rem',
      type: 'functional',
      file: {name: 'size', path: 'dist/css/functional/size/size.css'},
      sortText: '---ab',
    })
  })
})
