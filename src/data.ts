// eslint-disable-next-line import/no-namespace
import type * as CSS from 'csstype'

import baseSize from '@primer/primitives/dist/styleLint/base/size/size.json'
import baseMotion from '@primer/primitives/dist/styleLint/base/motion/motion.json'
import baseTypography from '@primer/primitives/dist/styleLint/base/typography/typography.json'

import functionalBorder from '@primer/primitives/dist/styleLint/functional/size/border.json'
import functionalBreakpoints from '@primer/primitives/dist/styleLint/functional/size/breakpoints.json'
import functionalSize from '@primer/primitives/dist/styleLint/functional/size/size.json'
import functionalSizeCoarse from '@primer/primitives/dist/styleLint/functional/size/size-coarse.json'
import functionalSizeFine from '@primer/primitives/dist/styleLint/functional/size/size-fine.json'
import functionalViewport from '@primer/primitives/dist/styleLint/functional/size/viewport.json'
import functionalTypography from '@primer/primitives/dist/styleLint/functional/typography/typography.json'
import lightTheme from '@primer/primitives/dist/styleLint/functional/themes/light.json'

export type Suggestion = {
  name: `--${string}`
  value: string
  kind: 'base' | 'functional'
  type: string
}

// TODO: should we type dataSubset?
const format = (dataSubset: unknown): Suggestion[] => {
  return Object.keys(dataSubset).map(key => {
    const value = dataSubset[key]

    return {
      name: `--${key}`,
      value: value.$value[0],
      kind: value.filePath.includes('base') ? 'base' : 'functional',
      type: value.$type,
    }
  })
}

export const data = {
  size: [
    ...format(baseSize),
    ...format(functionalSize),
    ...format(functionalSizeFine),
    ...format(functionalSizeCoarse),
  ],
  motion: format(baseMotion),
  typography: [...format(baseTypography), ...format(functionalTypography)],
  border: format(functionalBorder),
  breakpoints: format(functionalBreakpoints), // TODO: not used yet because it doesn't fit in propertiesMap
  viewport: format(functionalViewport), // TODO: not used yet because it doesn't fit in propertiesMap

  // TODO: this is potentitally an incomplete set because all variables do not exist in all themes?
  colors: format(lightTheme),
}

// TODO 1: make sure this mapping (and aliases) has all the properties we have opinions for
// TODO 2: creating this map is very expensive on boot, we can probably cache the output of this

type Rule = {
  data: Suggestion[]
  match?: string[] // match if name contains any of these strings
  exclude?: string[] // exclude if name contains any of these strings
}

const propertiesRules: Partial<Record<keyof CSS.Properties, Rule[]>> = {
  padding: [
    {data: format(baseSize)},
    {data: format(functionalSize), match: ['padding'], exclude: ['paddingBlock', 'paddingInline']},
  ],
  paddingBlock: [{data: format(baseSize)}, {data: format(functionalSize), match: ['paddingBlock']}],
  paddingInline: [{data: format(baseSize)}, {data: format(functionalSize), match: ['paddingInline']}],

  gap: [{data: format(baseSize)}, {data: format(functionalSize), match: ['gap']}],
  margin: [{data: format(baseSize)}, {data: format(functionalSize), match: ['gap']}],

  width: [{data: format(baseSize)}, {data: format(functionalSize), match: ['width', 'minTarget']}],
  height: [
    {data: format(baseSize)},
    {data: format(functionalSize), match: ['height', 'size', 'minTarget', 'lineBoxHeight']},
  ],

  borderWidth: [{data: format(functionalBorder), match: ['borderWidth']}],
  borderRadius: [{data: format(functionalBorder), match: ['borderRadius']}],
  borderColor: [{data: format(lightTheme), match: ['borderColor']}],
  boxShadow: [{data: format(functionalBorder), match: ['boxShadow']}],

  outlineWidth: [{data: format(functionalBorder), match: ['outline-focus-width']}],
  outlineOffset: [{data: format(functionalBorder), match: ['outline-focus-offset']}],
  outlineColor: [{data: format(lightTheme), match: ['outlineColor']}],

  fontWeight: [{data: format(functionalTypography), match: ['weight']}],
  fontSize: [{data: format(functionalTypography), match: ['size']}],
  lineHeight: [{data: format(functionalTypography), match: ['lineHeight']}],
  fontFamily: [{data: format(functionalTypography), match: ['fontStack']}],
  font: [{data: format(functionalTypography), match: ['shorthand']}],

  // question: should these 4 properties have the entire color scale as well?
  color: [{data: format(lightTheme), match: ['fgColor', 'iconColor']}],
  backgroundColor: [{data: format(lightTheme), match: ['bgColor']}],
  fill: [{data: format(lightTheme), match: ['iconColor']}],
  stroke: [{data: format(lightTheme), match: ['iconColor']}],
}

