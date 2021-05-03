const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
  SRC: path.resolve(__dirname, 'src/App.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  mode: 'development',
  watchOptions: { ignored: /node_modules/ },
  devtool: 'cheap-module-source-map', // source maps 
  target: 'web', // project target, connects with browserslist
  entry: paths.SRC,
  devServer: {
    open: 'Google Chrome',
    compress: true,
    // contentBase: paths.SRC,
    // host: '0.0.0.0',
    port: 8888,
    overlay: {
      warnings: false,
      errors: true
    },
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