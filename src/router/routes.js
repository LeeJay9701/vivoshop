// 引入路由组件
const Home = () => import('../pages/Home/Home.vue')
const News = () => import('../pages/News/News.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')
const Settlement = () => import('../pages/Settlement/Settlement.vue')
// 引入首页组件
// import Home from '../pages/Home/Home.vue'
// import News from '../pages/News/News.vue'
// import ShoppingList from '../pages/ShoppingList/ShoppingList.vue'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/shopCart',
    component: ShoppingCart
  },
  {
    path: '/settlement',
    component: Settlement
  }
]
