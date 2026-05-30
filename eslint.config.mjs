import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/package-lock.json',
      '**/dist/**',
      '**/docs/**',
      '**/build/**',
      '**/coverage/**',
      '**/*.min.js'
    ]
  },
  stylistic.configs.customize({
    arrayBracketSpacing: ['always', { singleValue: false }],
    arrayElementNewline: ['consistent', { multiline: true }],
    arrowSpacing: { before: false, after: false },
    arrowParens: true,
    braceStyle: '1tbs',
    commaDangle: 'never',
    dotLocation: 'property',
    indent: 2,
    objectCurlySpacing: 'always',
    operatorLinebreak: 'before',
    noMixedOperators: true,
    semi: true,
    semiSpacing: { before: false, after: true },
    switchColonSpacing: { after: true, before: false },
    templateCurlySpacing: 'never',
    quoteProps: 'as-needed',
    quotes: 'single'
  }),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      js
    },
    extends: ['js/recommended'],
    rules: {
      camelcase: ['error', {
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true
      }],
      curly: 'error',
      'max-depth': ['error', 4],
      'max-params': ['error', 3],
      'no-alert': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-template': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false
        }
      ],
      yoda: ['error']
    }
  },
  {
    files: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.vitest }
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  }
]);
