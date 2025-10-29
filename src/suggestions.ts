import flatten from 'lodash.flatten'
import {properties, aliases} from '@primer/primitives/dist/js/intellisense'
import {indexToAlphabet} from './utils/index-to-alphabet'

export const getSuggestions = (property: string) => {
  // TODO: for shorthands, property might be the second property like borderColor or paddingInline
  // we can be smarter about this
  let suggestedVariables
  if (properties[property]) {
    const matchingProperty = property
    suggestedVariables = properties[matchingProperty]
  } else if (aliases[property]) {
    const matchingProperties = aliases[property]
    suggestedVariables = flatten(matchingProperties.map(matchingProperty => properties[matchingProperty]))
  }

  if (!suggestedVariables) return []

  const functionalVariables = suggestedVariables.filter(variable => variable.type === 'functional')
  const baseVariables = suggestedVariables.filter(variable => variable.type === 'base')

  // todo: contextual repetition
  // if there are other variables in the same block/document
  // we should take hints from them like hover state or control-small or button-primary
  const suggestedVariablesWithSortText = [
    ...functionalVariables.map((variable, index) => {
      // we have to use alphabet instead of numbers to sort because it uses text
      // functional starts at aa, base start at za
      // both start with --- so that these suggestions come before silly automatic ones

      let alphabet = '---a'

      // sorting for colors
      if (variable.name.includes('icon')) alphabet = 'b'
      if (variable.name.includes('scale')) alphabet = 'c'

      return {...variable, sortText: alphabet + indexToAlphabet(index)}
    }),
    ...baseVariables.map((variable, index) => {
      return {...variable, sortText: `---z${indexToAlphabet(index)}`}
    }),
  ]

  return suggestedVariablesWithSortText
}
