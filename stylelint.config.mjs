// @ts-check

/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
  ],
  rules: {
    '@stylistic/string-quotes': 'single',
  },
  overrides: [
    { files: '*.astro', customSyntax: 'postcss-html' },
    { files: '*.svelte', customSyntax: 'postcss-html' },
  ],
};
