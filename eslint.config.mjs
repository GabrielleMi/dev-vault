import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

const styleConfig = stylistic.configs.customize({
  arrowParens: true,
  braceStyle: '1tbs',
  commaDangle: 'never',
  indent: 2,
  semi: true,
  quoteProps: 'as-needed',
  quotes: 'single'
});

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/package-lock.json',
      '**/dist/**',
      '**/docs/**',
      '**/build/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/website/**'
    ]
  },
  {
    ...styleConfig,
    ignores: ['**/*.json']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      js
    },
    extends: ['js/recommended'],
    rules: {
      '@stylistic/arrow-spacing': [ 'error', { before: true, after: true } ],
      '@stylistic/array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
      '@stylistic/array-bracket-newline': [ 'error', { multiline: true } ],
      '@stylistic/array-element-newline': [ 'error', { consistent: true, multiline: true } ],
      '@stylistic/dot-location': [ 'error', 'property' ],
      '@stylistic/eol-last': [ 'error', 'always' ],
      '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/operator-linebreak': [ 'error', 'before' ],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-trailing-spaces': [ 'error', { ignoreComments: true } ],
      '@stylistic/template-curly-spacing': [ 'error', 'never' ],
      '@stylistic/semi-spacing': [ 'error', { before: false, after: true } ],
      '@stylistic/switch-colon-spacing': [ 'error', { after: true, before: false } ],

      camelcase: [
        'error',
        {
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: true
        }
      ],
      curly: 'error',
      'max-depth': [ 'error', 4 ],
      'max-params': [ 'error', 3 ],
      'no-alert': 'error',
      'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
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
          memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
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
    files: ['**/*.{ts,mts,cts,tsx,js,mjs,cjs,jsx}'],
    plugins: { jsdoc },
    rules: {
      'jsdoc/sort-tags': [
        'error',
        {
          tagSequence: [{ tags: [ 'group', 'category', 'remarks', 'alpha', 'template', 'param', 'returns', 'throws', 'example', 'see' ] }],
          alphabetizeExtras: true
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
