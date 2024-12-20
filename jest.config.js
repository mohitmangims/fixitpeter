// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});
module.exports = createJestConfig({
  preset: 'ts-jest',        // Tell Jest to use ts-jest preset for TypeScript
  testEnvironment: 'jsdom',  // Jest's test environment for DOM manipulation
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",  // For handling TypeScript files
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensions Jest will understand
  setupFilesAfterEnv: [
    "<rootDir>/setup.ts"
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Optional: Exclude specific folders
});
