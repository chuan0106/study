let fs = require('fs')
// new Promise((resolve, reject) => {
//   fs.readFile('./00-js中的一等公民函数.js', 'utf8', (err, data) => {
//     if (err) {
//       reject(err)
//     }
//     resolve(data)
//   })
// }).then(data => {
//   console.log(data);
//   // 对结果进行处理
//   return new Promise(resolve => {
//     resolve(data + '111')
//   })
// }).then(data => {
//   console.log(data, '第一层的代码进行处理');
//   return Promise.resolve(data + '222')
// }).then(data => {
//   console.log(data, '第二层的代码进行处理');
// })


new Promise((resolve, reject) => {
  fs.readFile('./00-js中的一等公民函数.js', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
}).then(data => {
  console.log(data);
  return data + '111'
}).then(data => {
  console.log(data);
  return data + '222'
  
}).then(data => {
  console.log(data);
  // return Promise.reject('err message')
  throw 'err message'  // 手动抛出异常
}).then(data => {
  console.log(data + '上一层reject');
}).catch(err => {
  console.log(err);
})