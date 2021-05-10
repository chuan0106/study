// 浏览器中的JavaScript 是没有文件操作的能力的
// 但是 node 中的 JavaScript 具有文件操作的能力

// fs是file -system的简写 就是文件系统的意思
// 在node 中 如果想要进入文件操作 就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中 就提供了所有的文件相关操作的 api
// 例如： fs.readFile 就是用来读取文件的

// 1 使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2 读取文件
//   第一个参数就是要读取的文件路径
//    第二个参数是一个毁掉函数

// 成功
// data 数据
// error null
// 失败
// data null 
// error 错误对象
fs.readFile('./data/0.md', function (error, data) {
    // console.log(data);
    // 文件中存储的其实都是二进制数据 0 1
    // 这里为什么看到的不是0 和1 呢？  原因是 二进制转为16进制了
    // 但是无论是二进制还是16进制 人类都不认识
    // 所以我们可以通过 toString 方法把其转为我们认识的字符

    // 在这里可以通过判断 error 来确认是否有错误发生
    if (error) {
        console.log('读取文件失败了');
    } else {
        console.log(data.toString());
    }



});