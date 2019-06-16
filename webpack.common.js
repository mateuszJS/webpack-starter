'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js']
  },
  entry: {
    index: `${__dirname}/src/index.js`
  },
  output: {
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'standard-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html'
    })
  ]
}
