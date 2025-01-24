import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapea el alias `@/` a la carpeta `src/` de tu proyecto
  },
  setupFiles: ['./jest.setup.js'],
};

export default config;
