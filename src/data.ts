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
  scopes: string[]
  type: string
}

const keysWithoutScope = []

// TODO: should we type dataSubset?
const format = (dataSubset: unknown): Suggestion[] => {
  return Object.keys(dataSubset).map(key => {
    const value = dataSubset[key]

    // TODO: how do we know what to do with things without scopes?
    const scope = value.$extensions?.['org.primer.figma']?.scopes ?? null
    if (scope === null) keysWithoutScope.push(key)

    return {
      name: `--${key}`,
      value: value.$value[0],
      kind: value.filePath.includes('base') ? 'base' : 'functional',
      scopes: scope || [],
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
  breakpoints: format(functionalBreakpoints),
  viewport: format(functionalViewport),
  colors: format(lightTheme),
}

// some examples are here: https://github.com/primer/primitives/pull/664/files#diff-350cd9135045d377bae89fc386cc72c23a96d793e25a8462d00fa63aebecce2fR65
export const propertiesMap: Partial<Record<keyof CSS.Properties, Suggestion[]>> = {
  paddingBlock: data.size.filter(
    variable =>
      variable.kind === 'base' ||
      (variable.kind === 'functional' && variable.name.includes('padding') && !variable.name.includes('paddingInline')),
  ),
  paddingInline: data.size.filter(
    variable =>
      variable.kind === 'base' ||
      (variable.kind === 'functional' && variable.name.includes('padding') && !variable.name.includes('paddingBlock')),
  ),
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
