/** @type import("prettier").Config */
module.exports = {
  semi: true,
  useTabs: false,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: false,
  jsxSingleQuote: true,
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
