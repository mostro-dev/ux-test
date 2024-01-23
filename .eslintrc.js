module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "_",
			},
		],
		"@typescript-eslint/array-type": "warn",
		"@typescript-eslint/no-explicit-any": "warn",
	},
	overrides: [
		{
			files: "*.json",
			parser: "jsonc-eslint-parser",
			rules: {},
		},
	],
};
