const merge = require('webpack-merge')
const common = require('./webpack.common.ts')

const HOST = '127.0.0.1'
const PORT = '7777'

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: './dist', // This is only necessary if you want to serve static files.
    hot: true,
    inline: true, // Mode is recommended for Hot Module Replacement as it includes an HMR trigger from the websocket.
    port: PORT,
    host: HOST,
    historyApiFallback: true
  }
})
