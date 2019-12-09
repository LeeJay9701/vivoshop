// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'
// 在全局中声明使用路由插件
Vue.use(VueRouter)
// 暴露路由器
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router