// 用来获取机器信息的
var os = require('os')
// 用来操作路径的
var path = require('path')

// 获取当前机器的cpu信息
console.log(os.cpus())
// 获取当前内存大小
console.log(os.totalmem())

// extname 扩展名
console.log(path.extname('c:a/b/c/d/hello.txt'));
console.log(path.resolve(__dirname, 'dist'));
//  当前路径下找 dist
