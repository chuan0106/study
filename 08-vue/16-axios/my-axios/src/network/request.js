import axios from "axios";

// 优雅永不过时！！！！
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2.axios 的拦截器
  // 拦截全局
  // axios.interceptors
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {  // 请求发送成功 请求发送失败
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token:令牌)) 必须携带一些特殊的信息
    console.log(config); // 拦截成功
    return config   // 拦截了需要把成功的数据发送出去
  }, err => {
    console.log(err);
  })

  // 2.2.相应拦截
  instance.interceptors.response.use(res => {   // res result  结果
    console.log(res);   // 响应拦截成功
    return res.data   // 结果返回出去
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)

}

// 最终方案 max 完美
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//   })
// }

// 第一种
// 封装多个实例
// export function request(config, success, failure) {
//   // 1. 创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })
//   // 发送真正的网络请求
//   instance(config).then(res => success(res)).catch(err => failure(err))
// }

// 第二种
// export function request(config) {
//   // 1. 创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })
//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => config.success(res))
//     .catch(err => config.failure(err))
// }



export function instance1() {

}

export function instance2() {

}


export function instance3() {

}


export function instance4() {

}