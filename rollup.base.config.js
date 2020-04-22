import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  plugins: [resolve({ extensions }), commonjs(), babel({ extensions }), autoExternal()],
};
