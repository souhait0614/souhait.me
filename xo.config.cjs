/** @type import("xo").Options */
module.exports = {
	extensions: ['astro'],
	extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
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
		'import/extensions': ['error', 'never'],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				ignore: ['Props'],
			},
		],
	},
};
