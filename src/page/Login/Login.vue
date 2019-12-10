<template>
  <div class="login-box">
    <van-icon name="close"
              @click="$router.back()" />
    <form class="box"
          @submit.prevent="submitForm">
      <h1>{{isRegister?'注册':'登录'}}</h1>
      <input type="text"
             name="name"
             v-if="isRegister"
             placeholder="请输入用户名"
             v-model="name"
             v-validate="'required'">
      <span style="color:red">{{ errors.first('name') }}</span>
      <input type="text"
             name="account"
             placeholder="请输入账号"
             v-model="account"
             v-validate="'required'">
      <span style="color:red">{{ errors.first('account') }}</span>
      <input type="password"
             name="password"
             v-model="password"
             placeholder="请输入密码"
             v-validate="'required'">
      <span style="color:red">{{ errors.first('password') }}</span>
      <input type="password"
             v-if="isRegister"
             name="rePassword"
             v-model="rePassword"
             placeholder="请确认密码"
             v-validate="{'required': 'true'}">
      <span style="color:red">{{ errors.first('rePassword') }}</span>

      <input type="submit"
             name=""
             :value="isRegister?'注册':'登录'">
      <button class="isRegister"
              @click.prevent="isRegister=!isRegister">{{isRegister?'已有账号？去登录':'没有账号？去注册'}}</button>
    </form>
  </div>
</template>

<script>
import { reqLogin, reqRegister } from '../../api/index.js'
import { Notify } from 'vant';
// 表单验证
// import { Validator } from 'vee-validate'
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      rePassword: '',
      name: '',
      isRegister: false
    };
  },
  methods: {
    async submitForm () {
      if (this.isRegister) {
        const { account, password, rePassword, name } = this
        if (password !== rePassword) {
          Notify({ type: 'warning', message: "请重新确认密码" })
          this.rePassword = ''
          return
        }
        if (this.$validator.validateAll(['account', 'password', 'rePassword', 'name'])) {
          const result = await reqRegister({ account, password, rePassword, name })
          if (result.status === 0) {
            // 注册成功
            Notify(result.msg)
            window.console.log(2)
            // this.$router.back()
          } else {
            // 登录失败
            Notify(result.msg)
          }
        }
      } else {
        const { account, password } = this
        // 表单验证成功？
        if (await this.$validator.validateAll(['account', 'password'])) {
          const result = await reqLogin({ account, password })
          if (result.status === 0) {
            // 登录成功
            Notify({ type: 'success', message: result.msg });
            window.console.log(1)
            this.$router.back()
          } else {
            // 登录失败
            Notify({ type: 'warning', message: result.msg })
            this.password = ''
          }
        }
      }
    }
  }
}
</script>

<style  scoped>
.login-box {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #5890c7;
}

.box {
  width: 100%;
  height: 530px;
  padding: 40px 0;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* border: 1px solid rgb(255, 115, 0); */
  border-radius: 10px;
  background-color: #3d3c3c;
  text-align: center;
  border-radius: 10px;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgb(214, 214, 214);
  font-size: 16px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgb(214, 214, 214);
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgb(214, 214, 214);
  font-size: 16px;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(255, 255, 255);
  border-radius: 24px;
  transition: 0.25s;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 280px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}
.login-box .isRegister {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(255, 255, 255);
  border-radius: 24px;
  transition: 0.25s;
}
</style>