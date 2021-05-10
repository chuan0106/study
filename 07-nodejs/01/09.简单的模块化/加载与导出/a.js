// require 方法有两个作用
//  1 加载文件模块并执行里面的代码
//  2拿到被加载模块到处的接口对象

// 在每个文件模块中都提供了一个对象： exports
// exports 默认是一个空对象
// 你要做的是就是把所有需要被外部访问的成员挂载到这个 exports 对象中
var bExports = require('./b');
let fs = require('fs');
console.log(bExports.foo);
console.log(bExports.add(10, 30));
console.log(bExports.age);
fs.readFile('../加载与导出/a.js', function (err, data) {
    if (err) {
        console.log('读取文件失败');
    } else {
        console.log(data.toString());
    }
})