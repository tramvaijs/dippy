import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },

  fakeTimers: {
    enableGlobally: true,
    advanceTimers: true,
  },
};

export default config;
