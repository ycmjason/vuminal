import baseConfig from '../../rollup.base.config';
import pkg from './package.json';

export default {
  ...baseConfig,
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
};
