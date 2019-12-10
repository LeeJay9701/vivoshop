import Login from '../page/Login/Login.vue'
import Home from '../page/Home/Home.vue'
import Personal from '../page/Personal/Personal.vue'
import Category from '../page/Category/Category.vue'
import Dynamic from '../page/Dynamic/Dynamic.vue'
export default [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
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
  }
]