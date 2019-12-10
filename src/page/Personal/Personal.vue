<template>
  <div>
    <van-row class="userLogin"
             @click="goLogin">
      <p>{{userName}}</p>
    </van-row>
    <van-row type="flex"
             justify="space-around"
             style="text-align:center">
      <van-col class="yuBox"
               span="12">
        <p>20</p>
        <p>余额</p>
      </van-col>
      <van-col class="yuBox"
               span="12">
        <p>20</p>
        <p>积分</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getCookie } from '../../util/cookie.js'
import { reqAutoLogin } from '../../api/index'

export default {
  name: '',
  data () {
    return {
      userName: '未登录',
      jifeng: '',
      moneny: 0,
      isLogin: false
    };
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    }
  },
  async mounted () {
    await reqAutoLogin()
    const loginUser = getCookie('userName')
    if (loginUser) {
      this.isLogin = true
      this.userName = loginUser
    }
  }

}
</script>
<style lang="stylus" scoped>
.userLogin
  width 100%
  height 100px
  text-align center
  line-height 100px
  margin-bottom 10px
  border-bottom 1px solid #ccc
.yuBox
  border 1px solid #ccc
</style>