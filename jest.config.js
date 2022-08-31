module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
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
