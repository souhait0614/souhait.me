/** @type import("stylelint").Config */
module.exports = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-recess-order',
	],
	overrides: [{files: '*.astro', customSyntax: 'postcss-html'}],
};
