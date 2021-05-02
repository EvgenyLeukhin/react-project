const path = require('path');
const paths = {
  SRC: path.resolve(__dirname, 'src/App.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  mode: 'development',
  entry: paths.SRC,
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
}