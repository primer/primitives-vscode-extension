import flatten from 'lodash.flatten'
import {propertiesMap, type Suggestion} from '../data'
import lightTheme from '@primer/primitives/dist/styleLint/functional/themes/light.json'
import darkTheme from '@primer/primitives/dist/styleLint/functional/themes/dark.json'
import darkDimmedTheme from '@primer/primitives/dist/styleLint/functional/themes/dark-dimmed.json'
import darkHighContrastTheme from '@primer/primitives/dist/styleLint/functional/themes/dark-high-contrast.json'
import lightHighContrastTheme from '@primer/primitives/dist/styleLint/functional/themes/light-high-contrast.json'
import {isColor} from './is-color'

const allThemes = {
  Light: lightTheme,
  Dark: darkTheme,
  'Dark Dimmed': darkDimmedTheme,
  'Dark High Contrast': darkHighContrastTheme,
  'Light High Contrast': lightHighContrastTheme,
}

export type VariableInfo = Suggestion & {
  themeValues?: Record<string, string>
}

export function getVariableInfo(variableName: `--${string}`): VariableInfo | null {
  const cleanName = variableName.slice(2)

  const allVariables = flatten(Object.values(propertiesMap))
  const variable = allVariables.find(v => v.name === variableName)

  if (!variable) return null

  const info: VariableInfo = {...variable}

  if (info.type === 'color' || (info.value && isColor(info.value))) {
    info.themeValues = {}

    for (const [themeName, themeData] of Object.entries(allThemes)) {
      const themeVariable = themeData[cleanName]
      if (themeVariable && themeVariable.$value) {
        info.themeValues[themeName] = themeVariable.$value
      }
    }

    // If the value is just a placeholder (#), use the first theme value as display value
    if (info.value === '#' && info.themeValues && Object.keys(info.themeValues).length > 0) {
      const firstThemeValue = Object.values(info.themeValues)[0]
      info.value = firstThemeValue
    }
  }

  return info
}
