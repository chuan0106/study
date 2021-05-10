// 在 node 中 每个模块内部都有一个自己的 module 对象
// 该 module 对象中,有一个成员叫:exports 也是一个对象 默认是空对象

// let module = {
//     exports: {
//         foo: 'bar',
//         add: function () {

//         }
//     }
// }

// 也就是说在模块中海油这么一句代码
// let exports = module.exports



exports.foo = 'bar';
module.exports.add = (x, y) => { x + y };

console.log(exports === module.exports);
// 谁来 require 我: 谁就得到 module.exports
// 默认在代码的最后一句:
// return module.exports