import Vue from 'vue'
import App from './App.vue'
// 引入路由器并注册
import router from './router'
// 引入mock
import './mock/index';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')