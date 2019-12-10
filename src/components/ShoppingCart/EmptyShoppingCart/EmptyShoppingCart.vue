<template>
  <div class="emptyShoppingCart">
    <img class="emptyImg"
         src="../../../assets/uploads/gouwuche.png"
         alt="购物车">
    <h2 class="emptyText">购物车竟然是空的</h2>
    <span>再忙，也要记得买点什么犒赏自己~</span>
    <van-button class="emptyBtn"
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
                to="/classify">去逛逛</van-button>
  </div>
</template>
<script>

export default {
  name: 'EmptyShoppingCart'
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.emptyShoppingCart
  display flex
  flex-direction column
  text-align center
  align-items center
  padding 50px
  margin-top 60px
  .emptyImg
    width 100px
    height 100px
  .emptyText
    font-size 22px
    color #333
    margin 40px 0
  span
    color #333
    font-size 14px
  .emptyBtn
    width 180px
    height 40px
    border-radius 999px
    margin-top 20px
    line-height 40px
    span
      color #fff
</style>