<template>
  <van-nav-bar title="购物车"
               left-text="返回"
               right-text="管理"
               left-arrow
               fixed
               @click-left="onClickLeft"
               @click-right="onClickRight">
  </van-nav-bar>
</template>
<script>
export default {
  name: 'ShopCarHeader',
  data() {
    return {

    }
  },
  methods: {
    // 导航栏左侧点击事件
    onClickLeft() {
      // 回退
      this.$router.back()
    },
    // 导航栏右侧点击事件
    onClickRight() {
    },
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.van-nav-bar
  .van-nav-bar__right
    .van-nav-bar__text
      &:active
        background-color rgba(0, 0, 0, 0)
  .van-nav-bar__left
    .van-nav-bar__text
      &:active
        background-color rgba(0, 0, 0, 0)
</style>