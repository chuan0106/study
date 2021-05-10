// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
const cpn = {
  template: '<div>{{message}}</div>',
  data () {
    return {
      message: '我是组件的message'
    }
  }
}
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  // 1.普通用法:createElement('标签',{标签属性},[标签内容])
  // render: function (createElement) {
  //   return createElement('button', { class: 'box' }, ['按钮', createElement('h2', ['雨神的快乐生活'])]
  //   )
  // }

  // 2.传入组件对象
  render: function (createElement) {
    return createElement(cpn)
  }
})

// runtime - compiler
// template > ast > render > V dom >UI

// runtime-only(1.性能更高 2.下面代码量更少)
// render > V dom > UI

// 那么 .vue文件中的template 是由谁处理的?
// 是由 vue-template-compiler
// render > V dom > UI
