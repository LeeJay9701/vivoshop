<template>
  <div>
    <van-swipe :autoplay="3000"
               indicator-color="#e8257d"
               style="display:'flex'">
      <van-swipe-item class="van-swipe-item"><img src="./images/商品详情1.webp"
             alt=""
             srcset=""></van-swipe-item>
      <van-swipe-item class="van-swipe-item"><img src="./images/商品详情2.webp"
             alt=""
             srcset=""></van-swipe-item>
      <van-swipe-item class="van-swipe-item"><img src="./images/商品详情3.webp"
             alt=""
             srcset=""></van-swipe-item>
      <van-swipe-item class="van-swipe-item"><img src="./images/商品详情4.webp"
             alt=""
             srcset=""></van-swipe-item>
    </van-swipe>
    <div class="detail">
      <h2>{{phoneData.name}}</h2>
      <div class="content">
        <span>{{phoneData.detailHeader}}</span>
        {{phoneData.detailContent}}
      </div>
      <p>￥{{phoneData.price}}</p>
    </div>
    <div class="number">
      <van-row type="flex">
        购买数量:
        <van-stepper v-model="shopNum"
                     @change="setNumber" />
      </van-row>
    </div>
    <div class="support">
      <van-cell title="单元格"
                color="red"
                is-link
                @click="showPop">
        <template slot="title">
          <van-icon name="passed" />
          <span class="custom-title">支持花呗分期</span>
          <van-icon name="passed" />
          <span class="custom-title">支持以旧换新</span>
        </template>
      </van-cell>
      <van-popup v-model="show"
                 position="bottom"
                 :style="{ height: '40%' ,padding:'0px 10px'}"
                 closeable>
        <h3>服务说明</h3>
        <div class="server-support">
          <div class="server-1">
            <van-icon name="passed" />
            <span>支持花呗分期</span>
            <p>商品支持花呗分期</p>
          </div>
          <div class="server-2">
            <van-icon name="passed" />
            <span>可以使用换新鼓励金</span>
            <p>
              换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。
              <a href="#">现在换机</a>
            </p>
          </div>
        </div>
        <div class="server-btn">
          <van-button color="#00acff"
                      round
                      size="large"
                      @click="close">关闭</van-button>
        </div>
      </van-popup>
    </div>
    <div class="parameter">
      <van-tabs v-model="active"
                line-width="50%">
        <van-tab title="图文详情">
          <van-row>
            <img src="./images/vivo-图文详情3.jpg"
                 alt="">
            <img src="./images/vivo-图文详情2.jpg"
                 alt="">
            <img src="./images/vivo-图文详情1.jpg"
                 alt="">

          </van-row>
        </van-tab>
        <van-tab title="参数">
          <div v-html="detail.homePeizhi"
               class="peizhi"></div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o"
                             text="客服" />
      <van-goods-action-icon icon="cart-o"
                             text="购物车"
                             info="5" />
      <van-goods-action-icon icon="shop-o"
                             text="店铺"
                             info="12" />
      <van-goods-action-button type="warning"
                               text="加入购物车"
                               @click="addShopCart(phoneData,shopNum)" />
      <van-goods-action-button type="danger"
                               text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import { Toast } from 'vant';
// import Vue from 'vue';
// 引入Stepper 步进器方法
// import { Stepper, Row, cell, popup, button, Tab, Tabs, image, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
// Vue.use(Stepper).use(Row).use(cell).use(popup).use(button).use(Tab).use(Tabs).use(image).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
export default {
  name: 'ProductDetail',
  data () {
    return {
      detail: {},
      show: false,
      active: 0,
      goodsInfo: {},
      phoneData: {},
      shopNum: 0
    };
  },
  methods: {
    showPop () {
      this.show = true;
    },
    close () {
      this.show = false;
    },
    getRouterData () {
      this.phoneData = this.$route.params.data
    },
    addShopCart (goods, number) {
      Toast.success("添加成功")
      this.$store.commit('goods/setGoodCart', { goods, number })
      this.shopNum = 0
    },
    setNumber (v) {
      this.shopNum = v
    }

  },
  mounted () {
    this.getRouterData()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.van-swipe-item
  display flex
  justify-content center
.detail
  padding 0.8rem
  h2
    font-weight 400
    font-size 1.2rem
  p
    color red
    font-size 1.6rem
    margin-top 3px
  .content
    text-align justify
    span
      margin-left -0.6rem
      color #ff4b3d
.number
  border-top 1px solid #ccc
  border-bottom 1px solid #ccc
  padding 1rem 1.25rem
  line-height 2.7rem
  font-size 0.9rem
  button
    border 1px solid #b2b2b2
    width 2.3rem
    height 2.7rem
    margin-left -10px
  .van-stepper__input
    margin 0
    border 1px solid #b2b2b2
    width 3.2rem
    height 2.7rem
    margin-left -1px
  .van-stepper
    margin-left 2rem
.support
  padding 0px 10px
  border-bottom 10px solid #f4f4f4
  .van-icon
    vertical-align middle
    margin-right 0.3rem
  .van-icon-passed
    color #0098df
  .custom-title
    margin-right 0.5rem
  .server-suppor
    width 85%
    margin 20px auto
    font-size 1.4rem
    p
      color #666
      padding-left 0.8rem
      margin-top 0.5rem
      line-height 2.1rem
      a
        color #00acff
    .server-2
      margin-top 1.5rem
  .server-btn
    .van-button--large
      width 95%
      height 2.7rem
      line-height 2.7rem
      padding 0px 10px
.parameter
  img
    width 100%
  .peizhi
    width 90%
    margin auto
    h4
      line-height 6rem
      font-size 1.8rem
      font-weight 400
      border-bottom 1px solid #ccc
    span
      color #888
      margin-top 0.8rem
      display block
    p
      color #888
      font-size 1.2rem
      line-height 1.7rem
    > div
      margin 1.5rem 0
    ::after
      content ''
      display table
</style>
