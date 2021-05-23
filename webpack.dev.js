// IMPORTS FOR DEVELOPMENT
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// PATHS
const paths = {
  SRC: path.resolve(__dirname, 'src/App.jsx'),
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
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src', 'components'),
      Styles: path.resolve(__dirname, 'src', 'assets', 'css'),
      Images: path.resolve(__dirname, 'src', 'assets', 'images'),
      Icons: path.resolve(__dirname, 'src', 'assets', 'icons'),
      Fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
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
            name: 'assets/img/[name]-[hash:12].[ext]'
          }
        }]
      },

      // FONTS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/fonts/[name].[ext]' }
          }
        ]
      },
    ],
  },

  // PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React project - Development',
      favicon: 'src/assets/icons/favicon.ico',
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body', // head
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx']
    }),
  ],
};
