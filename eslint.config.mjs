// @ts-check

import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { getDefaultCallees } from 'eslint-plugin-better-tailwindcss/api/defaults';
import { MatcherType } from 'eslint-plugin-better-tailwindcss/api/types';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

// TODO: 後でなんとかする
// /** @typedef {import('eslint-plugin-better-tailwindcss/api/types').CalleeMatchers} CalleeMatchers */

const files = [
  '**/*.{js,mjs,ts,tsx}',
];

// /** @type {CalleeMatchers} */
const TV_BASE_VALUES = [
  'tv',
  [
    {
      match: MatcherType.ObjectValue,
      pathPattern: '^base.*$',
    },
  ],
];

// /** @type {CalleeMatchers} */
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
      taiymeConfig.configs.react,
      taiymeConfig.configs.stylistic,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        React: 'readonly',
      },
      parser: tsEslintParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: '19',
      },
    },
    rules: {
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-unknown-property': 'off',
      'react/jsx-key': 'off',
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
      ...betterTailwindcss.configs.recommended.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'warn',
      'better-tailwindcss/no-unknown-classes': ['error', { detectComponentClasses: true }],
    },
  },
);
