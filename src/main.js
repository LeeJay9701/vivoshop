import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './route'
// 使用mock
import './mock/index'
// import './mock-server/index'
//vuex
import store from './store/index'
// 引入表单验证
import './veevalidate'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')