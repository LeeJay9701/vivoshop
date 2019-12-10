// 引入路由组件
const Home = () => import('../pages/Home/Home.vue')
const News = () => import('../pages/News/News.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
<<<<<<< HEAD
const ShopCar = () => import('../pages/ShopCar/ShopCar.vue')
// 引入首页组件
// import Home from '../pages/Home/Home.vue'
// import News from '../pages/News/News.vue'
// import ShopList from '../pages/ShopList/ShopList.vue'
=======
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')
const Settlement = () => import('../pages/Settlement/Settlement.vue')
// 引入首页组件
// import Home from '../pages/Home/Home.vue'
// import News from '../pages/News/News.vue'
// import ShoppingList from '../pages/ShoppingList/ShoppingList.vue'
>>>>>>> 6839e85d5ad0d7328c2978de0356dbd10852dc06
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
<<<<<<< HEAD
    path: '/shopCar',
    component: ShopCar
=======
    path: '/shopCart',
    component: ShoppingCart
  },
  {
    path: '/settlement',
    component: Settlement
>>>>>>> 6839e85d5ad0d7328c2978de0356dbd10852dc06
  }
]
