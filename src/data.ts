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
export const propertiesMap: Partial<Record<keyof CSS.Properties, Suggestion[]>> = {
  padding: data.size.filter(
    variable =>
      variable.kind === 'base' ||
      (variable.kind === 'functional' &&
        variable.name.includes('padding') &&
        !variable.name.includes('paddingBlock') &&
        !variable.name.includes('paddingInline')),
  ),
  paddingBlock: data.size.filter(
    variable => variable.kind === 'base' || (variable.kind === 'functional' && variable.name.includes('paddingBlock')),
  ),
  paddingInline: data.size.filter(
    variable => variable.kind === 'base' || (variable.kind === 'functional' && variable.name.includes('paddingInline')),
  ),
  margin: data.size.filter(
    variable => variable.kind === 'base' || (variable.kind === 'functional' && variable.name.includes('gap')),
  ),
  gap: data.size.filter(
    variable => variable.kind === 'base' || (variable.kind === 'functional' && variable.name.includes('gap')),
  ),

  width: data.size.filter(
    variable =>
      variable.kind === 'base' ||
      (variable.kind === 'functional' && variable.name.includes('width')) ||
      variable.name.includes('minTarget'),
  ),
  height: data.size.filter(
    variable =>
      variable.kind === 'base' ||
      (variable.kind === 'functional' && variable.name.includes('height')) ||
      variable.name.includes('size') ||
      variable.name.includes('minTarget') ||
      variable.name.includes('lineBoxHeight'),
  ),

  borderWidth: data.border.filter(variable => variable.name.includes('borderWidth')),
  borderRadius: data.border.filter(variable => variable.name.includes('borderRadius')),
  borderColor: data.colors.filter(variable => variable.name.includes('borderColor')),
  boxShadow: data.border.filter(variable => variable.name.includes('boxShadow')),

  outlineWidth: data.border.filter(variable => variable.name.includes('outline-focus-width')),
  outlineOffset: data.border.filter(variable => variable.name.includes('outline-focus-offset')),
  outlineColor: data.colors.filter(variable => variable.name.includes('outlineColor')),

  fontWeight: data.typography.filter(variable => variable.name.includes('weight')),
  fontSize: data.typography.filter(variable => variable.name.includes('size')),
  lineHeight: data.typography.filter(variable => variable.name.includes('lineHeight')),
  fontFamily: data.typography.filter(variable => variable.name.includes('fontStack')),
  font: data.typography.filter(variable => variable.name.includes('shorthand')),

  // question: should these 2 have the entire color scale as well?
  color: data.colors.filter(variable => variable.name.includes('fgColor') || variable.name.includes('iconColor')),
  backgroundColor: data.colors.filter(variable => variable.name.includes('bgColor')),

  fill: data.colors.filter(variable => variable.name.includes('iconColor')),
  stroke: data.colors.filter(variable => variable.name.includes('iconColor')),
}

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
