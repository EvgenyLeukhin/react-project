const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, 'src/App.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  mode: 'production',
  entry: paths.SRC,
  output: {
    path: paths.DIST,
    publicPath: '', // src="publicPath/bundle.js"
    filename: 'bundle-[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({ algorithm: 'gzip' }),
  ],
}