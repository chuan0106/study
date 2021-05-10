// 小明
// 虽然解决变量命名冲突的问题  但还是会有问题  代码没有复用性 因为有立即执行函数 所以执行不了 aaa 的flag 

// es5方案

// 1.想使用 flag
; (function () {
  if (moduleA.flag) {
    console.log('小明是天才');
  }
  // 2.使用sum 函数
  console.log(moduleA.sum(40, 30));


})()