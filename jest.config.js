/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/mocks/fileMock.js',
		'\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
		'\\.(css|less)$': '<rootDir>/mocks/styleMock.js',
	},
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
	},
	transform: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/fileTransformer.js',
	},
	moduleNameMapper: {
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
		"\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules', 'bower_components', 'shared'],
	testEnvironment: "jsdom",
	transform: {
		"^.+.tsx?$": ["ts-jest", { tsconfig: { moduleResolution: "node" } }],
	},
	setupFilesAfterEnv: [
		"<rootDir>/support/setupTests.js"
	],
};