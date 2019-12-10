import Login from '../page/Login/Login.vue'
import Home from '../page/Home/Home.vue'
import Personal from '../page/Personal/Personal.vue'
import Category from '../page/Category/Category.vue'
import Dynamic from '../page/Dynamic/Dynamic.vue'
import ProductDetail from '../components/ProductDetail/ProductDetail.vue'
import ShopCart from '../components/ShopCar/ShopCar.vue'
import Address from '../components/Address/Address.vue'

export default [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/home',
    name: '主页',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    name: '我的',
    component: Personal,
    meta: {
      isShowFooter: true
    }
  }, {
    path: '/category',
    name: '分类',
    component: Category,
    meta: {
      isShowFooter: true
    }
  }, {
    path: '/dynamic',
    name: '动态',
    component: Dynamic,
    meta: {
      isShowFooter: true
    }
  }, {
    path: '/productdetail',
    name: '商品信息',
    component: ProductDetail
  }, {
    path: '/shopcart',
    name: '购物车',
    component: ShopCart
  }, {
    path: '/my-address',
    component: Address
  }
]