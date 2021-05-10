// 小明
//  匿名闭包
var moduleA = (function () {

  // es5 导出对象
  var obj = {}

  var name = '小明'
  var age = 22
  function sum(num1, num2) {
    return num1 + num2
  }
  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = true
  obj.sum = sum;

  return obj
})()