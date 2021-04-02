const jsconfig = require('./jsconfig.json')

const convertPaths = () => {
	if (!jsconfig.compilerOptions || !jsconfig.compilerOptions.paths) return {}

	return Object.entries(jsconfig.compilerOptions.paths)
		.map(([alias, paths]) => ({
			alias: alias.replace('/*', '/(.*)$'),
			path: `<rootDir>/${paths[0].replace('/*', '/$1')}`
		}))
		.reduce((acc, cur) => {
			acc[cur.alias] = cur.path
			return acc
		}, {})
}

module.exports = {
	transform: {
		'^.+\\.[jt]sx?$': '<rootDir>/.config/jest-preprocess.js'
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
		...convertPaths()
	},
	testPathIgnorePatterns: [
		`node_modules`,
		`\\.cache`,
		`<rootDir>.*/public`,
		'<rootDir>/cypress'
	],
	transformIgnorePatterns: ['/node_modules/(?!(@babel/runtime|gatsby))'],
	globals: {
		__PATH_PREFIX__: ``
	},
	testURL: `http://localhost:8000`,
	setupFiles: [`<rootDir>/.config/loadershim.js`]
}
