import flatten from 'lodash.flatten'
import {indexToAlphabet} from './utils/index-to-alphabet'
import {propertiesMap, aliases, type Suggestion} from './data'
// eslint-disable-next-line import/no-namespace
import type * as CSS from 'csstype'

export const getSuggestions = (property: keyof CSS.Properties) => {
  // TODO: for shorthands, property might be the second property like borderColor or paddingInline
  // we can be smarter about this
  let suggestedVariables: Suggestion[]

  if (propertiesMap[property]) {
    const matchingProperty = property
    suggestedVariables = propertiesMap[matchingProperty]
  } else if (aliases[property]) {
    if (Array.isArray(aliases[property])) {
      const matchingProperties = aliases[property]
      suggestedVariables = flatten(matchingProperties.map(matchingProperty => propertiesMap[matchingProperty]))
    } else {
      const matchingProperty = aliases[property]
      suggestedVariables = propertiesMap[matchingProperty]
    }
  }

  if (!suggestedVariables) return []

  const functionalVariables = suggestedVariables.filter(variable => variable.kind === 'functional')
  const baseVariables = suggestedVariables.filter(variable => variable.kind === 'base')

  // todo 1: sort sizes consistently
  // right now they are sorted by how they appear in the data file
  // we should sort them by size instead: xsmall, small, medium, large, xlarge
  // same for base sizes: they need to be sorted by integer value not alphabetically like a string

  // todo 2: contextual repetition
  // if there are other variables in the same block/document
  // we should take hints from them like hover state or control-small or button-primary
  const suggestedVariablesWithSortText = [
    ...functionalVariables.map((variable, index) => {
      // we have to use alphabet instead of numbers to sort because it uses text
      // functional starts at aa, base start at za
      // both start with --- so that these suggestions come before silly automatic ones

      let alphabet = '---a'

      // sorting for colors
      if (variable.name.includes('icon')) alphabet = '---b'
      if (variable.name.includes('scale')) alphabet = '---c'

      return {...variable, sortText: alphabet + indexToAlphabet(index)}
    }),
    ...baseVariables
      .sort((a, b) => {
        if (a.type === 'dimension' && b.type === 'dimension') {
          return parseInt(a.value, 10) < parseInt(b.value, 10) ? -1 : 1
        } else return 0
      })
      .map((variable, index) => {
        return {...variable, sortText: `---z${indexToAlphabet(index)}`}
      }),
  ]

  return suggestedVariablesWithSortText
}
