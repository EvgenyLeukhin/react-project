// IMPORTS FOR PRODUCTION
const path = require('path');

const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, 'src/App.tsx'),
  DIST: path.resolve(__dirname, 'dist'),
};

module.exports = {
  // BASIC CONFIG
  mode: 'production',
  entry: paths.SRC,
  target: 'web',
  output: {
    path: paths.DIST,
    publicPath: '', // src="publicPath/bundle.js"
    filename: 'bundle-[hash:8].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // FILES
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  // PLUGINS
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new CompressionPlugin({ algorithm: 'gzip' }),
    new HtmlWebpackPlugin({
      title: 'React project',
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body', // head
    }),
  ],
};
