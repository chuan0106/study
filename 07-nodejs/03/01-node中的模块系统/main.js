// 默认得到的是对象
// 使用对象中的成员必须 . 出来成员才可以
// 有时候 对于一个模块 我仅仅就是希望到处一个方法就可以了
var fooExports = require('./foo');
// ReferenceError: foo is not defined
// console.log(foo);
console.log(fooExports);
