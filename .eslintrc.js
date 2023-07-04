/**@type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:github/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: true }],
    // Overrides from updating plugin:github
    'filenames/match-regex': 'off',
    'import/no-commonjs': 'off'
  }
};
