// 一种数据类型
// 参数
// 返回值
// 函数太灵活了， 无所不能
// 一般情况下 把函数作为参数 目的就是为了获取函数内部的异步操作结果
// JavaScript 单线程、事件循环
// function add(x, y) {
//     return x + y
// }

// add(1, 3)



// console.log(1)

// setInterval(function () {
//     console.log(2)
//     console.log('hello')
// }, 1000)

// console.log(3);


// 不成立
// let add = (x, y) => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         let ret = x + y
//         return ret
//     }, 1000)
//     console.log(3);
// }
// console.log(add(10, 30))


// 注意; 凡是需要得到一个函数异步操作的结果
// setTimeout
// redFile
// ajax
// 这种情况必须通过:回调函数

let add = (x, y, callback) => {
  console.log(1)
  setTimeout(() => {
    // callback 就是回调函数
    // let x=1
    // let y = 30
    // let callback=ret=>{console.log(ret)}
    let ret = x + y
    callback(ret)
  })
}

add(1, 30, ret => {
  console.log(ret);
})
