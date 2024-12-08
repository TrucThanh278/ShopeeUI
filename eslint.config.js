import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import { resolve } from 'path'

export default [
  js.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  importPlugin.configs.recommended,
  importPlugin.configs.typescript,
  jsxA11y.configs.recommended,
  typescriptEslint.configs.recommended,
  prettier,
  {
    ignores: ['dist'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        browser: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          paths: [path.resolve(__dirname, '')],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      prettier: prettierPlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  }
]
