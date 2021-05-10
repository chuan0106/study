export default {   // 处理异步操作
  // aUpDataInfo(context, payload) { //  context : 上下文
  //   setTimeout(() => {
  //     console.log(payload.message);
  //     payload.success()
  //     context.commit('updatainfo')
  //   }, 1000)
  // }

  // 上面的不够优雅 这个才优雅
  aUpDataInfo(context, payload) { // 默认属性 context : 上下文
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updatainfo')
        resolve('111')
      }, 1000)
    })
  }

}