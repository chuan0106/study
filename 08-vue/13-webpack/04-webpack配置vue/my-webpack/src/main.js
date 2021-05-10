// 入口文件

// 1.commonjs模块化规范
const mathUtils = require('./js/mathUtils')
console.log(mathUtils.add(10, 28));


// 2.es6模块化规范
import { name, age, height } from "./js/info.js";
console.log(name);
console.log(age);
console.log(height);

// 3.依赖 css 文件
require('./css/normal.css')


// 4.依赖 less 文件
require('./css/special.less')


document.writeln('<h2>你好啊</h2>')

// 5.使用Vue 进行开发
// 源码里面默认有一句 export default Vue
import Vue from 'vue'
import App from './vue/app1'
// import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  }
})


