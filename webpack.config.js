var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSASS = new ExtractTextPlugin('styles.css');

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
        use: extractSASS.extract(['css-loader', 'sass-loader'])
      },

      // Expose jQuery as a global
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

      // Expose Tether as a global
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
    extractSASS
  ]
};
