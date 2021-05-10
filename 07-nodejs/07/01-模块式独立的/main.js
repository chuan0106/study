// 在node 中没有全局作用于 他只是文件模块作用域
// 模块式独立 不能因为 a 加载过 fs 了 b 就不需要 这是错误的理解
// 正确的做法应该是 a 需要 fs 则 a 就加载 fs b 需要 fs  则 b 就加载 fs

let fs = require('fs');

console.log(fs);

require('./foo');

