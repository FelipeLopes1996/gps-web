module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect', // ou "16.8" ou a versão específica do React que você está usando
    },
  },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    ecmaFeatures: {
      ecmaVersion: 6,
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'spaced-comment': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/restrict-template-expressions': [
      1,
      { allowBoolean: true },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 0,
    'react/require-default-props': 0,
    // "react/destructuring-assignment": [
    //   1,
    //   "always",
    //   {
    //     ignoreClassFields: true,
    //   },
    // ],
  },
}
