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

      // Load in our SASS files
      {
        test: /\.scss$/,
        use: extractSASS.extract(['css-loader', 'sass-loader'])
      },

      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
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
          },
          {
            loader: "expose-loader",
            options: "window.jQuery"
          }
        ]
      }
    ]
  },

  plugins: [
    extractSASS
  ]
};
