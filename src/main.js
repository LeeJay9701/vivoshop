import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './route'
// 使用mock
import './mock/index'
// import './mock-server/index'
// 引入表单验证
import './veevalidate'
import {
  Row,
  Col,
  Icon,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(Row).use(Col).use(Icon).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(NavBar).use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')