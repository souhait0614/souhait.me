// @ts-check

/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-tailwindcss',
    '@stylistic/stylelint-config',
  ],
  rules: {
    'at-rule-no-deprecated': null,
    'nesting-selector-no-missing-scoping-root': null,
    '@stylistic/string-quotes': 'single',
  },
};
