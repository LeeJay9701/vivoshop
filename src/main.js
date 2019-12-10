import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
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
=======
// 引入路由器并注册
import router from './router'
// 引入mock
import './mock/index';
>>>>>>> 5f42f98b18b3df5decb3eabef042c1eacaf1b7ee
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')