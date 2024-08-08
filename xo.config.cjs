/** @type import("xo").Options */
module.exports = {
  extensions: ['astro'],
  extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
  plugins: ['unused-imports'],
  prettier: true,
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        astro: 'always',
      },
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['modern-normalize'],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['Props'],
      },
    ],
  },
};
