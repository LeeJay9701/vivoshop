<template>
  <div class="about">
    <!-- 登录设计 -->
    <van-row type="flex"
             justify="center"
             align="center"
             class="header"
             @click="goLogin"
             style="height:150px">
      <van-col v-if="!isLogin">请先登录</van-col>
      <van-col v-else>
        <van-image round
                   width="7rem"
                   height="7rem"
                   src="https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg" />
        <h3>{{userName}}</h3>
      </van-col>
    </van-row>
    <!-- 优惠券、鼓励金、积分设计 -->
    <van-row class="coupon">
      <van-col span="8">
        <b>{{isLogin?2:''}}</b>
        <p>优惠券</p>
      </van-col>
      <van-col span="8">
        <b>{{isLogin?40:''}}</b>
        <p>换鼓励金</p>
      </van-col>
      <van-col span="8">
        <b>{{isLogin?88:''}}</b>
        <p>积分</p>
      </van-col>
    </van-row>
    <!-- 我的订单设计 -->
    <van-cell-group border>
      <van-cell value="全部"
                to="/shopcart">
        <template slot="title">
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 待付款、待收货设计 -->
    <van-grid :border="border"
              class="order">
      <van-grid-item v-for="(item,index) in srcs"
                     :key="index"
                     :to="'/shopcart/'+index"
                     class="van-grid-item">
        <van-icon :name="item.src" />
        <p>{{item.title}}</p>
      </van-grid-item>
    </van-grid>
    <!-- 我的收藏、收货地址设计 -->
    <van-cell-group border>
      <van-cell title="我的收藏"
                icon="star-o"
                is-link
                to="/"></van-cell>
      <van-cell title="我的收货地址"
                icon="records"
                is-link
                to="/my-address"></van-cell>
      <van-cell title="我的购物车"
                icon="shopping-cart-o"
                is-link
                to="/shopcart"></van-cell>
      <van-cell title="扫码分享"
                icon="qr"
                is-link
                @click="toggleShow"></van-cell>
      <van-dialog v-model="show"
                  title="扫描二维码"
                  confirm-button-text="确认">
        <!-- <van-image :src="qrcode" /> -->
      </van-dialog>
      <van-cell title="关于我们"
                icon="info-o"
                is-link
                to="http://www.baidu.com"></van-cell>
    </van-cell-group>
  </div>
</template>

// <script>
// import Vue from 'vue';
// import { getCookie } from '../../util/cookie.js'
import { Toast } from 'vant'
import { reqAutoLogin } from '../../api/index'
export default {
  name: '',
  data () {
    return {
      userName: '未登录',
      jifeng: '',
      moneny: 0,
      isLogin: false,
      loading: true,
      border: false,
      srcs: [
        {
          title: "待付款",
          src: "send-gift-o"
        },
        {
          title: "待收货",
          src: "logistics"
        },
        {
          title: "待评价",
          src: "flower-o"
        },
        {
          title: "退货/换货",
          src: "replay"
        }
      ],
      show: false
    };
  },
  methods: {
    goLogin () {
      if (!this.isLogin) {
        this.$router.push('/login')
      }
    },
    loginOut () {
      this.$store.commit('user/loginOut')
      this.userName = '未登录'
      this.isLogin = false
    },
    toggleShow () {
      Toast('暂时没有')
    }
  },
  async mounted () {
    if (!this.$store.state.user.loginState.loginIn) {
      const result = await reqAutoLogin()
      if (result.status == 0) {
        window.console.log(result)
        this.$store.commit('user/loginIn', result.data)
      }
    }
    const { userName, loginIn } = this.$store.state.user.loginState
    if (loginIn) {
      this.userName = userName
      this.isLogin = loginIn
    }
  }

}
</script>
<style lang="stylus" scoped>
.about
  .header
    height 80%
    background-image linear-gradient(to bottom, #1989faa1, #1989fa)
    .van-col
      text-align center
  .van-cell__value
    color #ee0a24
  .order
    padding 10px
  .van-cell__left-icon
    font-size 20px
  .van-grid-item
    .van-grid-item__icon
      font-size 2.8rem
      margin-bottom 0.8rem
  .van-dialog__content
    // padding 1rem 0
    text-align center
  .coupon
    text-align center
    border-bottom 5px solid rgb(237, 237, 237)
    padding 20px 0
    .van-col--8
      display flex
      width 33.33333333%
      justify-content center
    p
      line-height 2rem
      margin-left -21px
    .van-grid-item
      padding 0px 0px
</style>