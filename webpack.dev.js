const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
  SRC: path.resolve(__dirname, 'src/App.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  mode: 'development',
  entry: paths.SRC,
  devServer: {
    open: true,
    contentBase: paths.DIST,
    compress: true,
    // host: '0.0.0.0',
    port: 8888,
    overlay: {
      warnings: false,
      errors: true
    },
    hot: true,
  },
  output: {
    path: paths.DIST,
    publicPath: '', // src="publicPath/bundle.js"
    filename: 'bundle.js',
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
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body', // head
    })
  ]
}