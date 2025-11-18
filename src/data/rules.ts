// eslint-disable-next-line import/no-namespace
import type * as CSS from 'csstype'

import baseSize from '@primer/primitives/dist/styleLint/base/size/size.json'
import functionalSize from '@primer/primitives/dist/styleLint/functional/size/size.json'
import functionalSizeCoarse from '@primer/primitives/dist/styleLint/functional/size/size-coarse.json'
import functionalSizeFine from '@primer/primitives/dist/styleLint/functional/size/size-fine.json'

import functionalBorder from '@primer/primitives/dist/styleLint/functional/size/border.json'
import functionalBreakpoints from '@primer/primitives/dist/styleLint/functional/size/breakpoints.json'

import baseTypography from '@primer/primitives/dist/styleLint/base/typography/typography.json'
import functionalTypography from '@primer/primitives/dist/styleLint/functional/typography/typography.json'

import lightTheme from '@primer/primitives/dist/styleLint/functional/themes/light.json'
import baseMotion from '@primer/primitives/dist/styleLint/base/motion/motion.json'

// TODO: not used yet because it doesn't fit in propertiesMap
import functionalViewport from '@primer/primitives/dist/styleLint/functional/size/viewport.json'

export type Suggestion =
  | {
      name: `--${string}`
      kind: 'base' | 'functional'
      docsUrl: string
    } & (
      | {
          value: string
          type: 'dimension' | 'color' | 'string' | 'fontFamily' | 'typography' | 'duration'
        }
      | {
          value: number
          type: 'fontWeight' | 'number' | 'cubicBezier'
        }
    )

// TODO: should we type dataSubset?
const format = (dataSubset: unknown, slug: 'color' | 'size' | 'typography' | ''): Suggestion[] => {
  return Object.keys(dataSubset).map(key => {
    const value = dataSubset[key]

    return {
      name: `--${key}`,
      value: Array.isArray(value.$value) ? value.$value[0] : value.$value,
      kind: value.filePath.includes('base') ? 'base' : 'functional',
      type: value.$type,
      docsUrl: `https://primer.style/product/primitives/${slug}?variable=--${key}`,
    }
  })
}

type Rule = {
  data: Suggestion[]
  match?: string[] // match if name contains any of these strings
  exclude?: string[] // exclude if name contains any of these strings
}

// TODO: make sure this mapping (and aliases) has all the properties we have opinions for
export const propertiesRules: Partial<Record<keyof CSS.Properties, Rule[]>> = {
  padding: [
    {data: format(baseSize, 'size')},
    {data: format(functionalSize, 'size'), match: ['padding'], exclude: ['paddingBlock', 'paddingInline']},
    {data: format(functionalSizeFine, 'size'), match: ['padding'], exclude: ['paddingBlock', 'paddingInline']},
    {data: format(functionalSizeCoarse, 'size'), match: ['padding'], exclude: ['paddingBlock', 'paddingInline']},
  ],
  paddingBlock: [{data: format(baseSize, 'size')}, {data: format(functionalSize, 'size'), match: ['paddingBlock']}],
  paddingInline: [{data: format(baseSize, 'size')}, {data: format(functionalSize, 'size'), match: ['paddingInline']}],

  gap: [{data: format(baseSize, 'size')}, {data: format(functionalSize, 'size'), match: ['gap']}],
  margin: [{data: format(baseSize, 'size')}, {data: format(functionalSize, 'size'), match: ['gap']}],

  width: [
    {data: format(baseSize, 'size')},
    {data: format(functionalSize, 'size'), match: ['width', 'minTarget']},
    {data: format(functionalBreakpoints, 'size')},
  ],
  height: [
    {data: format(baseSize, 'size')},
    {data: format(functionalSize, 'size'), match: ['height', 'size', 'minTarget', 'lineBoxHeight']},
  ],

  borderWidth: [{data: format(functionalBorder, 'size'), match: ['borderWidth']}],
  borderRadius: [{data: format(functionalBorder, 'size'), match: ['borderRadius']}],
  borderColor: [{data: format(lightTheme, 'color'), match: ['borderColor']}],
  boxShadow: [{data: format(functionalBorder, 'size'), match: ['boxShadow']}],

  outlineWidth: [{data: format(functionalBorder, 'size'), match: ['outline-focus-width']}],
  outlineOffset: [{data: format(functionalBorder, 'size'), match: ['outline-focus-offset']}],
  outlineColor: [{data: format(lightTheme, 'color'), match: ['outlineColor']}],

  fontWeight: [
    {data: format(baseTypography, 'typography'), match: ['weight']},
    {data: format(functionalTypography, 'typography'), match: ['weight']},
  ],
  fontSize: [{data: format(functionalTypography, 'typography'), match: ['size']}],
  lineHeight: [{data: format(functionalTypography, 'typography'), match: ['lineHeight']}],
  fontFamily: [{data: format(functionalTypography, 'typography'), match: ['fontStack']}],
  font: [{data: format(functionalTypography, 'typography'), match: ['shorthand']}],

  // question: should these 4 properties have the entire color scale as well?
  color: [{data: format(lightTheme, 'color'), match: ['fgColor', 'iconColor']}],
  backgroundColor: [{data: format(lightTheme, 'color'), match: ['bgColor']}],
  fill: [{data: format(lightTheme, 'color'), match: ['iconColor']}],
  stroke: [{data: format(lightTheme, 'color'), match: ['iconColor']}],

  transitionDuration: [{data: format(baseMotion, ''), match: ['duration']}],
  transitionTimingFunction: [{data: format(baseMotion, ''), match: ['easing']}],
  animationDuration: [{data: format(baseMotion, ''), match: ['duration']}],
  animationTimingFunction: [{data: format(baseMotion, ''), match: ['easing']}],
}
