/** @type import("prettier").Config */
export default {
  semi: true,
  useTabs: false,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: false,
  jsxSingleQuote: true,
  astroAllowShorthand: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
