const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/src'],
};

process.env.BABEL_TRANFORM_COMMONJS = '1';
