const path = require('path')
console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './src/main.js',  // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'),  // 路径 需要时绝对路径  找到的是 dist 路径
    filename: 'bundle.js'  // 文件名字
  }
}