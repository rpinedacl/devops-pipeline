module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest/globals': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	plugins: ['jest'],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		"sort-imports": [
			"error", {
				"ignoreCase": false,
				"ignoreDeclarationSort": false,
				"ignoreMemberSort": false,
				"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
				"allowSeparatedGroups": false
			}
		],
		"no-unused-vars": [
			"error", { 
				"vars": "all", 
				"args": "after-used", 
				"ignoreRestSiblings": false 
			}
		],
		semi: [
			"error", "always"
		],
		camelcase: [
			"error", {
				properties: "always"
			}
		],
		"arrow-body-style": ["error", "always"],
		"no-underscore-dangle": "error"
	}
};
