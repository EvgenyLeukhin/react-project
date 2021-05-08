// IMPORTS FOR DEVELOPMENT
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// PATHS
const paths = {
  SRC: path.resolve(__dirname, 'src/App.tsx'),
  DIST: path.resolve(__dirname, 'dist'),
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

  // to import without endings
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      Styles: path.resolve(__dirname, 'src', 'assets', 'css'),
    },
  },

  // FILES
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React project - Development',
      // favicon: 'src/favicon.png',
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body', // head
    }),
  ],
};
