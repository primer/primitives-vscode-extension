// Generated file, do not edit manually. Run 'npm run precompile' to regenerate.

// copy of type Suggestion from data/rules
export type Suggestion = {
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

export const propertiesMap: Record<string, Suggestion[]> = {
  "padding": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--overlay-padding-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-padding-condensed"
    },
    {
      "name": "--overlay-padding-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-padding-normal"
    },
    {
      "name": "--stack-padding-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-padding-condensed"
    },
    {
      "name": "--stack-padding-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-padding-normal"
    },
    {
      "name": "--stack-padding-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-padding-spacious"
    }
  ],
  "paddingBlock": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-large-paddingBlock",
      "value": "0.625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-paddingBlock"
    },
    {
      "name": "--control-medium-paddingBlock",
      "value": "0.375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-paddingBlock"
    },
    {
      "name": "--control-small-paddingBlock",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-paddingBlock"
    },
    {
      "name": "--control-xlarge-paddingBlock",
      "value": "0.875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-paddingBlock"
    },
    {
      "name": "--control-xsmall-paddingBlock",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-paddingBlock"
    },
    {
      "name": "--overlay-paddingBlock-condensed",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-paddingBlock-condensed"
    },
    {
      "name": "--overlay-paddingBlock-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-paddingBlock-normal"
    }
  ],
  "paddingInline": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-large-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-paddingInline-normal"
    },
    {
      "name": "--control-large-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-paddingInline-spacious"
    },
    {
      "name": "--control-medium-paddingInline-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-paddingInline-condensed"
    },
    {
      "name": "--control-medium-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-paddingInline-normal"
    },
    {
      "name": "--control-medium-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-paddingInline-spacious"
    },
    {
      "name": "--control-small-paddingInline-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-paddingInline-condensed"
    },
    {
      "name": "--control-small-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-paddingInline-normal"
    },
    {
      "name": "--control-xlarge-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-paddingInline-normal"
    },
    {
      "name": "--control-xlarge-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-paddingInline-spacious"
    },
    {
      "name": "--control-xsmall-paddingInline-condensed",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-paddingInline-condensed"
    },
    {
      "name": "--control-xsmall-paddingInline-normal",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-paddingInline-normal"
    },
    {
      "name": "--control-xsmall-paddingInline-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-paddingInline-spacious"
    }
  ],
  "gap": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-large-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-gap"
    },
    {
      "name": "--control-medium-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-gap"
    },
    {
      "name": "--control-small-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-gap"
    },
    {
      "name": "--control-xlarge-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-gap"
    },
    {
      "name": "--control-xsmall-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-gap"
    },
    {
      "name": "--controlStack-large-gap-auto",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-auto"
    },
    {
      "name": "--controlStack-large-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-condensed"
    },
    {
      "name": "--controlStack-large-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-spacious"
    },
    {
      "name": "--controlStack-medium-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-medium-gap-condensed"
    },
    {
      "name": "--controlStack-medium-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-medium-gap-spacious"
    },
    {
      "name": "--controlStack-small-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-small-gap-condensed"
    },
    {
      "name": "--controlStack-small-gap-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-small-gap-spacious"
    },
    {
      "name": "--stack-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-condensed"
    },
    {
      "name": "--stack-gap-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-normal"
    },
    {
      "name": "--stack-gap-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-spacious"
    }
  ],
  "margin": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-large-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-gap"
    },
    {
      "name": "--control-medium-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-gap"
    },
    {
      "name": "--control-small-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-gap"
    },
    {
      "name": "--control-xlarge-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-gap"
    },
    {
      "name": "--control-xsmall-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-gap"
    },
    {
      "name": "--controlStack-large-gap-auto",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-auto"
    },
    {
      "name": "--controlStack-large-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-condensed"
    },
    {
      "name": "--controlStack-large-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-large-gap-spacious"
    },
    {
      "name": "--controlStack-medium-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-medium-gap-condensed"
    },
    {
      "name": "--controlStack-medium-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-medium-gap-spacious"
    },
    {
      "name": "--controlStack-small-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-small-gap-condensed"
    },
    {
      "name": "--controlStack-small-gap-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--controlStack-small-gap-spacious"
    },
    {
      "name": "--stack-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-condensed"
    },
    {
      "name": "--stack-gap-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-normal"
    },
    {
      "name": "--stack-gap-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--stack-gap-spacious"
    }
  ],
  "width": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-minTarget-coarse",
      "value": "0.171875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-minTarget-coarse"
    },
    {
      "name": "--control-minTarget-fine",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-minTarget-fine"
    },
    {
      "name": "--overlay-width-large",
      "value": "40rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-width-large"
    },
    {
      "name": "--overlay-width-medium",
      "value": "30rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-width-medium"
    },
    {
      "name": "--overlay-width-small",
      "value": "20rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-width-small"
    },
    {
      "name": "--overlay-width-xlarge",
      "value": "60rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-width-xlarge"
    },
    {
      "name": "--overlay-width-xsmall",
      "value": "12rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-width-xsmall"
    },
    {
      "name": "--breakpoint-large",
      "value": "63.25rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-large"
    },
    {
      "name": "--breakpoint-medium",
      "value": "48rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-medium"
    },
    {
      "name": "--breakpoint-small",
      "value": "34rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-small"
    },
    {
      "name": "--breakpoint-xlarge",
      "value": "80rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-xlarge"
    },
    {
      "name": "--breakpoint-xsmall",
      "value": "20rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-xsmall"
    },
    {
      "name": "--breakpoint-xxlarge",
      "value": "87.5rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--breakpoint-xxlarge"
    }
  ],
  "height": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-112"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-12"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-128"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-16"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-2"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-20"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-24"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-28"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-32"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-36"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-4"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-40"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-44"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-48"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-6"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-64"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-8"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-80"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--base-size-96"
    },
    {
      "name": "--control-large-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-lineBoxHeight"
    },
    {
      "name": "--control-large-size",
      "value": "0.15625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-large-size"
    },
    {
      "name": "--control-medium-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-lineBoxHeight"
    },
    {
      "name": "--control-medium-size",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-medium-size"
    },
    {
      "name": "--control-minTarget-coarse",
      "value": "0.171875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-minTarget-coarse"
    },
    {
      "name": "--control-minTarget-fine",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-minTarget-fine"
    },
    {
      "name": "--control-small-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-lineBoxHeight"
    },
    {
      "name": "--control-small-size",
      "value": "0.109375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-small-size"
    },
    {
      "name": "--control-xlarge-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-lineBoxHeight"
    },
    {
      "name": "--control-xlarge-size",
      "value": "0.1875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xlarge-size"
    },
    {
      "name": "--control-xsmall-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-lineBoxHeight"
    },
    {
      "name": "--control-xsmall-size",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--control-xsmall-size"
    },
    {
      "name": "--overlay-height-large",
      "value": "27rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-height-large"
    },
    {
      "name": "--overlay-height-medium",
      "value": "20rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-height-medium"
    },
    {
      "name": "--overlay-height-small",
      "value": "16rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-height-small"
    },
    {
      "name": "--overlay-height-xlarge",
      "value": "37.5rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--overlay-height-xlarge"
    },
    {
      "name": "--spinner-size-large",
      "value": "0.25rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--spinner-size-large"
    },
    {
      "name": "--spinner-size-medium",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--spinner-size-medium"
    },
    {
      "name": "--spinner-size-small",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--spinner-size-small"
    }
  ],
  "borderWidth": [
    {
      "name": "--borderWidth-default",
      "value": "0.00390625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderWidth-default"
    },
    {
      "name": "--borderWidth-thick",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderWidth-thick"
    },
    {
      "name": "--borderWidth-thicker",
      "value": "0.25rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderWidth-thicker"
    },
    {
      "name": "--borderWidth-thin",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderWidth-thin"
    }
  ],
  "borderRadius": [
    {
      "name": "--borderRadius-default",
      "value": "0.0234375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderRadius-default"
    },
    {
      "name": "--borderRadius-full",
      "value": "624.9375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderRadius-full"
    },
    {
      "name": "--borderRadius-large",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderRadius-large"
    },
    {
      "name": "--borderRadius-medium",
      "value": "0.375rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderRadius-medium"
    },
    {
      "name": "--borderRadius-small",
      "value": "0.1875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--borderRadius-small"
    }
  ],
  "borderColor": [
    {
      "name": "--avatar-borderColor",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--avatar-borderColor"
    },
    {
      "name": "--borderColor-accent-emphasis",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-accent-emphasis"
    },
    {
      "name": "--borderColor-accent-muted",
      "value": "#54aeff66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-accent-muted"
    },
    {
      "name": "--borderColor-attention-emphasis",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-attention-emphasis"
    },
    {
      "name": "--borderColor-attention-muted",
      "value": "#d4a72c66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-attention-muted"
    },
    {
      "name": "--borderColor-closed-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-closed-emphasis"
    },
    {
      "name": "--borderColor-closed-muted",
      "value": "#ff818266",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-closed-muted"
    },
    {
      "name": "--borderColor-danger-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-danger-emphasis"
    },
    {
      "name": "--borderColor-danger-muted",
      "value": "#ff818266",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-danger-muted"
    },
    {
      "name": "--borderColor-default",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-default"
    },
    {
      "name": "--borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-disabled"
    },
    {
      "name": "--borderColor-done-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-done-emphasis"
    },
    {
      "name": "--borderColor-done-muted",
      "value": "#c297ff66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-done-muted"
    },
    {
      "name": "--borderColor-draft-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-draft-emphasis"
    },
    {
      "name": "--borderColor-draft-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-draft-muted"
    },
    {
      "name": "--borderColor-emphasis",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-emphasis"
    },
    {
      "name": "--borderColor-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-muted"
    },
    {
      "name": "--borderColor-neutral-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-neutral-emphasis"
    },
    {
      "name": "--borderColor-neutral-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-neutral-muted"
    },
    {
      "name": "--borderColor-open-emphasis",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-open-emphasis"
    },
    {
      "name": "--borderColor-open-muted",
      "value": "#4ac26b66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-open-muted"
    },
    {
      "name": "--borderColor-severe-emphasis",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-severe-emphasis"
    },
    {
      "name": "--borderColor-severe-muted",
      "value": "#fb8f4466",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-severe-muted"
    },
    {
      "name": "--borderColor-sponsors-emphasis",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-sponsors-emphasis"
    },
    {
      "name": "--borderColor-sponsors-muted",
      "value": "#ff80c866",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-sponsors-muted"
    },
    {
      "name": "--borderColor-success-emphasis",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-success-emphasis"
    },
    {
      "name": "--borderColor-success-muted",
      "value": "#4ac26b66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-success-muted"
    },
    {
      "name": "--borderColor-translucent",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-translucent"
    },
    {
      "name": "--borderColor-transparent",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-transparent"
    },
    {
      "name": "--borderColor-upsell-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-upsell-emphasis"
    },
    {
      "name": "--borderColor-upsell-muted",
      "value": "#c297ff66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--borderColor-upsell-muted"
    },
    {
      "name": "--button-danger-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-borderColor-active"
    },
    {
      "name": "--button-danger-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-borderColor-hover"
    },
    {
      "name": "--button-danger-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-borderColor-rest"
    },
    {
      "name": "--button-default-borderColor-active",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-borderColor-active"
    },
    {
      "name": "--button-default-borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-borderColor-disabled"
    },
    {
      "name": "--button-default-borderColor-hover",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-borderColor-hover"
    },
    {
      "name": "--button-default-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-borderColor-rest"
    },
    {
      "name": "--button-invisible-borderColor-disabled",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-borderColor-disabled"
    },
    {
      "name": "--button-invisible-borderColor-hover",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-borderColor-hover"
    },
    {
      "name": "--button-invisible-borderColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-borderColor-rest"
    },
    {
      "name": "--button-outline-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-borderColor-active"
    },
    {
      "name": "--button-outline-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-borderColor-hover"
    },
    {
      "name": "--button-primary-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-borderColor-active"
    },
    {
      "name": "--button-primary-borderColor-disabled",
      "value": "#95d8a6",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-borderColor-disabled"
    },
    {
      "name": "--button-primary-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-borderColor-hover"
    },
    {
      "name": "--button-primary-borderColor-rest",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-borderColor-rest"
    },
    {
      "name": "--contribution-default-borderColor-0",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-borderColor-0"
    },
    {
      "name": "--contribution-default-borderColor-1",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-borderColor-1"
    },
    {
      "name": "--contribution-default-borderColor-2",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-borderColor-2"
    },
    {
      "name": "--contribution-default-borderColor-3",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-borderColor-3"
    },
    {
      "name": "--contribution-default-borderColor-4",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-borderColor-4"
    },
    {
      "name": "--control-borderColor-danger",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-danger"
    },
    {
      "name": "--control-borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-disabled"
    },
    {
      "name": "--control-borderColor-emphasis",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-emphasis"
    },
    {
      "name": "--control-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-rest"
    },
    {
      "name": "--control-borderColor-selected",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-selected"
    },
    {
      "name": "--control-borderColor-success",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-success"
    },
    {
      "name": "--control-borderColor-warning",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-borderColor-warning"
    },
    {
      "name": "--control-checked-borderColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-borderColor-active"
    },
    {
      "name": "--control-checked-borderColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-borderColor-disabled"
    },
    {
      "name": "--control-checked-borderColor-hover",
      "value": "#0860ca",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-borderColor-hover"
    },
    {
      "name": "--control-checked-borderColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-borderColor-rest"
    },
    {
      "name": "--control-transparent-borderColor-active",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-borderColor-active"
    },
    {
      "name": "--control-transparent-borderColor-hover",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-borderColor-hover"
    },
    {
      "name": "--control-transparent-borderColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-borderColor-rest"
    },
    {
      "name": "--controlKnob-borderColor-checked",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-borderColor-checked"
    },
    {
      "name": "--controlKnob-borderColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-borderColor-disabled"
    },
    {
      "name": "--controlKnob-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-borderColor-rest"
    },
    {
      "name": "--controlTrack-borderColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-borderColor-disabled"
    },
    {
      "name": "--controlTrack-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-borderColor-rest"
    },
    {
      "name": "--counter-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--counter-borderColor"
    },
    {
      "name": "--display-auburn-borderColor-emphasis",
      "value": "#9d615c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-auburn-borderColor-emphasis"
    },
    {
      "name": "--display-auburn-borderColor-muted",
      "value": "#e6d6d5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-auburn-borderColor-muted"
    },
    {
      "name": "--display-blue-borderColor-emphasis",
      "value": "#006edb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-blue-borderColor-emphasis"
    },
    {
      "name": "--display-blue-borderColor-muted",
      "value": "#ade1ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-blue-borderColor-muted"
    },
    {
      "name": "--display-brown-borderColor-emphasis",
      "value": "#856d4c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-brown-borderColor-emphasis"
    },
    {
      "name": "--display-brown-borderColor-muted",
      "value": "#dfd7c8",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-brown-borderColor-muted"
    },
    {
      "name": "--display-coral-borderColor-emphasis",
      "value": "#d43511",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-coral-borderColor-emphasis"
    },
    {
      "name": "--display-coral-borderColor-muted",
      "value": "#fecebe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-coral-borderColor-muted"
    },
    {
      "name": "--display-cyan-borderColor-emphasis",
      "value": "#007b94",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-cyan-borderColor-emphasis"
    },
    {
      "name": "--display-cyan-borderColor-muted",
      "value": "#7ae9ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-cyan-borderColor-muted"
    },
    {
      "name": "--display-gray-borderColor-emphasis",
      "value": "#647182",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-gray-borderColor-emphasis"
    },
    {
      "name": "--display-gray-borderColor-muted",
      "value": "#d2dae4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-gray-borderColor-muted"
    },
    {
      "name": "--display-green-borderColor-emphasis",
      "value": "#2c8141",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-green-borderColor-emphasis"
    },
    {
      "name": "--display-green-borderColor-muted",
      "value": "#9ceda0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-green-borderColor-muted"
    },
    {
      "name": "--display-indigo-borderColor-emphasis",
      "value": "#5a61e7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-indigo-borderColor-emphasis"
    },
    {
      "name": "--display-indigo-borderColor-muted",
      "value": "#d2d7fe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-indigo-borderColor-muted"
    },
    {
      "name": "--display-lemon-borderColor-emphasis",
      "value": "#866e04",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lemon-borderColor-emphasis"
    },
    {
      "name": "--display-lemon-borderColor-muted",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lemon-borderColor-muted"
    },
    {
      "name": "--display-lime-borderColor-emphasis",
      "value": "#527a29",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lime-borderColor-emphasis"
    },
    {
      "name": "--display-lime-borderColor-muted",
      "value": "#c7e580",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lime-borderColor-muted"
    },
    {
      "name": "--display-olive-borderColor-emphasis",
      "value": "#64762d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-olive-borderColor-emphasis"
    },
    {
      "name": "--display-olive-borderColor-muted",
      "value": "#dbe170",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-olive-borderColor-muted"
    },
    {
      "name": "--display-orange-borderColor-emphasis",
      "value": "#b8500f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-orange-borderColor-emphasis"
    },
    {
      "name": "--display-orange-borderColor-muted",
      "value": "#fecfaa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-orange-borderColor-muted"
    },
    {
      "name": "--display-pine-borderColor-emphasis",
      "value": "#167e53",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pine-borderColor-emphasis"
    },
    {
      "name": "--display-pine-borderColor-muted",
      "value": "#80efb9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pine-borderColor-muted"
    },
    {
      "name": "--display-pink-borderColor-emphasis",
      "value": "#ce2c85",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pink-borderColor-emphasis"
    },
    {
      "name": "--display-pink-borderColor-muted",
      "value": "#fdc9e2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pink-borderColor-muted"
    },
    {
      "name": "--display-plum-borderColor-emphasis",
      "value": "#a830e8",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-plum-borderColor-emphasis"
    },
    {
      "name": "--display-plum-borderColor-muted",
      "value": "#f0cdfe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-plum-borderColor-muted"
    },
    {
      "name": "--display-purple-borderColor-emphasis",
      "value": "#894ceb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-purple-borderColor-emphasis"
    },
    {
      "name": "--display-purple-borderColor-muted",
      "value": "#e6d2fe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-purple-borderColor-muted"
    },
    {
      "name": "--display-red-borderColor-emphasis",
      "value": "#df0c24",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-red-borderColor-emphasis"
    },
    {
      "name": "--display-red-borderColor-muted",
      "value": "#fecdcd",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-red-borderColor-muted"
    },
    {
      "name": "--display-teal-borderColor-emphasis",
      "value": "#127e81",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-teal-borderColor-emphasis"
    },
    {
      "name": "--display-teal-borderColor-muted",
      "value": "#89ebe1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-teal-borderColor-muted"
    },
    {
      "name": "--display-yellow-borderColor-emphasis",
      "value": "#946a00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-yellow-borderColor-emphasis"
    },
    {
      "name": "--display-yellow-borderColor-muted",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-yellow-borderColor-muted"
    },
    {
      "name": "--header-borderColor-divider",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--header-borderColor-divider"
    },
    {
      "name": "--headerSearch-borderColor",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--headerSearch-borderColor"
    },
    {
      "name": "--label-auburn-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-borderColor"
    },
    {
      "name": "--label-blue-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-borderColor"
    },
    {
      "name": "--label-brown-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-borderColor"
    },
    {
      "name": "--label-coral-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-borderColor"
    },
    {
      "name": "--label-cyan-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-borderColor"
    },
    {
      "name": "--label-gray-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-borderColor"
    },
    {
      "name": "--label-green-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-borderColor"
    },
    {
      "name": "--label-indigo-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-borderColor"
    },
    {
      "name": "--label-lemon-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-borderColor"
    },
    {
      "name": "--label-lime-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-borderColor"
    },
    {
      "name": "--label-olive-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-borderColor"
    },
    {
      "name": "--label-orange-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-borderColor"
    },
    {
      "name": "--label-pine-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-borderColor"
    },
    {
      "name": "--label-pink-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-borderColor"
    },
    {
      "name": "--label-plum-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-borderColor"
    },
    {
      "name": "--label-purple-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-borderColor"
    },
    {
      "name": "--label-red-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-borderColor"
    },
    {
      "name": "--label-teal-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-borderColor"
    },
    {
      "name": "--label-yellow-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-borderColor"
    },
    {
      "name": "--overlay-borderColor",
      "value": "#d1d9e080",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--overlay-borderColor"
    },
    {
      "name": "--progressBar-track-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-track-borderColor"
    },
    {
      "name": "--selectMenu-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--selectMenu-borderColor"
    },
    {
      "name": "--topicTag-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--topicTag-borderColor"
    },
    {
      "name": "--underlineNav-borderColor-active",
      "value": "#fd8c73",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--underlineNav-borderColor-active"
    },
    {
      "name": "--underlineNav-borderColor-hover",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--underlineNav-borderColor-hover"
    }
  ],
  "boxShadow": [
    {
      "name": "--boxShadow-thick",
      "value": "inset 0 0 0 0.125rem,2px",
      "kind": "functional",
      "type": "string",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--boxShadow-thick"
    },
    {
      "name": "--boxShadow-thicker",
      "value": "inset 0 0 0 0.25rem,4px",
      "kind": "functional",
      "type": "string",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--boxShadow-thicker"
    },
    {
      "name": "--boxShadow-thin",
      "value": "inset 0 0 0 0.0625rem,1px",
      "kind": "functional",
      "type": "string",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--boxShadow-thin"
    }
  ],
  "outlineWidth": [
    {
      "name": "--outline-focus-width",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--outline-focus-width"
    }
  ],
  "outlineOffset": [
    {
      "name": "--outline-focus-offset",
      "value": "-0.125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/size?variable=--outline-focus-offset"
    }
  ],
  "outlineColor": [
    {
      "name": "--focus-outlineColor",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--focus-outlineColor"
    }
  ],
  "fontWeight": [
    {
      "name": "--base-text-weight-light",
      "value": 300,
      "kind": "base",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--base-text-weight-light"
    },
    {
      "name": "--base-text-weight-medium",
      "value": 500,
      "kind": "base",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--base-text-weight-medium"
    },
    {
      "name": "--base-text-weight-normal",
      "value": 400,
      "kind": "base",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--base-text-weight-normal"
    },
    {
      "name": "--base-text-weight-semibold",
      "value": 600,
      "kind": "base",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--base-text-weight-semibold"
    },
    {
      "name": "--text-body-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-weight"
    },
    {
      "name": "--text-caption-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-caption-weight"
    },
    {
      "name": "--text-codeBlock-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeBlock-weight"
    },
    {
      "name": "--text-codeInline-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeInline-weight"
    },
    {
      "name": "--text-display-weight",
      "value": 500,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-display-weight"
    },
    {
      "name": "--text-subtitle-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-subtitle-weight"
    },
    {
      "name": "--text-title-weight-large",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-weight-large"
    },
    {
      "name": "--text-title-weight-medium",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-weight-medium"
    },
    {
      "name": "--text-title-weight-small",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-weight-small"
    }
  ],
  "fontSize": [
    {
      "name": "--text-body-size-large",
      "value": "1rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-size-large"
    },
    {
      "name": "--text-body-size-medium",
      "value": "0.875rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-size-medium"
    },
    {
      "name": "--text-body-size-small",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-size-small"
    },
    {
      "name": "--text-caption-size",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-caption-size"
    },
    {
      "name": "--text-codeBlock-size",
      "value": "0.8125rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeBlock-size"
    },
    {
      "name": "--text-codeInline-size",
      "value": null,
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeInline-size"
    },
    {
      "name": "--text-display-size",
      "value": "2.5rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-display-size"
    },
    {
      "name": "--text-subtitle-size",
      "value": "1.25rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-subtitle-size"
    },
    {
      "name": "--text-title-size-large",
      "value": "2rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-size-large"
    },
    {
      "name": "--text-title-size-medium",
      "value": "1.25rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-size-medium"
    },
    {
      "name": "--text-title-size-small",
      "value": "1rem",
      "kind": "functional",
      "type": "dimension",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-size-small"
    }
  ],
  "lineHeight": [
    {
      "name": "--text-body-lineHeight-large",
      "value": 1.5,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-lineHeight-large"
    },
    {
      "name": "--text-body-lineHeight-medium",
      "value": 1.4285,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-lineHeight-medium"
    },
    {
      "name": "--text-body-lineHeight-small",
      "value": 1.6666,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-lineHeight-small"
    },
    {
      "name": "--text-caption-lineHeight",
      "value": 1.3333,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-caption-lineHeight"
    },
    {
      "name": "--text-codeBlock-lineHeight",
      "value": 1.5385,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeBlock-lineHeight"
    },
    {
      "name": "--text-display-lineHeight",
      "value": 1.4,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-display-lineHeight"
    },
    {
      "name": "--text-subtitle-lineHeight",
      "value": 1.6,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-subtitle-lineHeight"
    },
    {
      "name": "--text-title-lineHeight-large",
      "value": 1.5,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-lineHeight-large"
    },
    {
      "name": "--text-title-lineHeight-medium",
      "value": 1.6,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-lineHeight-medium"
    },
    {
      "name": "--text-title-lineHeight-small",
      "value": 1.5,
      "kind": "functional",
      "type": "number",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-lineHeight-small"
    }
  ],
  "fontFamily": [
    {
      "name": "--fontStack-monospace",
      "value": "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "fontFamily",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--fontStack-monospace"
    },
    {
      "name": "--fontStack-sansSerif",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--fontStack-sansSerif"
    },
    {
      "name": "--fontStack-sansSerifDisplay",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--fontStack-sansSerifDisplay"
    },
    {
      "name": "--fontStack-system",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--fontStack-system"
    }
  ],
  "font": [
    {
      "name": "--text-body-shorthand-large",
      "value": "400 1rem,16px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-shorthand-large"
    },
    {
      "name": "--text-body-shorthand-medium",
      "value": "400 0.875rem,14px/1.4285 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-shorthand-medium"
    },
    {
      "name": "--text-body-shorthand-small",
      "value": "400 0.75rem,12px/1.6666 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-body-shorthand-small"
    },
    {
      "name": "--text-caption-shorthand",
      "value": "400 0.75rem,12px/1.3333 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-caption-shorthand"
    },
    {
      "name": "--text-codeBlock-shorthand",
      "value": "400 0.8125rem,13px/1.5385 ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeBlock-shorthand"
    },
    {
      "name": "--text-codeInline-shorthand",
      "value": "400 ,14.856px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-codeInline-shorthand"
    },
    {
      "name": "--text-display-shorthand",
      "value": "500 2.5rem,40px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-display-shorthand"
    },
    {
      "name": "--text-subtitle-shorthand",
      "value": "400 1.25rem,20px/1.6 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-subtitle-shorthand"
    },
    {
      "name": "--text-title-shorthand-large",
      "value": "600 2rem,32px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-shorthand-large"
    },
    {
      "name": "--text-title-shorthand-medium",
      "value": "600 1.25rem,20px/1.6 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-shorthand-medium"
    },
    {
      "name": "--text-title-shorthand-small",
      "value": "600 1rem,16px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography",
      "docsUrl": "https://primer.style/product/primitives/typography?variable=--text-title-shorthand-small"
    }
  ],
  "color": [
    {
      "name": "--button-danger-fgColor-active",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-fgColor-active"
    },
    {
      "name": "--button-danger-fgColor-disabled",
      "value": "#d1242f80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-fgColor-disabled"
    },
    {
      "name": "--button-danger-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-fgColor-hover"
    },
    {
      "name": "--button-danger-fgColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-fgColor-rest"
    },
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-hover"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-rest"
    },
    {
      "name": "--button-default-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-fgColor-rest"
    },
    {
      "name": "--button-inactive-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-inactive-fgColor"
    },
    {
      "name": "--button-invisible-fgColor-active",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-fgColor-active"
    },
    {
      "name": "--button-invisible-fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-fgColor-disabled"
    },
    {
      "name": "--button-invisible-fgColor-hover",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-fgColor-hover"
    },
    {
      "name": "--button-invisible-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-fgColor-rest"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-disabled"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-hover"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-rest"
    },
    {
      "name": "--button-outline-fgColor-active",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-fgColor-active"
    },
    {
      "name": "--button-outline-fgColor-disabled",
      "value": "#0969da80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-fgColor-disabled"
    },
    {
      "name": "--button-outline-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-fgColor-hover"
    },
    {
      "name": "--button-outline-fgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-fgColor-rest"
    },
    {
      "name": "--button-primary-fgColor-disabled",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-fgColor-disabled"
    },
    {
      "name": "--button-primary-fgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-fgColor-rest"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-iconColor-rest"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-star-iconColor"
    },
    {
      "name": "--buttonCounter-danger-fgColor-disabled",
      "value": "#d1242f80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-fgColor-disabled"
    },
    {
      "name": "--buttonCounter-danger-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-fgColor-hover"
    },
    {
      "name": "--buttonCounter-danger-fgColor-rest",
      "value": "#c21c2c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-fgColor-rest"
    },
    {
      "name": "--buttonCounter-outline-fgColor-disabled",
      "value": "#0969da80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-fgColor-disabled"
    },
    {
      "name": "--buttonCounter-outline-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-fgColor-hover"
    },
    {
      "name": "--buttonCounter-outline-fgColor-rest",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-fgColor-rest"
    },
    {
      "name": "--codeMirror-cursor-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-cursor-fgColor"
    },
    {
      "name": "--codeMirror-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-fgColor"
    },
    {
      "name": "--codeMirror-gutterMarker-fgColor-default",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-gutterMarker-fgColor-default"
    },
    {
      "name": "--codeMirror-gutterMarker-fgColor-muted",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-gutterMarker-fgColor-muted"
    },
    {
      "name": "--codeMirror-lineNumber-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-lineNumber-fgColor"
    },
    {
      "name": "--codeMirror-matchingBracket-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-matchingBracket-fgColor"
    },
    {
      "name": "--codeMirror-syntax-fgColor-comment",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-comment"
    },
    {
      "name": "--codeMirror-syntax-fgColor-constant",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-constant"
    },
    {
      "name": "--codeMirror-syntax-fgColor-entity",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-entity"
    },
    {
      "name": "--codeMirror-syntax-fgColor-keyword",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-keyword"
    },
    {
      "name": "--codeMirror-syntax-fgColor-storage",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-storage"
    },
    {
      "name": "--codeMirror-syntax-fgColor-string",
      "value": "#0a3069",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-string"
    },
    {
      "name": "--codeMirror-syntax-fgColor-support",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-support"
    },
    {
      "name": "--codeMirror-syntax-fgColor-variable",
      "value": "#953800",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-syntax-fgColor-variable"
    },
    {
      "name": "--control-checked-fgColor-disabled",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-fgColor-disabled"
    },
    {
      "name": "--control-checked-fgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-fgColor-rest"
    },
    {
      "name": "--control-danger-fgColor-hover",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-danger-fgColor-hover"
    },
    {
      "name": "--control-danger-fgColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-danger-fgColor-rest"
    },
    {
      "name": "--control-fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-fgColor-disabled"
    },
    {
      "name": "--control-fgColor-placeholder",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-fgColor-placeholder"
    },
    {
      "name": "--control-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-fgColor-rest"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-iconColor-rest"
    },
    {
      "name": "--controlTrack-fgColor-disabled",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-fgColor-disabled"
    },
    {
      "name": "--controlTrack-fgColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-fgColor-rest"
    },
    {
      "name": "--diffBlob-additionLine-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionLine-fgColor"
    },
    {
      "name": "--diffBlob-additionNum-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionNum-fgColor"
    },
    {
      "name": "--diffBlob-additionWord-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionWord-fgColor"
    },
    {
      "name": "--diffBlob-deletionLine-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionLine-fgColor"
    },
    {
      "name": "--diffBlob-deletionNum-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionNum-fgColor"
    },
    {
      "name": "--diffBlob-deletionWord-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionWord-fgColor"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-expander-iconColor"
    },
    {
      "name": "--diffBlob-hunkLine-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkLine-fgColor"
    },
    {
      "name": "--diffBlob-hunkNum-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkNum-fgColor-hover"
    },
    {
      "name": "--diffBlob-hunkNum-fgColor-rest",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkNum-fgColor-rest"
    },
    {
      "name": "--display-auburn-fgColor",
      "value": "#8a5551",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-auburn-fgColor"
    },
    {
      "name": "--display-blue-fgColor",
      "value": "#005fcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-blue-fgColor"
    },
    {
      "name": "--display-brown-fgColor",
      "value": "#755f43",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-brown-fgColor"
    },
    {
      "name": "--display-coral-fgColor",
      "value": "#ba2e12",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-coral-fgColor"
    },
    {
      "name": "--display-cyan-fgColor",
      "value": "#006a80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-cyan-fgColor"
    },
    {
      "name": "--display-gray-fgColor",
      "value": "#5c6570",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-gray-fgColor"
    },
    {
      "name": "--display-green-fgColor",
      "value": "#2b6e3f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-green-fgColor"
    },
    {
      "name": "--display-indigo-fgColor",
      "value": "#494edf",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-indigo-fgColor"
    },
    {
      "name": "--display-lemon-fgColor",
      "value": "#786002",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lemon-fgColor"
    },
    {
      "name": "--display-lime-fgColor",
      "value": "#476c28",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lime-fgColor"
    },
    {
      "name": "--display-olive-fgColor",
      "value": "#56682c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-olive-fgColor"
    },
    {
      "name": "--display-orange-fgColor",
      "value": "#a24610",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-orange-fgColor"
    },
    {
      "name": "--display-pine-fgColor",
      "value": "#156f4b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pine-fgColor"
    },
    {
      "name": "--display-pink-fgColor",
      "value": "#b12f79",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pink-fgColor"
    },
    {
      "name": "--display-plum-fgColor",
      "value": "#961edc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-plum-fgColor"
    },
    {
      "name": "--display-purple-fgColor",
      "value": "#783ae4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-purple-fgColor"
    },
    {
      "name": "--display-red-fgColor",
      "value": "#c50d28",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-red-fgColor"
    },
    {
      "name": "--display-teal-fgColor",
      "value": "#106e75",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-teal-fgColor"
    },
    {
      "name": "--display-yellow-fgColor",
      "value": "#805900",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-yellow-fgColor"
    },
    {
      "name": "--fgColor-accent",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-accent"
    },
    {
      "name": "--fgColor-attention",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-attention"
    },
    {
      "name": "--fgColor-black",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-black"
    },
    {
      "name": "--fgColor-closed",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-closed"
    },
    {
      "name": "--fgColor-danger",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-danger"
    },
    {
      "name": "--fgColor-default",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-default"
    },
    {
      "name": "--fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-disabled"
    },
    {
      "name": "--fgColor-done",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-done"
    },
    {
      "name": "--fgColor-draft",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-draft"
    },
    {
      "name": "--fgColor-link",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-link"
    },
    {
      "name": "--fgColor-muted",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-muted"
    },
    {
      "name": "--fgColor-neutral",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-neutral"
    },
    {
      "name": "--fgColor-onEmphasis",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-onEmphasis"
    },
    {
      "name": "--fgColor-onInverse",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-onInverse"
    },
    {
      "name": "--fgColor-open",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-open"
    },
    {
      "name": "--fgColor-severe",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-severe"
    },
    {
      "name": "--fgColor-sponsors",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-sponsors"
    },
    {
      "name": "--fgColor-success",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-success"
    },
    {
      "name": "--fgColor-upsell",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-upsell"
    },
    {
      "name": "--fgColor-white",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--fgColor-white"
    },
    {
      "name": "--header-fgColor-default",
      "value": "#ffffffb3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--header-fgColor-default"
    },
    {
      "name": "--header-fgColor-logo",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--header-fgColor-logo"
    },
    {
      "name": "--label-auburn-fgColor-active",
      "value": "#5d3937",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-fgColor-active"
    },
    {
      "name": "--label-auburn-fgColor-hover",
      "value": "#744744",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-fgColor-hover"
    },
    {
      "name": "--label-auburn-fgColor-rest",
      "value": "#8a5551",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-fgColor-rest"
    },
    {
      "name": "--label-blue-fgColor-active",
      "value": "#003d99",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-fgColor-active"
    },
    {
      "name": "--label-blue-fgColor-hover",
      "value": "#004db3",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-fgColor-hover"
    },
    {
      "name": "--label-blue-fgColor-rest",
      "value": "#005fcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-fgColor-rest"
    },
    {
      "name": "--label-brown-fgColor-active",
      "value": "#51412f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-fgColor-active"
    },
    {
      "name": "--label-brown-fgColor-hover",
      "value": "#64513a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-fgColor-hover"
    },
    {
      "name": "--label-brown-fgColor-rest",
      "value": "#755f43",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-fgColor-rest"
    },
    {
      "name": "--label-coral-fgColor-active",
      "value": "#7e2011",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-fgColor-active"
    },
    {
      "name": "--label-coral-fgColor-hover",
      "value": "#9b2712",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-fgColor-hover"
    },
    {
      "name": "--label-coral-fgColor-rest",
      "value": "#ba2e12",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-fgColor-rest"
    },
    {
      "name": "--label-cyan-fgColor-active",
      "value": "#004857",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-fgColor-active"
    },
    {
      "name": "--label-cyan-fgColor-hover",
      "value": "#00596b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-fgColor-hover"
    },
    {
      "name": "--label-cyan-fgColor-rest",
      "value": "#006a80",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-fgColor-rest"
    },
    {
      "name": "--label-gray-fgColor-active",
      "value": "#424448",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-fgColor-active"
    },
    {
      "name": "--label-gray-fgColor-hover",
      "value": "#4e535a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-fgColor-hover"
    },
    {
      "name": "--label-gray-fgColor-rest",
      "value": "#5c6570",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-fgColor-rest"
    },
    {
      "name": "--label-green-fgColor-active",
      "value": "#254b34",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-fgColor-active"
    },
    {
      "name": "--label-green-fgColor-hover",
      "value": "#285c3b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-fgColor-hover"
    },
    {
      "name": "--label-green-fgColor-rest",
      "value": "#2b6e3f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-fgColor-rest"
    },
    {
      "name": "--label-indigo-fgColor-active",
      "value": "#2d2db4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-fgColor-active"
    },
    {
      "name": "--label-indigo-fgColor-hover",
      "value": "#393cd5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-fgColor-hover"
    },
    {
      "name": "--label-indigo-fgColor-rest",
      "value": "#494edf",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-fgColor-rest"
    },
    {
      "name": "--label-lemon-fgColor-active",
      "value": "#523f00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-fgColor-active"
    },
    {
      "name": "--label-lemon-fgColor-hover",
      "value": "#654f01",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-fgColor-hover"
    },
    {
      "name": "--label-lemon-fgColor-rest",
      "value": "#786002",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-fgColor-rest"
    },
    {
      "name": "--label-lime-fgColor-active",
      "value": "#2f4a21",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-fgColor-active"
    },
    {
      "name": "--label-lime-fgColor-hover",
      "value": "#3a5b25",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-fgColor-hover"
    },
    {
      "name": "--label-lime-fgColor-rest",
      "value": "#476c28",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-fgColor-rest"
    },
    {
      "name": "--label-olive-fgColor-active",
      "value": "#3b4927",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-fgColor-active"
    },
    {
      "name": "--label-olive-fgColor-hover",
      "value": "#495a2b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-fgColor-hover"
    },
    {
      "name": "--label-olive-fgColor-rest",
      "value": "#56682c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-fgColor-rest"
    },
    {
      "name": "--label-orange-fgColor-active",
      "value": "#70300f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-fgColor-active"
    },
    {
      "name": "--label-orange-fgColor-hover",
      "value": "#8d3c11",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-fgColor-hover"
    },
    {
      "name": "--label-orange-fgColor-rest",
      "value": "#a24610",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-fgColor-rest"
    },
    {
      "name": "--label-pine-fgColor-active",
      "value": "#114b36",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-fgColor-active"
    },
    {
      "name": "--label-pine-fgColor-hover",
      "value": "#135d41",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-fgColor-hover"
    },
    {
      "name": "--label-pine-fgColor-rest",
      "value": "#156f4b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-fgColor-rest"
    },
    {
      "name": "--label-pink-fgColor-active",
      "value": "#6e2b53",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-fgColor-active"
    },
    {
      "name": "--label-pink-fgColor-hover",
      "value": "#8e2e66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-fgColor-hover"
    },
    {
      "name": "--label-pink-fgColor-rest",
      "value": "#b12f79",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-fgColor-rest"
    },
    {
      "name": "--label-plum-fgColor-active",
      "value": "#651d96",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-fgColor-active"
    },
    {
      "name": "--label-plum-fgColor-hover",
      "value": "#7d1eb8",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-fgColor-hover"
    },
    {
      "name": "--label-plum-fgColor-rest",
      "value": "#961edc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-fgColor-rest"
    },
    {
      "name": "--label-purple-fgColor-active",
      "value": "#4f21ab",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-fgColor-active"
    },
    {
      "name": "--label-purple-fgColor-hover",
      "value": "#6223d7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-fgColor-hover"
    },
    {
      "name": "--label-purple-fgColor-rest",
      "value": "#783ae4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-fgColor-rest"
    },
    {
      "name": "--label-red-fgColor-active",
      "value": "#880c27",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-fgColor-active"
    },
    {
      "name": "--label-red-fgColor-hover",
      "value": "#a60c29",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-fgColor-hover"
    },
    {
      "name": "--label-red-fgColor-rest",
      "value": "#c50d28",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-fgColor-rest"
    },
    {
      "name": "--label-teal-fgColor-active",
      "value": "#0a4852",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-fgColor-active"
    },
    {
      "name": "--label-teal-fgColor-hover",
      "value": "#0d5b63",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-fgColor-hover"
    },
    {
      "name": "--label-teal-fgColor-rest",
      "value": "#106e75",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-fgColor-rest"
    },
    {
      "name": "--label-yellow-fgColor-active",
      "value": "#5c3d00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-fgColor-active"
    },
    {
      "name": "--label-yellow-fgColor-hover",
      "value": "#704d00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-fgColor-hover"
    },
    {
      "name": "--label-yellow-fgColor-rest",
      "value": "#805900",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-fgColor-rest"
    },
    {
      "name": "--reactionButton-selected-fgColor-hover",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--reactionButton-selected-fgColor-hover"
    },
    {
      "name": "--reactionButton-selected-fgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--reactionButton-selected-fgColor-rest"
    },
    {
      "name": "--tooltip-fgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--tooltip-fgColor"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--treeViewItem-leadingVisual-iconColor-rest"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--underlineNav-iconColor-rest"
    }
  ],
  "backgroundColor": [
    {
      "name": "--avatar-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--avatar-bgColor"
    },
    {
      "name": "--avatarStack-fade-bgColor-default",
      "value": "#c8d1da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--avatarStack-fade-bgColor-default"
    },
    {
      "name": "--avatarStack-fade-bgColor-muted",
      "value": "#dae0e7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--avatarStack-fade-bgColor-muted"
    },
    {
      "name": "--bgColor-accent-emphasis",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-accent-emphasis"
    },
    {
      "name": "--bgColor-accent-muted",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-accent-muted"
    },
    {
      "name": "--bgColor-attention-emphasis",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-attention-emphasis"
    },
    {
      "name": "--bgColor-attention-muted",
      "value": "#fff8c5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-attention-muted"
    },
    {
      "name": "--bgColor-black",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-black"
    },
    {
      "name": "--bgColor-closed-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-closed-emphasis"
    },
    {
      "name": "--bgColor-closed-muted",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-closed-muted"
    },
    {
      "name": "--bgColor-danger-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-danger-emphasis"
    },
    {
      "name": "--bgColor-danger-muted",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-danger-muted"
    },
    {
      "name": "--bgColor-default",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-default"
    },
    {
      "name": "--bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-disabled"
    },
    {
      "name": "--bgColor-done-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-done-emphasis"
    },
    {
      "name": "--bgColor-done-muted",
      "value": "#fbefff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-done-muted"
    },
    {
      "name": "--bgColor-draft-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-draft-emphasis"
    },
    {
      "name": "--bgColor-draft-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-draft-muted"
    },
    {
      "name": "--bgColor-emphasis",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-emphasis"
    },
    {
      "name": "--bgColor-inset",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-inset"
    },
    {
      "name": "--bgColor-inverse",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-inverse"
    },
    {
      "name": "--bgColor-muted",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-muted"
    },
    {
      "name": "--bgColor-neutral-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-neutral-emphasis"
    },
    {
      "name": "--bgColor-neutral-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-neutral-muted"
    },
    {
      "name": "--bgColor-open-emphasis",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-open-emphasis"
    },
    {
      "name": "--bgColor-open-muted",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-open-muted"
    },
    {
      "name": "--bgColor-severe-emphasis",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-severe-emphasis"
    },
    {
      "name": "--bgColor-severe-muted",
      "value": "#fff1e5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-severe-muted"
    },
    {
      "name": "--bgColor-sponsors-emphasis",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-sponsors-emphasis"
    },
    {
      "name": "--bgColor-sponsors-muted",
      "value": "#ffeff7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-sponsors-muted"
    },
    {
      "name": "--bgColor-success-emphasis",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-success-emphasis"
    },
    {
      "name": "--bgColor-success-muted",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-success-muted"
    },
    {
      "name": "--bgColor-transparent",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-transparent"
    },
    {
      "name": "--bgColor-upsell-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-upsell-emphasis"
    },
    {
      "name": "--bgColor-upsell-muted",
      "value": "#fbefff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-upsell-muted"
    },
    {
      "name": "--bgColor-white",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--bgColor-white"
    },
    {
      "name": "--button-danger-bgColor-active",
      "value": "#a40e26",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-bgColor-active"
    },
    {
      "name": "--button-danger-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-bgColor-disabled"
    },
    {
      "name": "--button-danger-bgColor-hover",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-bgColor-hover"
    },
    {
      "name": "--button-danger-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-bgColor-rest"
    },
    {
      "name": "--button-default-bgColor-active",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-bgColor-active"
    },
    {
      "name": "--button-default-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-bgColor-disabled"
    },
    {
      "name": "--button-default-bgColor-hover",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-bgColor-hover"
    },
    {
      "name": "--button-default-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-bgColor-rest"
    },
    {
      "name": "--button-default-bgColor-selected",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-default-bgColor-selected"
    },
    {
      "name": "--button-inactive-bgColor",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-inactive-bgColor"
    },
    {
      "name": "--button-invisible-bgColor-active",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-bgColor-active"
    },
    {
      "name": "--button-invisible-bgColor-disabled",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-bgColor-disabled"
    },
    {
      "name": "--button-invisible-bgColor-hover",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-bgColor-hover"
    },
    {
      "name": "--button-invisible-bgColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-bgColor-rest"
    },
    {
      "name": "--button-outline-bgColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-bgColor-active"
    },
    {
      "name": "--button-outline-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-bgColor-disabled"
    },
    {
      "name": "--button-outline-bgColor-hover",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-bgColor-hover"
    },
    {
      "name": "--button-outline-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-outline-bgColor-rest"
    },
    {
      "name": "--button-primary-bgColor-active",
      "value": "#197935",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-bgColor-active"
    },
    {
      "name": "--button-primary-bgColor-disabled",
      "value": "#95d8a6",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-bgColor-disabled"
    },
    {
      "name": "--button-primary-bgColor-hover",
      "value": "#1c8139",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-bgColor-hover"
    },
    {
      "name": "--button-primary-bgColor-rest",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-bgColor-rest"
    },
    {
      "name": "--buttonCounter-danger-bgColor-disabled",
      "value": "#cf222e0d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-bgColor-disabled"
    },
    {
      "name": "--buttonCounter-danger-bgColor-hover",
      "value": "#ffffff33",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-bgColor-hover"
    },
    {
      "name": "--buttonCounter-danger-bgColor-rest",
      "value": "#cf222e1a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-danger-bgColor-rest"
    },
    {
      "name": "--buttonCounter-default-bgColor-rest",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-default-bgColor-rest"
    },
    {
      "name": "--buttonCounter-invisible-bgColor-rest",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-invisible-bgColor-rest"
    },
    {
      "name": "--buttonCounter-outline-bgColor-disabled",
      "value": "#0969da0d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-bgColor-disabled"
    },
    {
      "name": "--buttonCounter-outline-bgColor-hover",
      "value": "#ffffff33",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-bgColor-hover"
    },
    {
      "name": "--buttonCounter-outline-bgColor-rest",
      "value": "#0969da1a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-outline-bgColor-rest"
    },
    {
      "name": "--buttonCounter-primary-bgColor-rest",
      "value": "#002d1133",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--buttonCounter-primary-bgColor-rest"
    },
    {
      "name": "--card-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--card-bgColor"
    },
    {
      "name": "--codeMirror-activeline-bgColor",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-activeline-bgColor"
    },
    {
      "name": "--codeMirror-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-bgColor"
    },
    {
      "name": "--codeMirror-gutters-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-gutters-bgColor"
    },
    {
      "name": "--codeMirror-lines-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-lines-bgColor"
    },
    {
      "name": "--codeMirror-selection-bgColor",
      "value": "#54aeff66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--codeMirror-selection-bgColor"
    },
    {
      "name": "--contribution-default-bgColor-0",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-bgColor-0"
    },
    {
      "name": "--contribution-default-bgColor-1",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-bgColor-1"
    },
    {
      "name": "--contribution-default-bgColor-2",
      "value": "#4ac26b",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-bgColor-2"
    },
    {
      "name": "--contribution-default-bgColor-3",
      "value": "#2da44e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-bgColor-3"
    },
    {
      "name": "--contribution-default-bgColor-4",
      "value": "#116329",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-default-bgColor-4"
    },
    {
      "name": "--contribution-halloween-bgColor-1",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-halloween-bgColor-1"
    },
    {
      "name": "--contribution-halloween-bgColor-2",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-halloween-bgColor-2"
    },
    {
      "name": "--contribution-halloween-bgColor-3",
      "value": "#f68c41",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-halloween-bgColor-3"
    },
    {
      "name": "--contribution-halloween-bgColor-4",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-halloween-bgColor-4"
    },
    {
      "name": "--contribution-winter-bgColor-1",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-winter-bgColor-1"
    },
    {
      "name": "--contribution-winter-bgColor-2",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-winter-bgColor-2"
    },
    {
      "name": "--contribution-winter-bgColor-3",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-winter-bgColor-3"
    },
    {
      "name": "--contribution-winter-bgColor-4",
      "value": "#0a3069",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--contribution-winter-bgColor-4"
    },
    {
      "name": "--control-bgColor-active",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-bgColor-active"
    },
    {
      "name": "--control-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-bgColor-disabled"
    },
    {
      "name": "--control-bgColor-hover",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-bgColor-hover"
    },
    {
      "name": "--control-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-bgColor-rest"
    },
    {
      "name": "--control-bgColor-selected",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-bgColor-selected"
    },
    {
      "name": "--control-checked-bgColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-bgColor-active"
    },
    {
      "name": "--control-checked-bgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-bgColor-disabled"
    },
    {
      "name": "--control-checked-bgColor-hover",
      "value": "#0860ca",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-bgColor-hover"
    },
    {
      "name": "--control-checked-bgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-checked-bgColor-rest"
    },
    {
      "name": "--control-danger-bgColor-active",
      "value": "#ffebe966",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-danger-bgColor-active"
    },
    {
      "name": "--control-danger-bgColor-hover",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-danger-bgColor-hover"
    },
    {
      "name": "--control-transparent-bgColor-active",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-bgColor-active"
    },
    {
      "name": "--control-transparent-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-bgColor-disabled"
    },
    {
      "name": "--control-transparent-bgColor-hover",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-bgColor-hover"
    },
    {
      "name": "--control-transparent-bgColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-bgColor-rest"
    },
    {
      "name": "--control-transparent-bgColor-selected",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-transparent-bgColor-selected"
    },
    {
      "name": "--controlKnob-bgColor-checked",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-bgColor-checked"
    },
    {
      "name": "--controlKnob-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-bgColor-disabled"
    },
    {
      "name": "--controlKnob-bgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlKnob-bgColor-rest"
    },
    {
      "name": "--controlTrack-bgColor-active",
      "value": "#dae0e7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-bgColor-active"
    },
    {
      "name": "--controlTrack-bgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-bgColor-disabled"
    },
    {
      "name": "--controlTrack-bgColor-hover",
      "value": "#e0e6eb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-bgColor-hover"
    },
    {
      "name": "--controlTrack-bgColor-rest",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--controlTrack-bgColor-rest"
    },
    {
      "name": "--counter-bgColor-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--counter-bgColor-emphasis"
    },
    {
      "name": "--counter-bgColor-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--counter-bgColor-muted"
    },
    {
      "name": "--dashboard-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--dashboard-bgColor"
    },
    {
      "name": "--diffBlob-additionLine-bgColor",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionLine-bgColor"
    },
    {
      "name": "--diffBlob-additionNum-bgColor",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionNum-bgColor"
    },
    {
      "name": "--diffBlob-additionWord-bgColor",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-additionWord-bgColor"
    },
    {
      "name": "--diffBlob-deletionLine-bgColor",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionLine-bgColor"
    },
    {
      "name": "--diffBlob-deletionNum-bgColor",
      "value": "#ffcecb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionNum-bgColor"
    },
    {
      "name": "--diffBlob-deletionWord-bgColor",
      "value": "#ffcecb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-deletionWord-bgColor"
    },
    {
      "name": "--diffBlob-emptyLine-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-emptyLine-bgColor"
    },
    {
      "name": "--diffBlob-emptyNum-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-emptyNum-bgColor"
    },
    {
      "name": "--diffBlob-hunkLine-bgColor",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkLine-bgColor"
    },
    {
      "name": "--diffBlob-hunkNum-bgColor-hover",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkNum-bgColor-hover"
    },
    {
      "name": "--diffBlob-hunkNum-bgColor-rest",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-hunkNum-bgColor-rest"
    },
    {
      "name": "--display-auburn-bgColor-emphasis",
      "value": "#9d615c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-auburn-bgColor-emphasis"
    },
    {
      "name": "--display-auburn-bgColor-muted",
      "value": "#f2e9e9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-auburn-bgColor-muted"
    },
    {
      "name": "--display-blue-bgColor-emphasis",
      "value": "#006edb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-blue-bgColor-emphasis"
    },
    {
      "name": "--display-blue-bgColor-muted",
      "value": "#d1f0ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-blue-bgColor-muted"
    },
    {
      "name": "--display-brown-bgColor-emphasis",
      "value": "#856d4c",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-brown-bgColor-emphasis"
    },
    {
      "name": "--display-brown-bgColor-muted",
      "value": "#eeeae2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-brown-bgColor-muted"
    },
    {
      "name": "--display-coral-bgColor-emphasis",
      "value": "#d43511",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-coral-bgColor-emphasis"
    },
    {
      "name": "--display-coral-bgColor-muted",
      "value": "#ffe5db",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-coral-bgColor-muted"
    },
    {
      "name": "--display-cyan-bgColor-emphasis",
      "value": "#007b94",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-cyan-bgColor-emphasis"
    },
    {
      "name": "--display-cyan-bgColor-muted",
      "value": "#bdf4ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-cyan-bgColor-muted"
    },
    {
      "name": "--display-gray-bgColor-emphasis",
      "value": "#647182",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-gray-bgColor-emphasis"
    },
    {
      "name": "--display-gray-bgColor-muted",
      "value": "#e8ecf2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-gray-bgColor-muted"
    },
    {
      "name": "--display-green-bgColor-emphasis",
      "value": "#2c8141",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-green-bgColor-emphasis"
    },
    {
      "name": "--display-green-bgColor-muted",
      "value": "#caf7ca",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-green-bgColor-muted"
    },
    {
      "name": "--display-indigo-bgColor-emphasis",
      "value": "#5a61e7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-indigo-bgColor-emphasis"
    },
    {
      "name": "--display-indigo-bgColor-muted",
      "value": "#e5e9ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-indigo-bgColor-muted"
    },
    {
      "name": "--display-lemon-bgColor-emphasis",
      "value": "#866e04",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lemon-bgColor-emphasis"
    },
    {
      "name": "--display-lemon-bgColor-muted",
      "value": "#f7eea1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lemon-bgColor-muted"
    },
    {
      "name": "--display-lime-bgColor-emphasis",
      "value": "#527a29",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lime-bgColor-emphasis"
    },
    {
      "name": "--display-lime-bgColor-muted",
      "value": "#e3f2b5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-lime-bgColor-muted"
    },
    {
      "name": "--display-olive-bgColor-emphasis",
      "value": "#64762d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-olive-bgColor-emphasis"
    },
    {
      "name": "--display-olive-bgColor-muted",
      "value": "#f0f0ad",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-olive-bgColor-muted"
    },
    {
      "name": "--display-orange-bgColor-emphasis",
      "value": "#b8500f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-orange-bgColor-emphasis"
    },
    {
      "name": "--display-orange-bgColor-muted",
      "value": "#ffe7d1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-orange-bgColor-muted"
    },
    {
      "name": "--display-pine-bgColor-emphasis",
      "value": "#167e53",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pine-bgColor-emphasis"
    },
    {
      "name": "--display-pine-bgColor-muted",
      "value": "#bff8db",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pine-bgColor-muted"
    },
    {
      "name": "--display-pink-bgColor-emphasis",
      "value": "#ce2c85",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pink-bgColor-emphasis"
    },
    {
      "name": "--display-pink-bgColor-muted",
      "value": "#ffe5f1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-pink-bgColor-muted"
    },
    {
      "name": "--display-plum-bgColor-emphasis",
      "value": "#a830e8",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-plum-bgColor-emphasis"
    },
    {
      "name": "--display-plum-bgColor-muted",
      "value": "#f8e5ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-plum-bgColor-muted"
    },
    {
      "name": "--display-purple-bgColor-emphasis",
      "value": "#894ceb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-purple-bgColor-emphasis"
    },
    {
      "name": "--display-purple-bgColor-muted",
      "value": "#f1e5ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-purple-bgColor-muted"
    },
    {
      "name": "--display-red-bgColor-emphasis",
      "value": "#df0c24",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-red-bgColor-emphasis"
    },
    {
      "name": "--display-red-bgColor-muted",
      "value": "#ffe2e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-red-bgColor-muted"
    },
    {
      "name": "--display-teal-bgColor-emphasis",
      "value": "#127e81",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-teal-bgColor-emphasis"
    },
    {
      "name": "--display-teal-bgColor-muted",
      "value": "#c7f5ef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-teal-bgColor-muted"
    },
    {
      "name": "--display-yellow-bgColor-emphasis",
      "value": "#946a00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-yellow-bgColor-emphasis"
    },
    {
      "name": "--display-yellow-bgColor-muted",
      "value": "#ffec9e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--display-yellow-bgColor-muted"
    },
    {
      "name": "--header-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--header-bgColor"
    },
    {
      "name": "--headerSearch-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--headerSearch-bgColor"
    },
    {
      "name": "--highlight-neutral-bgColor",
      "value": "#fff8c5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--highlight-neutral-bgColor"
    },
    {
      "name": "--label-auburn-bgColor-active",
      "value": "#d4b7b5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-bgColor-active"
    },
    {
      "name": "--label-auburn-bgColor-hover",
      "value": "#e6d6d5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-bgColor-hover"
    },
    {
      "name": "--label-auburn-bgColor-rest",
      "value": "#f2e9e9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-auburn-bgColor-rest"
    },
    {
      "name": "--label-blue-bgColor-active",
      "value": "#75c8ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-bgColor-active"
    },
    {
      "name": "--label-blue-bgColor-hover",
      "value": "#ade1ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-bgColor-hover"
    },
    {
      "name": "--label-blue-bgColor-rest",
      "value": "#d1f0ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-blue-bgColor-rest"
    },
    {
      "name": "--label-brown-bgColor-active",
      "value": "#cbbda4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-bgColor-active"
    },
    {
      "name": "--label-brown-bgColor-hover",
      "value": "#dfd7c8",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-bgColor-hover"
    },
    {
      "name": "--label-brown-bgColor-rest",
      "value": "#eeeae2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-brown-bgColor-rest"
    },
    {
      "name": "--label-coral-bgColor-active",
      "value": "#fcab92",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-bgColor-active"
    },
    {
      "name": "--label-coral-bgColor-hover",
      "value": "#fecebe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-bgColor-hover"
    },
    {
      "name": "--label-coral-bgColor-rest",
      "value": "#ffe5db",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-coral-bgColor-rest"
    },
    {
      "name": "--label-cyan-bgColor-active",
      "value": "#00d0fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-bgColor-active"
    },
    {
      "name": "--label-cyan-bgColor-hover",
      "value": "#7ae9ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-bgColor-hover"
    },
    {
      "name": "--label-cyan-bgColor-rest",
      "value": "#bdf4ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-cyan-bgColor-rest"
    },
    {
      "name": "--label-gray-bgColor-active",
      "value": "#b4c0cf",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-bgColor-active"
    },
    {
      "name": "--label-gray-bgColor-hover",
      "value": "#d2dae4",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-bgColor-hover"
    },
    {
      "name": "--label-gray-bgColor-rest",
      "value": "#e8ecf2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-gray-bgColor-rest"
    },
    {
      "name": "--label-green-bgColor-active",
      "value": "#54d961",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-bgColor-active"
    },
    {
      "name": "--label-green-bgColor-hover",
      "value": "#9ceda0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-bgColor-hover"
    },
    {
      "name": "--label-green-bgColor-rest",
      "value": "#caf7ca",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-green-bgColor-rest"
    },
    {
      "name": "--label-indigo-bgColor-active",
      "value": "#b1b9fb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-bgColor-active"
    },
    {
      "name": "--label-indigo-bgColor-hover",
      "value": "#d2d7fe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-bgColor-hover"
    },
    {
      "name": "--label-indigo-bgColor-rest",
      "value": "#e5e9ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-indigo-bgColor-rest"
    },
    {
      "name": "--label-lemon-bgColor-active",
      "value": "#d8bd0e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-bgColor-active"
    },
    {
      "name": "--label-lemon-bgColor-hover",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-bgColor-hover"
    },
    {
      "name": "--label-lemon-bgColor-rest",
      "value": "#f7eea1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lemon-bgColor-rest"
    },
    {
      "name": "--label-lime-bgColor-active",
      "value": "#9bd039",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-bgColor-active"
    },
    {
      "name": "--label-lime-bgColor-hover",
      "value": "#c7e580",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-bgColor-hover"
    },
    {
      "name": "--label-lime-bgColor-rest",
      "value": "#e3f2b5",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-lime-bgColor-rest"
    },
    {
      "name": "--label-olive-bgColor-active",
      "value": "#b9c832",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-bgColor-active"
    },
    {
      "name": "--label-olive-bgColor-hover",
      "value": "#dbe170",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-bgColor-hover"
    },
    {
      "name": "--label-olive-bgColor-rest",
      "value": "#f0f0ad",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-olive-bgColor-rest"
    },
    {
      "name": "--label-orange-bgColor-active",
      "value": "#fbaf74",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-bgColor-active"
    },
    {
      "name": "--label-orange-bgColor-hover",
      "value": "#fecfaa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-bgColor-hover"
    },
    {
      "name": "--label-orange-bgColor-rest",
      "value": "#ffe7d1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-orange-bgColor-rest"
    },
    {
      "name": "--label-pine-bgColor-active",
      "value": "#1dd781",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-bgColor-active"
    },
    {
      "name": "--label-pine-bgColor-hover",
      "value": "#80efb9",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-bgColor-hover"
    },
    {
      "name": "--label-pine-bgColor-rest",
      "value": "#bff8db",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pine-bgColor-rest"
    },
    {
      "name": "--label-pink-bgColor-active",
      "value": "#f8a5cf",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-bgColor-active"
    },
    {
      "name": "--label-pink-bgColor-hover",
      "value": "#fdc9e2",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-bgColor-hover"
    },
    {
      "name": "--label-pink-bgColor-rest",
      "value": "#ffe5f1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-pink-bgColor-rest"
    },
    {
      "name": "--label-plum-bgColor-active",
      "value": "#e2a7fb",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-bgColor-active"
    },
    {
      "name": "--label-plum-bgColor-hover",
      "value": "#f0cdfe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-bgColor-hover"
    },
    {
      "name": "--label-plum-bgColor-rest",
      "value": "#f8e5ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-plum-bgColor-rest"
    },
    {
      "name": "--label-purple-bgColor-active",
      "value": "#d1b1fc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-bgColor-active"
    },
    {
      "name": "--label-purple-bgColor-hover",
      "value": "#e6d2fe",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-bgColor-hover"
    },
    {
      "name": "--label-purple-bgColor-rest",
      "value": "#f1e5ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-purple-bgColor-rest"
    },
    {
      "name": "--label-red-bgColor-active",
      "value": "#fda5a7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-bgColor-active"
    },
    {
      "name": "--label-red-bgColor-hover",
      "value": "#fecdcd",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-bgColor-hover"
    },
    {
      "name": "--label-red-bgColor-rest",
      "value": "#ffe2e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-red-bgColor-rest"
    },
    {
      "name": "--label-teal-bgColor-active",
      "value": "#22d3c7",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-bgColor-active"
    },
    {
      "name": "--label-teal-bgColor-hover",
      "value": "#89ebe1",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-bgColor-hover"
    },
    {
      "name": "--label-teal-bgColor-rest",
      "value": "#c7f5ef",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-teal-bgColor-rest"
    },
    {
      "name": "--label-yellow-bgColor-active",
      "value": "#ebb400",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-bgColor-active"
    },
    {
      "name": "--label-yellow-bgColor-hover",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-bgColor-hover"
    },
    {
      "name": "--label-yellow-bgColor-rest",
      "value": "#ffec9e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--label-yellow-bgColor-rest"
    },
    {
      "name": "--menu-bgColor-active",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--menu-bgColor-active"
    },
    {
      "name": "--overlay-backdrop-bgColor",
      "value": "#c8d1da66",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--overlay-backdrop-bgColor"
    },
    {
      "name": "--overlay-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--overlay-bgColor"
    },
    {
      "name": "--page-header-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--page-header-bgColor"
    },
    {
      "name": "--progressBar-bgColor-accent",
      "value": "#0969da",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-accent"
    },
    {
      "name": "--progressBar-bgColor-attention",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-attention"
    },
    {
      "name": "--progressBar-bgColor-danger",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-danger"
    },
    {
      "name": "--progressBar-bgColor-done",
      "value": "#8250df",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-done"
    },
    {
      "name": "--progressBar-bgColor-neutral",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-neutral"
    },
    {
      "name": "--progressBar-bgColor-severe",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-severe"
    },
    {
      "name": "--progressBar-bgColor-sponsors",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-sponsors"
    },
    {
      "name": "--progressBar-bgColor-success",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-bgColor-success"
    },
    {
      "name": "--progressBar-track-bgColor",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--progressBar-track-bgColor"
    },
    {
      "name": "--reactionButton-selected-bgColor-hover",
      "value": "#caecff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--reactionButton-selected-bgColor-hover"
    },
    {
      "name": "--reactionButton-selected-bgColor-rest",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--reactionButton-selected-bgColor-rest"
    },
    {
      "name": "--selectMenu-bgColor-active",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--selectMenu-bgColor-active"
    },
    {
      "name": "--selection-bgColor",
      "value": "#0969da33",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--selection-bgColor"
    },
    {
      "name": "--sideNav-bgColor-selected",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--sideNav-bgColor-selected"
    },
    {
      "name": "--skeletonLoader-bgColor",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--skeletonLoader-bgColor"
    },
    {
      "name": "--timelineBadge-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--timelineBadge-bgColor"
    },
    {
      "name": "--tooltip-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--tooltip-bgColor"
    }
  ],
  "fill": [
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-hover"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-rest"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-disabled"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-hover"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-rest"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-iconColor-rest"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-star-iconColor"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-iconColor-rest"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-expander-iconColor"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--treeViewItem-leadingVisual-iconColor-rest"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--underlineNav-iconColor-rest"
    }
  ],
  "stroke": [
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-hover"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-danger-iconColor-rest"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-disabled"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-hover"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-invisible-iconColor-rest"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-primary-iconColor-rest"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--button-star-iconColor"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--control-iconColor-rest"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--diffBlob-expander-iconColor"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--treeViewItem-leadingVisual-iconColor-rest"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color",
      "docsUrl": "https://primer.style/product/primitives/color?variable=--underlineNav-iconColor-rest"
    }
  ],
  "transitionDuration": [
    {
      "name": "--base-duration-0",
      "value": "0ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-0"
    },
    {
      "name": "--base-duration-100",
      "value": "100ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-100"
    },
    {
      "name": "--base-duration-1000",
      "value": "1000ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-1000"
    },
    {
      "name": "--base-duration-200",
      "value": "200ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-200"
    },
    {
      "name": "--base-duration-300",
      "value": "300ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-300"
    },
    {
      "name": "--base-duration-400",
      "value": "400ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-400"
    },
    {
      "name": "--base-duration-50",
      "value": "50ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-50"
    },
    {
      "name": "--base-duration-500",
      "value": "500ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-500"
    },
    {
      "name": "--base-duration-600",
      "value": "600ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-600"
    },
    {
      "name": "--base-duration-700",
      "value": "700ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-700"
    },
    {
      "name": "--base-duration-800",
      "value": "800ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-800"
    },
    {
      "name": "--base-duration-900",
      "value": "900ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-900"
    }
  ],
  "transitionTimingFunction": [
    {
      "name": "--base-easing-easeIn",
      "value": 0.7,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeIn"
    },
    {
      "name": "--base-easing-easeInOut",
      "value": 0.6,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeInOut"
    },
    {
      "name": "--base-easing-easeOut",
      "value": 0.3,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeOut"
    },
    {
      "name": "--base-easing-linear",
      "value": 0,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-linear"
    }
  ],
  "animationDuration": [
    {
      "name": "--base-duration-0",
      "value": "0ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-0"
    },
    {
      "name": "--base-duration-100",
      "value": "100ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-100"
    },
    {
      "name": "--base-duration-1000",
      "value": "1000ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-1000"
    },
    {
      "name": "--base-duration-200",
      "value": "200ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-200"
    },
    {
      "name": "--base-duration-300",
      "value": "300ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-300"
    },
    {
      "name": "--base-duration-400",
      "value": "400ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-400"
    },
    {
      "name": "--base-duration-50",
      "value": "50ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-50"
    },
    {
      "name": "--base-duration-500",
      "value": "500ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-500"
    },
    {
      "name": "--base-duration-600",
      "value": "600ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-600"
    },
    {
      "name": "--base-duration-700",
      "value": "700ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-700"
    },
    {
      "name": "--base-duration-800",
      "value": "800ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-800"
    },
    {
      "name": "--base-duration-900",
      "value": "900ms",
      "kind": "base",
      "type": "duration",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-duration-900"
    }
  ],
  "animationTimingFunction": [
    {
      "name": "--base-easing-easeIn",
      "value": 0.7,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeIn"
    },
    {
      "name": "--base-easing-easeInOut",
      "value": 0.6,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeInOut"
    },
    {
      "name": "--base-easing-easeOut",
      "value": 0.3,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-easeOut"
    },
    {
      "name": "--base-easing-linear",
      "value": 0,
      "kind": "base",
      "type": "cubicBezier",
      "docsUrl": "https://primer.style/product/primitives/?variable=--base-easing-linear"
    }
  ]
}
  