const { BABEL_TRANFORM_COMMONJS } = process.env;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ...(BABEL_TRANFORM_COMMONJS ? ['@babel/plugin-transform-modules-commonjs'] : []),
    '@babel/plugin-proposal-optional-chaining',
  ],
  exclude: 'node_modules/**',
};
