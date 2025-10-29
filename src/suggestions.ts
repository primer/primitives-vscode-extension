import data from './stylelint-data'

export const getSuggestions = (property: string) => {
  // TODO: this is dumb, we want to make this smarter by matching property to variables
  return Object.values(data).flat()
}
