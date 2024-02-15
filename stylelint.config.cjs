/** @type import("stylelint").Config */
module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
	overrides: [{files: '*.astro', customSyntax: 'postcss-html'}],
};
