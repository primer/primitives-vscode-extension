type DocConfig = {
  base: string
  sections: {
    hash: string
    keywords: string[]
  }[]
}

const DOC_CONFIG: Record<string, DocConfig> = {
  color: {
    base: 'https://primer.style/product/primitives/color/',
    sections: [
      {hash: '#foreground', keywords: ['fgColor']},
      {hash: '#background', keywords: ['bgColor']},
      {hash: '#border', keywords: ['borderColor']},
      {hash: '#shadow', keywords: ['shadow']},
      {hash: '#button', keywords: ['button']},
      {hash: '#control', keywords: ['control']},
      {hash: '#data-visualization', keywords: ['data']},
      {hash: '#focus', keywords: ['focus']},
      {hash: '#overlay', keywords: ['overlay']},
    ],
  },
  dimension: {
    base: 'https://primer.style/product/primitives/size/',
    sections: [
      {hash: '#base', keywords: ['base-size']},
      {hash: '#border-size', keywords: ['boxShadow']},
      {hash: '#border-radius', keywords: ['borderRadius']},
      {hash: '#outline', keywords: ['outline']},
      {hash: '#breakpoints', keywords: ['breakpoint']},
      {hash: '#viewport', keywords: ['viewportRange']},
      {hash: '#stack', keywords: ['stack']},
      {hash: '#controls', keywords: ['control']},
      {hash: '#overlay', keywords: ['overlay']},
    ],
  },
  typography: {
    base: 'https://primer.style/product/primitives/typography/',
    sections: [
      {hash: '#weight', keywords: ['base-text-weight']},
      {hash: '#font-family', keywords: ['fontStack']},
      {hash: '#display', keywords: ['text-display']},
      {hash: '#title-large', keywords: ['text-title', 'large']},
      {hash: '#title-medium', keywords: ['text-title', 'medium']},
      {hash: '#title-small', keywords: ['text-title', 'small']},
      {hash: '#subtitle', keywords: ['text-subtitle']},
      {hash: '#body-large', keywords: ['text-body', 'large']},
      {hash: '#body-medium', keywords: ['text-body', 'medium']},
      {hash: '#body-small', keywords: ['text-body', 'small']},
      {hash: '#caption', keywords: ['text-caption']},
      {hash: '#code-block', keywords: ['text-codeBlock']},
      {hash: '#inline-code-block', keywords: ['text-codeInline']},
    ],
  },
}

/**
 * Get the documentation link for a CSS variable based on its name and type.
 * Returns a specific section hash if the variable name matches known patterns,
 * otherwise returns the base documentation URL for that type.
 */
export const getDocumentationLink = (variableName: string, type: string): string => {
  const varName = variableName.toLowerCase()
  const typeKey = type === 'font' ? 'typography' : type
  const config = DOC_CONFIG[typeKey]

  if (!config) {
    return 'https://primer.style/product/primitives/'
  }

  // Find the first section where all keywords are present in the variable name
  const matchingSection = config.sections.find(section => section.keywords.every(keyword => varName.includes(keyword)))

  return config.base + (matchingSection?.hash ?? '')
}
