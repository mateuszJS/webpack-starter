const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common.ts')
/*
  That prefix in const's names ('webpack') was added because TS recognizes this file as a script.
  TS assumes that scripts have a global scoping, so there is no way to declare
  the same consts in this file and in the 'webpack.dev.ts'. There are only two options to fix that:
  1) change the name of the consts
  2) add an import or export, then TS will recognize this file as a module
  (module can't add consts to global scope)
*/

module.exports = webpackMerge(webpackCommon, {
  mode: 'production'
})
