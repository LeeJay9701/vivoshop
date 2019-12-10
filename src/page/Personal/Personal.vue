<template>
  <div>
    <van-row class="userLogin"
             @click="goLogin">
      <p>{{userName}}</p>
    </van-row>
    <van-divider content-position="left">资产</van-divider>
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
    <van-divider content-position="left">订单</van-divider>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 4"
                     :key="value"
                     icon="photo-o"
                     text="文字" />
    </van-grid>
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
    const loginUser = getCookie('userName')
    if (loginUser) {
      this.isLogin = true
      this.userName = loginUser
      window.console.log(this.userName)
    }
    await reqAutoLogin()
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
  background linear-gradient(left bottom, #4a90e2, #86b0ed)
.yuBox
  border 1px solid #ccc
</style>