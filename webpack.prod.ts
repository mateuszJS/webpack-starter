const merge = require('webpack-merge')
const common = require('./webpack.common.ts')

module.exports = merge(common, {
  mode: 'production'
})

export {} // HACK: Cannot redeclare block-scoped variable of 'merge' and 'common'
