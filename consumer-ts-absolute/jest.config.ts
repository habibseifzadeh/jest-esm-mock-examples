/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  rootDir: './',
  modulePaths: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'test',
    'coverage',
    '.eslintrc.js',
    'jest.config.js',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '.mock.ts',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  verbose: true,
};

module.exports = config;