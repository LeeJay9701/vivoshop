<template>
  <div>
    <div class="main">
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 0' }">爆款产品</van-divider>
      <div class="main-box">
        <ul v-for="(xilie,index) in phones"
            :key="index">
          <!-- <img src="./images/iQOO Neo 855版.png"
             width="100%"> -->
          <!-- <li v-for="(item,index) in items" :key="index"> -->
          <li class="li_item"
              v-for="(phone,index) in xilie"
              :key="index"
              @click="toDetail(phone)">

            <div class="image">
              <img :src="phone.images" />
            </div>
            <p class="name">{{phone.name}}</p>
            <p class="nametwo">{{phone.info}}</p>
            <p class="Price">{{phone.price}}</p>

          </li>
          <!-- <li class="li_item">
            <div class="image">
              <img src="./images/iQOO Neo 855版.png">
            </div>
            <p class="name">iQOO Pro 8+128GB </p>
            <p class="nametwo">下单减300/骁龙855 Plus</p>
            <p class="Price">3198.00</p>

          </li>
          <li class="li_item">
            <div class="image">
              <img src="./images/iQOO Neo 855版.png">
            </div>
            <p class="name">iQOO Pro 8+128GB </p>
            <p class="nametwo">下单减300/骁龙855 Plus</p>
            <p class="Price">3198.00</p>

          </li>
          <li class="li_item">
            <div class="image">
              <img src="./images/iQOO Neo 855版.png">
            </div>
            <div class="li_bottom">
              <p class="name">iQOO Pro 8+128GB </p>
              <p class="nametwo">下单减300/骁龙855 Plus</p>
              <p class="Price">3198.00</p>
            </div>
          </li> -->
        </ul>
      </div>

    </div>
    <div class="main-content">
      <div class="main-content-box">
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 0' ,width:'100%'}">精品配件</van-divider>
        <ul v-for="(pj,index) in peijian"
            :key='index'>
          <!-- <img src="./images/iQOO Neo 855版.png"
             width="100%"> -->
          <!-- <li v-for="(item,index) in items" :key="index"> -->
          <li class="li_item"
              v-for="(pei,index) in pj"
              :key="index"
              @click="toDetail(pei)">

            <div class="image">
              <img :src="pei.images" />
            </div>
            <p class="name">{{pei.name}}</p>
            <p class="nametwo">{{pei.info}}</p>
            <p class="Price">{{pei.price}}</p>

          </li>
          <!-- <li class="li_item">
            <div class="image">
              <img src="./images/XE160原装耳机.webp">
            </div>
            <p class="name">iQOO Pro 8+128GB </p>
            <p class="nametwo">下单减300/骁龙855 Plus</p>
            <p class="Price">3198.00</p>

          </li>
          <li class="li_item">
            <div class="image">
              <img src="./images/XE160原装耳机.webp">
            </div>
            <p class="name">iQOO Pro 8+128GB </p>
            <p class="nametwo">下单减300/骁龙855 Plus</p>
            <p class="Price">3198.00</p>

          </li>
          <li class="li_item">
            <div class="image">
              <img src="./images/XE160原装耳机.webp">
            </div>
            <div class="li_bottom">
              <p class="name">iQOO Pro 8+128GB </p>
              <p class="nametwo">下单减300/骁龙855 Plus</p>
              <p class="Price">3198.00</p>
            </div>
          </li>
          <li class="li_item">
            <div class="image">
              <img src="./images/XE160原装耳机.webp">
            </div>
            <div class="li_bottom">
              <p class="name">iQOO Pro 8+128GB </p>
              <p class="nametwo">下单减300/骁龙855 Plus</p>
              <p class="Price">3198.00</p>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
import { reqGetGoods } from '../../../api/index'
export default {
  name: 'HomeProduct',
  data () {
    return {
      phones: [],
      peijian: []
    }
  },
  computed: {
    phone () {
      return this.$store.state.goods.goods.phone
    }
  },
  methods: {
    toDetail (value) {
      this.$router.push({
        name: `商品信息`,
        params: {
          data: value
        }
      })
    }
  },
  async mounted () {
    const goodAll = await reqGetGoods()
    if (goodAll) {
      // window.console.log(goodAll)
      this.$store.commit('goods/setGoods', goodAll)
    }
    const { peijian, phone } = this.$store.state.goods.goods
    this.phones = phone
    this.peijian = peijian
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.li_item
  display flex
  flex-direction column
  // justify-content space-around
  align-items center
  margin 0px 25px
  float left
  .image
    width 50%
    display flex
    justify-content center
    align-items center
    img
      height 5.6rem
      margin 27px 0px 0px
  .name
    font-size 0.9rem
    margin 10px 7px
  .nametwo
    font-size 0.7rem
  .Price
    font-size 0.7rem
    margin 30px 0px
    color #f3243d
</style>