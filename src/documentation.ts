import {getVariableInfo} from './utils/get-variable-info'

export const getDocumentation = (variableName: `--${string}`) => {
  const variableInfo = getVariableInfo(variableName)
  if (!variableInfo) return null

  let markdown = `**\`${variableInfo.name}\`**\n\n`
  markdown += `\n---\n\n`

  markdown += `- **Kind:** [${variableInfo.kind}](https://primer.style/product/primitives/token-names/#${variableInfo.kind})\n`
  markdown += `- **Type:** ${variableInfo.type}\n`
  markdown += `\n---\n\n`

  if (variableInfo.themeValues && Object.keys(variableInfo.themeValues).length > 0) {
    for (const [themeName, value] of Object.entries(variableInfo.themeValues)) {
      markdown += `- **${themeName}:** \`${value}\`\n`
    }
  } else {
    markdown += `**Value:** \`${variableInfo.value}\`\n\n`
  }

  markdown += `\n---\n\n`
  markdown += `[View documentation](${variableInfo.docsUrl})\n`

  return markdown
}
