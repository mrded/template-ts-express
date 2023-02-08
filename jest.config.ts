import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  coverageReporters: ['text-summary', 'html'],

  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/jest',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        suiteNameTemplate: '{filepath} - {title}',
        ancestorSeparator: ' -- ',
        addFileAttribute: 'true',
      },
    ],
  ],
};

export default config;
