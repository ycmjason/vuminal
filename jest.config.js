module.exports = {
  roots: ['<rootDir>/packages/*'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
