import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.test = function () {
  console.log('test');
}
Vue.prototype.name = "xc"
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
console.log(router);

const obj = {
  name: 'cc'
}
