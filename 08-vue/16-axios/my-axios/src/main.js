import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1. 基本使用

// axios(config)
// axios({ // 支持promise
//   url: 'http://123.207.32.32:8000/home/multidata',  // 默认get 请求
//   method: 'get'  // 什么方式请求
// }).then(data => {
//   console.log(data);
// })

// axios({ // 支持promise
//   url: 'http://152.136.185.210:7878/api/m5/home/data',  // 默认get 请求
//   params: {   // 基础类型接受  名字对应即可
//     type: 'pop',
//     page: '1'
//   },
//   method: 'get'  // 什么方式请求
// }).then(data => {
//   console.log(data);
// })

// 2.axios 发送并发请求

// 3.使用全局的 axios 和对应配置在进行网络请求
axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'   // 全局共享配置
axios.defaults.timeout = 5000   // 共享超时时间 5s
axios.all([axios({  // promise 
  // baseURL: 'http://152.136.185.210:7878/api/m5',
  url: '/home/multidata',
  // timeout: 5 // 超时时间
}), axios({
  url: '/home/data',

  params: {
    type: 'sell',
    page: 4
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


// 当业务过于大的时候 每一次的请求都会通过服务器
axios({
  url: '/category'   // 分类相关  ， 但是我有可能请求的不是 http://152.136.185.210:7878/api/m5/category  
}).then(data => {
  console.log(data);
})



// 有可能不是通过同一个ip地址
// 4. 创建对应的 axios 的实例
const instance = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000
})
instance({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})
instance({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 3
  }
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  headers: {

  }
})

// 5.封装request模块
import { request } from './network/request'

// 第一种
// request({
//   url: 'http://152.136.185.210:7878/api/m5/home/multidata',

// }, res => {
//   console.log(res)
// },
//   err => {
//     console.log(err);
//   })

// 第二种
// request({
//   baseConfig: '/home/multidata',
//   success: function (res) {
//     console.log(res);
//   },
//   failure: function (err) {
//     console.log(err);
//   }
// })
// 第三种 终极方案 Promise
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})