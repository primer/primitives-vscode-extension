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

// TODO: should we type this?
const format = (dataSubset: unknown) => {
  return Object.keys(dataSubset).map(key => {
    const value = dataSubset[key]
    return {
      name: `--${key}`,
      value: value.$value[0],
      type: 'base',
    }
  })
}

const data = {
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

export default data
