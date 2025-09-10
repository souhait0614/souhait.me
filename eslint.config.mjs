// @ts-check

import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { getDefaultCallees } from 'eslint-plugin-better-tailwindcss/api/defaults';
import { MatcherType } from 'eslint-plugin-better-tailwindcss/api/types';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

const reactPlugins = taiymeConfig.configs['react/recommended'][1].plugins;

/** @typedef {import('eslint-plugin-better-tailwindcss/api/types').CalleeMatchers} CalleeMatchers */

const files = [
  '**/*.{js,mjs,ts,tsx}',
];

/** @type {CalleeMatchers} */
const TV_BASE_VALUES = [
  'tv',
  [
    {
      match: MatcherType.ObjectValue,
      pathPattern: '^base.*$',
    },
  ],
];

/** @type {CalleeMatchers} */
const TV_SLOT_VALUES = [
  'tv',
  [
    {
      match: MatcherType.ObjectValue,
      pathPattern: '^slots.*$',
    },
  ],
];

export default defineConfig(
  gitignore(),
  {
    files,
    extends: [
      taiymeConfig.configs.typescript,
      taiymeConfig.configs['react/stylistic'],
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        React: 'readonly',
      },
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: '19',
      },
    },
    plugins: {
      ...reactPlugins,
    },
    rules: {
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files,
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/style.css',
        callees: [
          ...getDefaultCallees(),
          TV_BASE_VALUES,
          TV_SLOT_VALUES,
        ],
      },
    },
    rules: {
      ...betterTailwindcss.configs.recommended?.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'warn',
      'better-tailwindcss/no-unregistered-classes': ['error', { detectComponentClasses: true }],
    },
  },
);
