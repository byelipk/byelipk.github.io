var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractCSS.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
