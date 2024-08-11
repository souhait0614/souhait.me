// @ts-check

import pluginJs from '@eslint/js';
import configGitignore from 'eslint-config-flat-gitignore';
import configPrettier from 'eslint-config-prettier';
import pluginAstro from 'eslint-plugin-astro';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  configGitignore(),
  {extends: [pluginJs.configs.recommended]},
  {extends: tseslint.configs.recommended},
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    extends: pluginAstro.configs['flat/jsx-a11y-recommended'],
  },
  {extends: [configPrettier]},
);
