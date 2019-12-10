<template>
  <div>
    <div class="main">
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">爆款产品</van-divider>
      <div class="main-box">
        <ul>
          <!-- <img src="./images/iQOO Neo 855版.png"
             width="100%"> -->
          <!-- <li v-for="(item,index) in items" :key="index"> -->
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
          </li>
        </ul>
      </div>

    </div>
    <div class="main">
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">精品配件</van-divider>
      <div class="main-box">
        <ul>
          <!-- <img src="./images/iQOO Neo 855版.png"
             width="100%"> -->
          <!-- <li v-for="(item,index) in items" :key="index"> -->
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
        </ul>
      </div>

    </div>
  </div>

</template>
<script>
import Vue from 'vue';
// 引入vant框架中的Divider 分割线
import { Divider, Lazyload } from 'vant';

Vue.use(Divider).use(Lazyload, 2000);
export default {
  name: 'HomeProduct'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.li_item
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0px 10px
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