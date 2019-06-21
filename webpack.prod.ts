const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common.ts')

module.exports = webpackMerge(webpackCommon, {
  mode: 'production'
})
