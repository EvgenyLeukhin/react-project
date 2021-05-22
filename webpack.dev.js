// IMPORTS FOR DEVELOPMENT
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

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
    open: true,
    compress: true,
    port: 8888,
  },

  // to import without endings
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      Styles: path.resolve(__dirname, 'src', 'assets', 'css'),
      Images: path.resolve(__dirname, 'src', 'assets', 'images'),
      Icons: path.resolve(__dirname, 'src', 'assets', 'icons'),
    },
  },

  // FILES
  module: {
    rules: [
      // JS
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      // CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // IMAGES
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name]-[hash:12].[ext]'
          }
        }]
      },

      // FONTS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          }
        ]
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
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx']
    }),
  ],
};