const propertiesMapFromRules: Partial<Record<keyof CSS.Properties, Suggestion[]>> = {}

Object.entries(propertiesRules).map(([property, rules]) => {
  propertiesMapFromRules[property as keyof CSS.Properties] = []

  rules.map(rule => {
    if (!rule.match && !rule.exclude) {
      propertiesMapFromRules[property].push(...rule.data)
    } else {
      const filteredData = rule.data.filter(variable => {
        const {match = [], exclude = []} = rule
        return match.some(name => variable.name.includes(name)) && !exclude.some(name => variable.name.includes(name))
      })
      propertiesMapFromRules[property].push(...filteredData)
    }
  })
})

export const propertiesMap = propertiesMapFromRules

export const aliases = {
  paddingBlockStart: 'paddingBlock',
  paddingBlockEnd: 'paddingBlock',
  paddingInlineEnd: 'paddingInline',
  paddingInlineStart: 'paddingInline',
  paddingTop: 'paddingBlock',
  paddingBottom: 'paddingBlock',
  paddingLeft: 'paddingInline',
  paddingRight: 'paddingInline',
  padding: ['paddingBlock', 'paddingInline'],
  marginBlockStart: 'margin',
  marginBlockEnd: 'margin',
  marginInline: 'margin',
  marginInlineEnd: 'margin',
  marginInlineStart: 'margin',
  marginTop: 'margin',
  marginRight: 'margin',
  marginBottom: 'margin',
  marginLeft: 'margin',
  maxWidth: 'width',
  minWidth: 'width',
  maxHeight: 'height',
  minHeight: 'height',
  rowGap: 'gap',
  columnGap: 'gap',
  borderTopWidth: 'borderWidth',
  borderRightWidth: 'borderWidth',
  borderLeftWidth: 'borderWidth',
  borderBottomWidth: 'borderWidth',
  borderBlockWidth: 'borderWidth',
  borderInlineWidth: 'borderWidth',
  borderBlockEndWidth: 'borderWidth',
  borderBlockStartWidth: 'borderWidth',
  borderInlineEndWidth: 'borderWidth',
  borderInlineStartWidth: 'borderWidth',
  borderBlock: 'border',
  border: ['borderWidth', 'borderRadius', 'borderColor'],
  borderTopColor: 'borderColor',
  borderRightColor: 'borderColor',
  borderLeftColor: 'borderColor',
  borderBottomColor: 'borderColor',
  borderBlockColor: 'borderColor',
  borderInlineColor: 'borderColor',
  borderBlockStartColor: 'borderColor',
  borderBlockEndColor: 'borderColor',
  borderInlineStartColor: 'borderColor',
  borderInlineEndColor: 'borderColor',
  borderTopLeftRadius: 'borderRadius',
  borderTopRightRadius: 'borderRadius',
  borderBottomRightRadius: 'borderRadius',
  borderBottomLeftRadius: 'borderRadius',
  borderStartStartRadius: 'borderRadius',
  borderStartEndRadius: 'borderRadius',
  borderEndEndRadius: 'borderRadius',
  borderEndStartRadius: 'borderRadius',
  outline: ['outlineWidth', 'outlineOffset', 'outlineColor'],
  background: 'backgroundColor',
  accentColor: ['backgroundColor', 'color'],
  caretColor: 'color',
}
