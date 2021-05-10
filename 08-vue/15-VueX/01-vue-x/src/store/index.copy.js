import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'
// 1.安装插件
Vue.use(Vuex)

// 2.常见对象
const moduleA = {
  state: {
    name: '爱吃爱睡爱被照顾'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName({ state, commit, rootState }) { // 只会掉自己模块的东西 对象的结构赋值
      setTimeout(() => {

        commit('updateName', '王五')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(tate, getters, rootState) {  // rootState 根的 state 
      return getters.fullName2 + rootState.counter
    }
  }

}
const store = new Vuex.Store({
  state: { // 状态码
    counter: 1000,
    students: [
      { id: 1, name: '雨神', age: 12 },
      { id: 2, name: '少主', age: 21 },
      { id: 3, name: '母鸡', age: 28 },
      { id: 4, name: '关羽', age: 10 }
    ],
    info: {
      // 这些属性都会被加入响应式系统中  而响应式系统会监听属性的变化 当属性发生变化是 会通知 所有界面中 用到该属性的地方 让界面发生刷新
      name: '爱打游戏的雨神', age: 438
    }
  },
  mutations: {  // 方法
    [INCREMENT](state) {  // 对象的是 上面的 state
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) { // 第二个参数 addCount(count) 传过来的值  我这边给他该成 payload 因为换种提交风格 收到的是一个对象
      // state.counter += count  // 收到的是值
      // console.log(count);
      console.log(payload);
      state.counter += payload.count // 收到的是对象
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updatainfo(state) {
      // state.info.name = "打游戏很菜的雨神"

      // 错误代码 不能在这里进行异步操作
      // setTimeout(() => {
      //   state.info.name = "打游戏很菜的雨神"
      // }, 1000)


      // state.info['address'] = '洛杉矶'    // 不会修改 因为响应式只会修改之前定义好的属性
      // Vue.set(state.info, 'address', '洛杉矶')  // 修改成功  set方法 是响应式
      // delete state.info.age  // 可以删除 但不是响应式 
      Vue.delete(state.info, 'age')   // 可以删除 并且响应式
    }
  },
  actions: {   // 处理异步操作
    // aUpDataInfo(context, payload) { // 默认属性 context : 上下文
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
          console.log(payload);
          console.log(context);
          context.commit('updatainfo')
          resolve('111')
        }, 1000)
      })
    }

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(item => item.age > 20)
    },
    // more20stuLength(state) {
    //   return state.students.filter(item => item.age > 20).length
    // },
    more20stuLength(state, getters) { // 第二个参数 传入的是 getters
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(item => item.age > age) //  对方可以发送一个age实参并且接收过来
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store