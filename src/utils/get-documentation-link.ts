const DOC_CONFIG = {
  color: 'https://primer.style/product/primitives/color/',
  dimension: 'https://primer.style/product/primitives/size/',
  typography: 'https://primer.style/product/primitives/typography/',
}

export const getDocumentationLink = (type: string): string => {
  const typeKey = type === 'font' ? 'typography' : type
  return DOC_CONFIG[typeKey] ?? 'https://primer.style/product/primitives/'
}
