import axios from 'axios'
import qs from 'qs'
import {
  Toast
} from 'mint-ui'
import router from '../route'

// 请求拦截器
axios.interceptors.request.use(config => {
  const {
    method,
    data
  } = config
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  // 判断是否需要token  在请求中的headers对象中添加needToken:true
  if (config.headers.needToken) {
    const token = localStorage.getItem('token_key')
    if (!token) {
      const error = new Error("登录过期，请新登录")
      error.status = 401
      throw error
    } else {
      config.headers.authorization = token
    }
  }
  return config
})
//响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.status === 401) {
    // 跳转到/login登录界面---先判断是不是login界面---currentRoute当前的路由组件
    if (router.currentRoute.path !== '/login') {
      // 提示错误信息
      Toast(error.message)
      router.replace('/login')
    }

  }
})
// 暴露axios
export default axios