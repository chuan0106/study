import Vue from 'vue'
import { INCREMENT } from './mutations-types'

export default {  // 方法
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
}