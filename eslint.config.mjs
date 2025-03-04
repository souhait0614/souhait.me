// @ts-check

import taiymeConfig from '@taiyme/eslint-config';
import configGitignore from 'eslint-config-flat-gitignore';
import pluginAstro from 'eslint-plugin-astro';
import pluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const parserOptions = {
  /** @type {import("@typescript-eslint/types").EcmaVersion} */
  ecmaVersion: 'latest',
  /** @type {import("@typescript-eslint/types").SourceType} */
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
};

export default tsEslint.config(
  configGitignore(),
  {
    files: ['**/*.*js', '**/*.jsx', '**/*.*ts', '**/*.tsx', '**/*.astro', '**/*.svelte'],
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
    // NOTE: 多分pnpm v10で動かなくなったので暫定対応 https://github.com/ota-meshi/eslint-plugin-astro/issues/470
    extends: pluginAstro.configs['flat/recommended'],
    languageOptions: {
      parserOptions: {
        ...parserOptions,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    extends: pluginSvelte.configs['flat/recommended'],
    languageOptions: {
      parserOptions: {
        ...parserOptions,
        parser: tsEslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
);
