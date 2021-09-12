const jsconfig = require('./jsconfig.json')

const getEslintAliases = () => {
	if (!jsconfig.compilerOptions || !jsconfig.compilerOptions.paths) return []
	return Object.entries(
		jsconfig.compilerOptions.paths
	).map(([alias, paths]) => [
		alias.replace('/*', ''),
		paths[0].replace('/*', '')
	])
}

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint', 'jest'],
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/all'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/semi': 0,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/indent': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-use-before-define': [0],
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				argsIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
		'react/no-multi-comp': [
			'error',
			{
				ignoreStateless: true
			}
		],
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.tsx', '.js', '.jsx']
			}
		],
		'no-mixed-spaces-and-tabs': 0,
		// 'no-console': [
		// 	2,
		// 	{
		// 		allow: ['warn', 'error']
		// 	}
		// ],
		'no-var': 'error',
		semi: 0,
		indent: [0],
		'no-multi-spaces': 'error',
		'no-nested-ternary': 0,
		'space-in-parens': 'error',
		'no-multiple-empty-lines': 'error',
		'prefer-const': 'error',
		'max-len': ['error', 200],
		'prefer-destructuring': ['error'],
		'no-unused-vars': [
			2,
			{
				argsIgnorePattern: '^_'
			}
		],
		'new-cap': 'off',
		'object-shorthand': 'warn',
		'no-use-before-define': 'off',
		'import/extensions': 'off',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-warning-comments': [
			'error',
			{
				terms: ['todo', 'fixme'],
				location: 'anywhere'
			}
		],
		'jest/prefer-strict-equal': 'off',
		'jest/prefer-expect-assertions': 'off',
		'jest/no-hooks': 'off',
		'no-console': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			alias: getEslintAliases()
		}
	}
}
