// eslint-disable-next-line import/no-namespace
import type * as CSS from 'csstype'
import fs from 'node:fs'
import path from 'node:path'
import {propertiesRules, type Suggestion} from './rules'

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

fs.writeFileSync(
  path.relative('.', './properties.ts'),
  `
    // Generated file, do not edit manually.
    export const propertiesMap = ${JSON.stringify(propertiesMapFromRules, null, 2)}
  `,
)
