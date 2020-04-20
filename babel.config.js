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
  plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-proposal-optional-chaining'],
};

