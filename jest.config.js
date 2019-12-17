module.exports = {
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
