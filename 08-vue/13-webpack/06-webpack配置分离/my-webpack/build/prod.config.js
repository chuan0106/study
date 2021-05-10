// 生产时配置分离
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge') // merge 分离
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
  plugins: [
    // js 压缩的plugin
    new uglifyJsPlugin()
  ],

})

