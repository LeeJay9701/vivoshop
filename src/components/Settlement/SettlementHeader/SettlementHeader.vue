<template>
  <van-nav-bar title="确认订单"
               left-text="返回"
               left-arrow
               fixed
               @click-left="onClickLeft">
  </van-nav-bar>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  name: 'SettlementHeader',
  methods: {
    // 导航栏左侧点击事件
    onClickLeft() {
      // 回退
      this.$router.back()
    }
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.van-nav-bar
  .van-nav-bar__left
    .van-nav-bar__text
      &:active
        background-color rgba(0, 0, 0, 0)
</style>