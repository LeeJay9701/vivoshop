// 引入路由组件
const Home = () => import('../pages/Home/Home.vue')
const News = () => import('../pages/News/News.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const ShopCar = () => import('../pages/ShopCar/ShopCar.vue')
// 引入首页组件
// import Home from '../pages/Home/Home.vue'
// import News from '../pages/News/News.vue'
// import ShopList from '../pages/ShopList/ShopList.vue'
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
    path: '/shopCar',
    component: ShopCar
  }
]
