import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 这里尽量不要放太多其他代码
// require('./assets/css/base.less')