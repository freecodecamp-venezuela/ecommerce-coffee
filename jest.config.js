module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/','<rootDir>/.jest'],
  moduleNameMapper: {
    '^@pages(.*)$': '<rootDir>/pages$1',
  },
}
