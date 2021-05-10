export default {
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