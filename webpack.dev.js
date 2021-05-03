// IMPORTS FOR DEVELOPMENT
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// PATHS
const paths = {
  SRC: path.resolve(__dirname, 'src/main.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  // BASIC CONFIG
  mode: 'development',
  watchOptions: { ignored: /node_modules/ },
  devtool: 'cheap-module-source-map', // source maps 
  target: 'web', // project target, connects with browserslist
  entry: paths.SRC,
  output: {
    path: paths.DIST,
    publicPath: '', // src="publicPath/bundle.js"
    filename: 'bundle.js',
  },

  // WEBPACK-DEV-SERVER
  devServer: {
    open: 'Google Chrome',
    compress: true,
    // contentBase: paths.SRC,
    // host: '0.0.0.0',
    port: 8888,
    overlay: { warnings: false, errors: true },
  },

  // FILES
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  // PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React project - Development',
      // favicon: 'src/favicon.png',
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body', // head
    })
  ]
}