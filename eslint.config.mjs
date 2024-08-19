// @ts-check

import taiymeConfig from '@taiyme/eslint-config';
import configGitignore from 'eslint-config-flat-gitignore';
import pluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/** @type {import("@typescript-eslint/types").ParserOptions} */
const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
};

export default tsEslint.config(
  configGitignore(),
  {
    files: ['**/*.*js', '**/*.jsx', '**/*.*ts', '**/*.tsx', '**/*.astro'],
    extends: taiymeConfig.configs.typescript,
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslint.parser,
      parserOptions,
    },
  },
  {
    extends: pluginAstro.configs['flat/jsx-a11y-recommended'],
    languageOptions: {
      parserOptions,
    },
  },
);
