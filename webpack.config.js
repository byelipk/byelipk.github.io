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
    loaders: [

    ],
    rules: [
      {
        test: /\.scss$/,
        use: extractCSS.extract(['css-loader', 'sass-loader'])
      },

      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "$"
          },
          {
            loader: "expose-loader",
            options: "jQuery"
          }
        ]
      },

      {
        test: require.resolve("tether"),
        use: [{
          loader: "expose-loader",
          options: "Tether"
        }]
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
