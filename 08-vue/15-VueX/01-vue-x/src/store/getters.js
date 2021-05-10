export default {
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
}