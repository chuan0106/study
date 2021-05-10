// 开发时配置分离

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true, // 是否实时进行监听
    port: 8080,  // 默认8080
    // historyApiFallback:  // 在SPA页面中 依赖html5 的history 模式 暂时不知道干嘛的 
  }
})
