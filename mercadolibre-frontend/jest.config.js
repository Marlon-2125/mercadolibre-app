module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
      '^@components/(.*)$': '<rootDir>/src/ui/components/$1',
    },
    collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
    roots: ['<rootDir>'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    }
  };