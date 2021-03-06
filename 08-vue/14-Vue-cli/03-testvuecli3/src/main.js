import Vue from 'vue'
import App from './App.vue'

// 产品提示信息
Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   render: h => {
//     h(App)
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')


// $mount  == el