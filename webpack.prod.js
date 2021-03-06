// IMPORTS FOR PRODUCTION
const path = require('path');

const WebpackBar             = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const CompressionPlugin      = require('compression-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const CssMinimizerPlugin     = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin  = require('favicons-webpack-plugin');

const paths = {
  SRC: path.resolve(__dirname, 'src/App.jsx'),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      // IMAGES
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'assets/img/[name]-[hash:12].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true }
          },
        ]
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

  // optimization
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
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
     // css bundle
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }),

    // favicons
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/react-logo.png',
      prefix: 'assets/icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
  ],
};
