// Generated file, do not edit manually. Run 'npm run precompile' to regenerate.

// copy of type Suggestion from data/rules
type Suggestion =
  | {
      name: `--${string}`
      kind: 'base' | 'functional'
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
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--overlay-padding-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-padding-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-padding-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-padding-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-padding-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "paddingBlock": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-large-paddingBlock",
      "value": "0.625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-paddingBlock",
      "value": "0.375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-paddingBlock",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-paddingBlock",
      "value": "0.875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-paddingBlock",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-paddingBlock-condensed",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-paddingBlock-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "paddingInline": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-large-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-large-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-paddingInline-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-paddingInline-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-paddingInline-normal",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-paddingInline-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-paddingInline-condensed",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-paddingInline-normal",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-paddingInline-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "gap": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-large-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-auto",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-medium-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-medium-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-small-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-small-gap-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "margin": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-large-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-gap",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-gap",
      "value": "0.015625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-auto",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-large-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-medium-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-medium-gap-spacious",
      "value": "0.046875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-small-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--controlStack-small-gap-spacious",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-condensed",
      "value": "0.03125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-normal",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--stack-gap-spacious",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "width": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-minTarget-coarse",
      "value": "0.171875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-minTarget-fine",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-width-large",
      "value": "40rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-width-medium",
      "value": "30rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-width-small",
      "value": "20rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-width-xlarge",
      "value": "60rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-width-xsmall",
      "value": "12rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "height": [
    {
      "name": "--base-size-112",
      "value": "7rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-12",
      "value": "0.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-128",
      "value": "8rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-16",
      "value": "1rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-2",
      "value": "0.125rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-20",
      "value": "1.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-24",
      "value": "1.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-28",
      "value": "1.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-32",
      "value": "2rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-36",
      "value": "2.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-4",
      "value": "0.25rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-40",
      "value": "2.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-44",
      "value": "2.75rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-48",
      "value": "3rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-6",
      "value": "0.375rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-64",
      "value": "4rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-8",
      "value": "0.5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-80",
      "value": "5rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--base-size-96",
      "value": "6rem",
      "kind": "base",
      "type": "dimension"
    },
    {
      "name": "--control-large-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-large-size",
      "value": "0.15625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-medium-size",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-minTarget-coarse",
      "value": "0.171875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-minTarget-fine",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-small-size",
      "value": "0.109375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xlarge-size",
      "value": "0.1875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-lineBoxHeight",
      "value": "0.078125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--control-xsmall-size",
      "value": "0.09375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-height-large",
      "value": "27rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-height-medium",
      "value": "20rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-height-small",
      "value": "16rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--overlay-height-xlarge",
      "value": "37.5rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--spinner-size-large",
      "value": "0.25rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--spinner-size-medium",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--spinner-size-small",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "borderWidth": [
    {
      "name": "--borderWidth-default",
      "value": "0.00390625rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderWidth-thick",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderWidth-thicker",
      "value": "0.25rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderWidth-thin",
      "value": "0.0625rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "borderRadius": [
    {
      "name": "--borderRadius-default",
      "value": "0.0234375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderRadius-full",
      "value": "624.9375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderRadius-large",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderRadius-medium",
      "value": "0.375rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--borderRadius-small",
      "value": "0.1875rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "borderColor": [
    {
      "name": "--avatar-borderColor",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-accent-emphasis",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-accent-muted",
      "value": "#54aeff66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-attention-emphasis",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-attention-muted",
      "value": "#d4a72c66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-closed-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-closed-muted",
      "value": "#ff818266",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-danger-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-danger-muted",
      "value": "#ff818266",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-default",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-done-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-done-muted",
      "value": "#c297ff66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-draft-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-draft-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-emphasis",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-neutral-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-neutral-muted",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-open-emphasis",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-open-muted",
      "value": "#4ac26b66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-severe-emphasis",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-severe-muted",
      "value": "#fb8f4466",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-sponsors-emphasis",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-sponsors-muted",
      "value": "#ff80c866",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-success-emphasis",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-success-muted",
      "value": "#4ac26b66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-translucent",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-transparent",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-upsell-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--borderColor-upsell-muted",
      "value": "#c297ff66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-borderColor-active",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-borderColor-hover",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-borderColor-disabled",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-borderColor-hover",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-borderColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-borderColor-active",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-borderColor-disabled",
      "value": "#95d8a6",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-borderColor-hover",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-borderColor-rest",
      "value": "#1f232826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-borderColor-0",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-borderColor-1",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-borderColor-2",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-borderColor-3",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-borderColor-4",
      "value": "#1f23280d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-danger",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-disabled",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-emphasis",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-selected",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-success",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-borderColor-warning",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-borderColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-borderColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-borderColor-hover",
      "value": "#0860ca",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-borderColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-borderColor-active",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-borderColor-hover",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-borderColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-borderColor-checked",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-borderColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-borderColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-borderColor-rest",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--counter-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-auburn-borderColor-emphasis",
      "value": "#9d615c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-auburn-borderColor-muted",
      "value": "#e6d6d5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-blue-borderColor-emphasis",
      "value": "#006edb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-blue-borderColor-muted",
      "value": "#ade1ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-brown-borderColor-emphasis",
      "value": "#856d4c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-brown-borderColor-muted",
      "value": "#dfd7c8",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-coral-borderColor-emphasis",
      "value": "#d43511",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-coral-borderColor-muted",
      "value": "#fecebe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-cyan-borderColor-emphasis",
      "value": "#007b94",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-cyan-borderColor-muted",
      "value": "#7ae9ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-gray-borderColor-emphasis",
      "value": "#647182",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-gray-borderColor-muted",
      "value": "#d2dae4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-green-borderColor-emphasis",
      "value": "#2c8141",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-green-borderColor-muted",
      "value": "#9ceda0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-indigo-borderColor-emphasis",
      "value": "#5a61e7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-indigo-borderColor-muted",
      "value": "#d2d7fe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lemon-borderColor-emphasis",
      "value": "#866e04",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lemon-borderColor-muted",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lime-borderColor-emphasis",
      "value": "#527a29",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lime-borderColor-muted",
      "value": "#c7e580",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-olive-borderColor-emphasis",
      "value": "#64762d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-olive-borderColor-muted",
      "value": "#dbe170",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-orange-borderColor-emphasis",
      "value": "#b8500f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-orange-borderColor-muted",
      "value": "#fecfaa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pine-borderColor-emphasis",
      "value": "#167e53",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pine-borderColor-muted",
      "value": "#80efb9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pink-borderColor-emphasis",
      "value": "#ce2c85",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pink-borderColor-muted",
      "value": "#fdc9e2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-plum-borderColor-emphasis",
      "value": "#a830e8",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-plum-borderColor-muted",
      "value": "#f0cdfe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-purple-borderColor-emphasis",
      "value": "#894ceb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-purple-borderColor-muted",
      "value": "#e6d2fe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-red-borderColor-emphasis",
      "value": "#df0c24",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-red-borderColor-muted",
      "value": "#fecdcd",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-teal-borderColor-emphasis",
      "value": "#127e81",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-teal-borderColor-muted",
      "value": "#89ebe1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-yellow-borderColor-emphasis",
      "value": "#946a00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-yellow-borderColor-muted",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--header-borderColor-divider",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--headerSearch-borderColor",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--overlay-borderColor",
      "value": "#d1d9e080",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-track-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--selectMenu-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--topicTag-borderColor",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--underlineNav-borderColor-active",
      "value": "#fd8c73",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--underlineNav-borderColor-hover",
      "value": "#d1d9e0b3",
      "kind": "functional",
      "type": "color"
    }
  ],
  "boxShadow": [
    {
      "name": "--boxShadow-thick",
      "value": "inset 0 0 0 0.125rem,2px",
      "kind": "functional",
      "type": "string"
    },
    {
      "name": "--boxShadow-thicker",
      "value": "inset 0 0 0 0.25rem,4px",
      "kind": "functional",
      "type": "string"
    },
    {
      "name": "--boxShadow-thin",
      "value": "inset 0 0 0 0.0625rem,1px",
      "kind": "functional",
      "type": "string"
    }
  ],
  "outlineWidth": [
    {
      "name": "--outline-focus-width",
      "value": "0.125rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "outlineOffset": [
    {
      "name": "--outline-focus-offset",
      "value": "-0.125rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "outlineColor": [
    {
      "name": "--focus-outlineColor",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    }
  ],
  "fontWeight": [
    {
      "name": "--base-text-weight-light",
      "value": 300,
      "kind": "base",
      "type": "fontWeight"
    },
    {
      "name": "--base-text-weight-medium",
      "value": 500,
      "kind": "base",
      "type": "fontWeight"
    },
    {
      "name": "--base-text-weight-normal",
      "value": 400,
      "kind": "base",
      "type": "fontWeight"
    },
    {
      "name": "--base-text-weight-semibold",
      "value": 600,
      "kind": "base",
      "type": "fontWeight"
    },
    {
      "name": "--text-body-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-caption-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-codeBlock-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-codeInline-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-display-weight",
      "value": 500,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-subtitle-weight",
      "value": 400,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-title-weight-large",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-title-weight-medium",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight"
    },
    {
      "name": "--text-title-weight-small",
      "value": 600,
      "kind": "functional",
      "type": "fontWeight"
    }
  ],
  "fontSize": [
    {
      "name": "--text-body-size-large",
      "value": "1rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-body-size-medium",
      "value": "0.875rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-body-size-small",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-caption-size",
      "value": "0.75rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-codeBlock-size",
      "value": "0.8125rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-codeInline-size",
      "value": null,
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-display-size",
      "value": "2.5rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-subtitle-size",
      "value": "1.25rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-title-size-large",
      "value": "2rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-title-size-medium",
      "value": "1.25rem",
      "kind": "functional",
      "type": "dimension"
    },
    {
      "name": "--text-title-size-small",
      "value": "1rem",
      "kind": "functional",
      "type": "dimension"
    }
  ],
  "lineHeight": [
    {
      "name": "--text-body-lineHeight-large",
      "value": 1.5,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-body-lineHeight-medium",
      "value": 1.4285,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-body-lineHeight-small",
      "value": 1.6666,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-caption-lineHeight",
      "value": 1.3333,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-codeBlock-lineHeight",
      "value": 1.5385,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-display-lineHeight",
      "value": 1.4,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-subtitle-lineHeight",
      "value": 1.6,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-title-lineHeight-large",
      "value": 1.5,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-title-lineHeight-medium",
      "value": 1.6,
      "kind": "functional",
      "type": "number"
    },
    {
      "name": "--text-title-lineHeight-small",
      "value": 1.5,
      "kind": "functional",
      "type": "number"
    }
  ],
  "fontFamily": [
    {
      "name": "--fontStack-monospace",
      "value": "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "fontFamily"
    },
    {
      "name": "--fontStack-sansSerif",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily"
    },
    {
      "name": "--fontStack-sansSerifDisplay",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily"
    },
    {
      "name": "--fontStack-system",
      "value": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "fontFamily"
    }
  ],
  "font": [
    {
      "name": "--text-body-shorthand-large",
      "value": "400 1rem,16px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-body-shorthand-medium",
      "value": "400 0.875rem,14px/1.4285 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-body-shorthand-small",
      "value": "400 0.75rem,12px/1.6666 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-caption-shorthand",
      "value": "400 0.75rem,12px/1.3333 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-codeBlock-shorthand",
      "value": "400 0.8125rem,13px/1.5385 ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-codeInline-shorthand",
      "value": "400 ,14.856px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-display-shorthand",
      "value": "500 2.5rem,40px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-subtitle-shorthand",
      "value": "400 1.25rem,20px/1.6 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-title-shorthand-large",
      "value": "600 2rem,32px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-title-shorthand-medium",
      "value": "600 1.25rem,20px/1.6 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    },
    {
      "name": "--text-title-shorthand-small",
      "value": "600 1rem,16px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      "kind": "functional",
      "type": "typography"
    }
  ],
  "color": [
    {
      "name": "--button-danger-fgColor-active",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-fgColor-disabled",
      "value": "#d1242f80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-fgColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-inactive-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-fgColor-active",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-fgColor-hover",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-fgColor-active",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-fgColor-disabled",
      "value": "#0969da80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-fgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-fgColor-disabled",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-fgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-fgColor-disabled",
      "value": "#d1242f80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-fgColor-rest",
      "value": "#c21c2c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-fgColor-disabled",
      "value": "#0969da80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-fgColor-rest",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-cursor-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-gutterMarker-fgColor-default",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-gutterMarker-fgColor-muted",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-lineNumber-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-matchingBracket-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-comment",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-constant",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-entity",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-keyword",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-storage",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-string",
      "value": "#0a3069",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-support",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-syntax-fgColor-variable",
      "value": "#953800",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-fgColor-disabled",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-fgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-danger-fgColor-hover",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-danger-fgColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-fgColor-placeholder",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-fgColor-rest",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-fgColor-disabled",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-fgColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionLine-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionNum-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionWord-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionLine-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionNum-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionWord-fgColor",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkLine-fgColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkNum-fgColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkNum-fgColor-rest",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-auburn-fgColor",
      "value": "#8a5551",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-blue-fgColor",
      "value": "#005fcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-brown-fgColor",
      "value": "#755f43",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-coral-fgColor",
      "value": "#ba2e12",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-cyan-fgColor",
      "value": "#006a80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-gray-fgColor",
      "value": "#5c6570",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-green-fgColor",
      "value": "#2b6e3f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-indigo-fgColor",
      "value": "#494edf",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lemon-fgColor",
      "value": "#786002",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lime-fgColor",
      "value": "#476c28",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-olive-fgColor",
      "value": "#56682c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-orange-fgColor",
      "value": "#a24610",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pine-fgColor",
      "value": "#156f4b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pink-fgColor",
      "value": "#b12f79",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-plum-fgColor",
      "value": "#961edc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-purple-fgColor",
      "value": "#783ae4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-red-fgColor",
      "value": "#c50d28",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-teal-fgColor",
      "value": "#106e75",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-yellow-fgColor",
      "value": "#805900",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-accent",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-attention",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-black",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-closed",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-danger",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-default",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-done",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-draft",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-link",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-muted",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-neutral",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-onEmphasis",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-onInverse",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-open",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-severe",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-sponsors",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-success",
      "value": "#1a7f37",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-upsell",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--fgColor-white",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--header-fgColor-default",
      "value": "#ffffffb3",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--header-fgColor-logo",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-fgColor-active",
      "value": "#5d3937",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-fgColor-hover",
      "value": "#744744",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-fgColor-rest",
      "value": "#8a5551",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-fgColor-active",
      "value": "#003d99",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-fgColor-hover",
      "value": "#004db3",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-fgColor-rest",
      "value": "#005fcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-fgColor-active",
      "value": "#51412f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-fgColor-hover",
      "value": "#64513a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-fgColor-rest",
      "value": "#755f43",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-fgColor-active",
      "value": "#7e2011",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-fgColor-hover",
      "value": "#9b2712",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-fgColor-rest",
      "value": "#ba2e12",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-fgColor-active",
      "value": "#004857",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-fgColor-hover",
      "value": "#00596b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-fgColor-rest",
      "value": "#006a80",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-fgColor-active",
      "value": "#424448",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-fgColor-hover",
      "value": "#4e535a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-fgColor-rest",
      "value": "#5c6570",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-fgColor-active",
      "value": "#254b34",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-fgColor-hover",
      "value": "#285c3b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-fgColor-rest",
      "value": "#2b6e3f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-fgColor-active",
      "value": "#2d2db4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-fgColor-hover",
      "value": "#393cd5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-fgColor-rest",
      "value": "#494edf",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-fgColor-active",
      "value": "#523f00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-fgColor-hover",
      "value": "#654f01",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-fgColor-rest",
      "value": "#786002",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-fgColor-active",
      "value": "#2f4a21",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-fgColor-hover",
      "value": "#3a5b25",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-fgColor-rest",
      "value": "#476c28",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-fgColor-active",
      "value": "#3b4927",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-fgColor-hover",
      "value": "#495a2b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-fgColor-rest",
      "value": "#56682c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-fgColor-active",
      "value": "#70300f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-fgColor-hover",
      "value": "#8d3c11",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-fgColor-rest",
      "value": "#a24610",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-fgColor-active",
      "value": "#114b36",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-fgColor-hover",
      "value": "#135d41",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-fgColor-rest",
      "value": "#156f4b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-fgColor-active",
      "value": "#6e2b53",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-fgColor-hover",
      "value": "#8e2e66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-fgColor-rest",
      "value": "#b12f79",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-fgColor-active",
      "value": "#651d96",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-fgColor-hover",
      "value": "#7d1eb8",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-fgColor-rest",
      "value": "#961edc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-fgColor-active",
      "value": "#4f21ab",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-fgColor-hover",
      "value": "#6223d7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-fgColor-rest",
      "value": "#783ae4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-fgColor-active",
      "value": "#880c27",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-fgColor-hover",
      "value": "#a60c29",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-fgColor-rest",
      "value": "#c50d28",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-fgColor-active",
      "value": "#0a4852",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-fgColor-hover",
      "value": "#0d5b63",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-fgColor-rest",
      "value": "#106e75",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-fgColor-active",
      "value": "#5c3d00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-fgColor-hover",
      "value": "#704d00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-fgColor-rest",
      "value": "#805900",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--reactionButton-selected-fgColor-hover",
      "value": "#0550ae",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--reactionButton-selected-fgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--tooltip-fgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    }
  ],
  "backgroundColor": [
    {
      "name": "--avatar-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--avatarStack-fade-bgColor-default",
      "value": "#c8d1da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--avatarStack-fade-bgColor-muted",
      "value": "#dae0e7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-accent-emphasis",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-accent-muted",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-attention-emphasis",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-attention-muted",
      "value": "#fff8c5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-black",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-closed-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-closed-muted",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-danger-emphasis",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-danger-muted",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-default",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-done-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-done-muted",
      "value": "#fbefff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-draft-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-draft-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-emphasis",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-inset",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-inverse",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-muted",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-neutral-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-neutral-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-open-emphasis",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-open-muted",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-severe-emphasis",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-severe-muted",
      "value": "#fff1e5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-sponsors-emphasis",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-sponsors-muted",
      "value": "#ffeff7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-success-emphasis",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-success-muted",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-transparent",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-upsell-emphasis",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-upsell-muted",
      "value": "#fbefff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--bgColor-white",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-bgColor-active",
      "value": "#a40e26",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-bgColor-hover",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-bgColor-active",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-bgColor-hover",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-default-bgColor-selected",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-inactive-bgColor",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-bgColor-active",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-bgColor-disabled",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-bgColor-hover",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-bgColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-bgColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-bgColor-hover",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-outline-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-bgColor-active",
      "value": "#197935",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-bgColor-disabled",
      "value": "#95d8a6",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-bgColor-hover",
      "value": "#1c8139",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-bgColor-rest",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-bgColor-disabled",
      "value": "#cf222e0d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-bgColor-hover",
      "value": "#ffffff33",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-danger-bgColor-rest",
      "value": "#cf222e1a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-default-bgColor-rest",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-invisible-bgColor-rest",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-bgColor-disabled",
      "value": "#0969da0d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-bgColor-hover",
      "value": "#ffffff33",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-outline-bgColor-rest",
      "value": "#0969da1a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--buttonCounter-primary-bgColor-rest",
      "value": "#002d1133",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--card-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-activeline-bgColor",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-gutters-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-lines-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--codeMirror-selection-bgColor",
      "value": "#54aeff66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-bgColor-0",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-bgColor-1",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-bgColor-2",
      "value": "#4ac26b",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-bgColor-3",
      "value": "#2da44e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-default-bgColor-4",
      "value": "#116329",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-halloween-bgColor-1",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-halloween-bgColor-2",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-halloween-bgColor-3",
      "value": "#f68c41",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-halloween-bgColor-4",
      "value": "#1f2328",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-winter-bgColor-1",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-winter-bgColor-2",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-winter-bgColor-3",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--contribution-winter-bgColor-4",
      "value": "#0a3069",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-bgColor-active",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-bgColor-hover",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-bgColor-rest",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-bgColor-selected",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-bgColor-active",
      "value": "#0757ba",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-bgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-bgColor-hover",
      "value": "#0860ca",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-checked-bgColor-rest",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-danger-bgColor-active",
      "value": "#ffebe966",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-danger-bgColor-hover",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-bgColor-active",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-bgColor-hover",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-bgColor-rest",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-transparent-bgColor-selected",
      "value": "#818b9826",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-bgColor-checked",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-bgColor-disabled",
      "value": "#eff2f5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlKnob-bgColor-rest",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-bgColor-active",
      "value": "#dae0e7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-bgColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-bgColor-hover",
      "value": "#e0e6eb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--controlTrack-bgColor-rest",
      "value": "#e6eaef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--counter-bgColor-emphasis",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--counter-bgColor-muted",
      "value": "#818b981f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--dashboard-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionLine-bgColor",
      "value": "#dafbe1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionNum-bgColor",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-additionWord-bgColor",
      "value": "#aceebb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionLine-bgColor",
      "value": "#ffebe9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionNum-bgColor",
      "value": "#ffcecb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-deletionWord-bgColor",
      "value": "#ffcecb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-emptyLine-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-emptyNum-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkLine-bgColor",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkNum-bgColor-hover",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-hunkNum-bgColor-rest",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-auburn-bgColor-emphasis",
      "value": "#9d615c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-auburn-bgColor-muted",
      "value": "#f2e9e9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-blue-bgColor-emphasis",
      "value": "#006edb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-blue-bgColor-muted",
      "value": "#d1f0ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-brown-bgColor-emphasis",
      "value": "#856d4c",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-brown-bgColor-muted",
      "value": "#eeeae2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-coral-bgColor-emphasis",
      "value": "#d43511",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-coral-bgColor-muted",
      "value": "#ffe5db",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-cyan-bgColor-emphasis",
      "value": "#007b94",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-cyan-bgColor-muted",
      "value": "#bdf4ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-gray-bgColor-emphasis",
      "value": "#647182",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-gray-bgColor-muted",
      "value": "#e8ecf2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-green-bgColor-emphasis",
      "value": "#2c8141",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-green-bgColor-muted",
      "value": "#caf7ca",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-indigo-bgColor-emphasis",
      "value": "#5a61e7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-indigo-bgColor-muted",
      "value": "#e5e9ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lemon-bgColor-emphasis",
      "value": "#866e04",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lemon-bgColor-muted",
      "value": "#f7eea1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lime-bgColor-emphasis",
      "value": "#527a29",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-lime-bgColor-muted",
      "value": "#e3f2b5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-olive-bgColor-emphasis",
      "value": "#64762d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-olive-bgColor-muted",
      "value": "#f0f0ad",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-orange-bgColor-emphasis",
      "value": "#b8500f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-orange-bgColor-muted",
      "value": "#ffe7d1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pine-bgColor-emphasis",
      "value": "#167e53",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pine-bgColor-muted",
      "value": "#bff8db",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pink-bgColor-emphasis",
      "value": "#ce2c85",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-pink-bgColor-muted",
      "value": "#ffe5f1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-plum-bgColor-emphasis",
      "value": "#a830e8",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-plum-bgColor-muted",
      "value": "#f8e5ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-purple-bgColor-emphasis",
      "value": "#894ceb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-purple-bgColor-muted",
      "value": "#f1e5ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-red-bgColor-emphasis",
      "value": "#df0c24",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-red-bgColor-muted",
      "value": "#ffe2e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-teal-bgColor-emphasis",
      "value": "#127e81",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-teal-bgColor-muted",
      "value": "#c7f5ef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-yellow-bgColor-emphasis",
      "value": "#946a00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--display-yellow-bgColor-muted",
      "value": "#ffec9e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--header-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--headerSearch-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--highlight-neutral-bgColor",
      "value": "#fff8c5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-bgColor-active",
      "value": "#d4b7b5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-bgColor-hover",
      "value": "#e6d6d5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-auburn-bgColor-rest",
      "value": "#f2e9e9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-bgColor-active",
      "value": "#75c8ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-bgColor-hover",
      "value": "#ade1ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-blue-bgColor-rest",
      "value": "#d1f0ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-bgColor-active",
      "value": "#cbbda4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-bgColor-hover",
      "value": "#dfd7c8",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-brown-bgColor-rest",
      "value": "#eeeae2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-bgColor-active",
      "value": "#fcab92",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-bgColor-hover",
      "value": "#fecebe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-coral-bgColor-rest",
      "value": "#ffe5db",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-bgColor-active",
      "value": "#00d0fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-bgColor-hover",
      "value": "#7ae9ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-cyan-bgColor-rest",
      "value": "#bdf4ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-bgColor-active",
      "value": "#b4c0cf",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-bgColor-hover",
      "value": "#d2dae4",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-gray-bgColor-rest",
      "value": "#e8ecf2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-bgColor-active",
      "value": "#54d961",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-bgColor-hover",
      "value": "#9ceda0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-green-bgColor-rest",
      "value": "#caf7ca",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-bgColor-active",
      "value": "#b1b9fb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-bgColor-hover",
      "value": "#d2d7fe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-indigo-bgColor-rest",
      "value": "#e5e9ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-bgColor-active",
      "value": "#d8bd0e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-bgColor-hover",
      "value": "#f0db3d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lemon-bgColor-rest",
      "value": "#f7eea1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-bgColor-active",
      "value": "#9bd039",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-bgColor-hover",
      "value": "#c7e580",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-lime-bgColor-rest",
      "value": "#e3f2b5",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-bgColor-active",
      "value": "#b9c832",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-bgColor-hover",
      "value": "#dbe170",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-olive-bgColor-rest",
      "value": "#f0f0ad",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-bgColor-active",
      "value": "#fbaf74",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-bgColor-hover",
      "value": "#fecfaa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-orange-bgColor-rest",
      "value": "#ffe7d1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-bgColor-active",
      "value": "#1dd781",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-bgColor-hover",
      "value": "#80efb9",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pine-bgColor-rest",
      "value": "#bff8db",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-bgColor-active",
      "value": "#f8a5cf",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-bgColor-hover",
      "value": "#fdc9e2",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-pink-bgColor-rest",
      "value": "#ffe5f1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-bgColor-active",
      "value": "#e2a7fb",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-bgColor-hover",
      "value": "#f0cdfe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-plum-bgColor-rest",
      "value": "#f8e5ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-bgColor-active",
      "value": "#d1b1fc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-bgColor-hover",
      "value": "#e6d2fe",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-purple-bgColor-rest",
      "value": "#f1e5ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-bgColor-active",
      "value": "#fda5a7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-bgColor-hover",
      "value": "#fecdcd",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-red-bgColor-rest",
      "value": "#ffe2e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-bgColor-active",
      "value": "#22d3c7",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-bgColor-hover",
      "value": "#89ebe1",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-teal-bgColor-rest",
      "value": "#c7f5ef",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-bgColor-active",
      "value": "#ebb400",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-bgColor-hover",
      "value": "#ffd642",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--label-yellow-bgColor-rest",
      "value": "#ffec9e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--menu-bgColor-active",
      "value": "#ffffff00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--overlay-backdrop-bgColor",
      "value": "#c8d1da66",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--overlay-bgColor",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--page-header-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-accent",
      "value": "#0969da",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-attention",
      "value": "#9a6700",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-danger",
      "value": "#cf222e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-done",
      "value": "#8250df",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-neutral",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-severe",
      "value": "#bc4c00",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-sponsors",
      "value": "#bf3989",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-bgColor-success",
      "value": "#1f883d",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--progressBar-track-bgColor",
      "value": "#d1d9e0",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--reactionButton-selected-bgColor-hover",
      "value": "#caecff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--reactionButton-selected-bgColor-rest",
      "value": "#ddf4ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--selectMenu-bgColor-active",
      "value": "#b6e3ff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--selection-bgColor",
      "value": "#0969da33",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--sideNav-bgColor-selected",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--skeletonLoader-bgColor",
      "value": "#818b981a",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--timelineBadge-bgColor",
      "value": "#f6f8fa",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--tooltip-bgColor",
      "value": "#25292e",
      "kind": "functional",
      "type": "color"
    }
  ],
  "fill": [
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    }
  ],
  "stroke": [
    {
      "name": "--button-danger-iconColor-hover",
      "value": "#ffffff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-danger-iconColor-rest",
      "value": "#d1242f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-disabled",
      "value": "#818b98",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-hover",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-invisible-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-primary-iconColor-rest",
      "value": "#ffffffcc",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--button-star-iconColor",
      "value": "#eac54f",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--control-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--diffBlob-expander-iconColor",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--treeViewItem-leadingVisual-iconColor-rest",
      "value": "#54aeff",
      "kind": "functional",
      "type": "color"
    },
    {
      "name": "--underlineNav-iconColor-rest",
      "value": "#59636e",
      "kind": "functional",
      "type": "color"
    }
  ],
  "transitionDuration": [
    {
      "name": "--base-duration-0",
      "value": "0ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-100",
      "value": "100ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-1000",
      "value": "1000ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-200",
      "value": "200ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-300",
      "value": "300ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-400",
      "value": "400ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-50",
      "value": "50ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-500",
      "value": "500ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-600",
      "value": "600ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-700",
      "value": "700ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-800",
      "value": "800ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-900",
      "value": "900ms",
      "kind": "base",
      "type": "duration"
    }
  ],
  "transitionTimingFunction": [
    {
      "name": "--base-easing-easeIn",
      "value": 0.7,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-easeInOut",
      "value": 0.6,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-easeOut",
      "value": 0.3,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-linear",
      "value": 0,
      "kind": "base",
      "type": "cubicBezier"
    }
  ],
  "animationDuration": [
    {
      "name": "--base-duration-0",
      "value": "0ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-100",
      "value": "100ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-1000",
      "value": "1000ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-200",
      "value": "200ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-300",
      "value": "300ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-400",
      "value": "400ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-50",
      "value": "50ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-500",
      "value": "500ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-600",
      "value": "600ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-700",
      "value": "700ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-800",
      "value": "800ms",
      "kind": "base",
      "type": "duration"
    },
    {
      "name": "--base-duration-900",
      "value": "900ms",
      "kind": "base",
      "type": "duration"
    }
  ],
  "animationTimingFunction": [
    {
      "name": "--base-easing-easeIn",
      "value": 0.7,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-easeInOut",
      "value": 0.6,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-easeOut",
      "value": 0.3,
      "kind": "base",
      "type": "cubicBezier"
    },
    {
      "name": "--base-easing-linear",
      "value": 0,
      "kind": "base",
      "type": "cubicBezier"
    }
  ]
}
  