// import Mock from 'mockjs'
// const Random = Mock.Random


// export const userLogin = (data) => {

//   window.console.log(data);

// }
function param2Obj(url) {
  const url1 = url.split('&')
  let obj = {}
  url1.forEach(item => {
    let arr = item.split('=')
    obj[arr[0]] = arr[1]
  });
  return obj
}


const List = [{
  account: "admin",
  password: "admin"
}]

export const userLogin = (config) => {

  const {
    account,
    password
  } = param2Obj(config.body)
  let data = null
  if (account) {
    List.map(item => {
      if (item.account === account && item.password === password) {
        data = {
          code: 0,
          data: {
            msg: "登录成功",
            date: Date.now()
          }
        }
      } else {
        data = {
          code: 1,
          data: {
            msg: "账号密码错误"
          }
        }
      }
    })
  }

  return data

}