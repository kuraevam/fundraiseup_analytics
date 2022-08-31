module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
      'standard-with-typescript',
      'prettier'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-extraneous-class': 'off'
  }
}
