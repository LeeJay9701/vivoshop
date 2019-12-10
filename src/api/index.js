import ajax from './axios'

const url = '/api'

export const reqLogin = ({
  account,
  password
}) => ajax({
  method: 'post',
  url: url + '/login',
  data: {
    account,
    password
  }
})
// export const reqAutoLogin = () => ajax()

// export const reqGetCartList = () => ajax({
//   method: 'get',
//   url: url + '/users/cartList'
// })
//注册
export const reqRegister = ({
  account,
  password,
  rePassword,
  name
}) => ajax({
  method: 'post',
  url: url + '/register',
  data: {
    account,
    password,
    rePassword,
    name
  }
})
//自动登录
export const reqAutoLogin = () => ajax({
  method: 'get',
  url: url + "/auto_login"
})

//请求首页轮播图
export const reqGetGoods = () => ajax({
  method: 'get',
  url: url + '/all'
})
// //查询商品列表数据
// export const reqGetGoods = ({
//   priceLevel,
//   page = 1,
//   pageSize = 8,
//   sort = 1
// }) => ajax({
//   method: 'get',
//   url: url + '/goods/list',
//   params: {
//     priceLevel,
//     page,
//     pageSize,
//     sort
//   }
// })