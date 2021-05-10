// 小明

var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}
if (flag) {
  console.log(sum(10, 60,));
}

// 导出方式一
export {
  flag, sum

}

// 导出方式二
export var num1 = 1000
export var height = 1.88


// 导出方式三 函数和类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  run() {
    console.log(this.name + '在奔跑');
  }
}

// 导出方式四 default  只能有一个  在某些情况下  一个模块中办函某个功能 我们不希望给这个功能命名 让导入者来命名 
// const address = '河南省'
// export default address

export default function (argument) {
  console.log(argument);
}