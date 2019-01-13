import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  plugins: [
    commonjs()
  ]
};