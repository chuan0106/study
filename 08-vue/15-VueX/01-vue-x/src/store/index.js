import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)

// 2.常见对象
const state = {
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
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store