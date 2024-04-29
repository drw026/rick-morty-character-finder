module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.{tsx,ts}',
    '!**/node_modules/**',
    '!**/mocks/**',
  ],

  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Setting to support relative paths starting with @
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // A set of global variables that need to be available in all test environments
  transform: {
    // "^.+\\.tsx?$": "ts-jest"
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.test.+(ts|tsx)'],

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/mocks/'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./jest.setup.ts'],
};
