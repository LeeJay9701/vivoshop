<template>
  <div class="emptyShopCar">
    <img class="emptyImg"
         src="../../../assets/uploads/gouwuche.png"
         alt="购物车">
    <h2 class="emptyText">购物车是空的哦，快去购物吧！</h2>
    <router-link to="/">去逛逛吧</router-link>
  </div>
</template>
<script>

export default {
  name: 'EmptyShopCar',
  props: ['shopCart']

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.emptyShopCar
  display flex
  flex-direction column
  text-align center
  align-items center
  padding 50px
  margin-top 46px
  .emptyImg
    width 200px
    height 200px
  .emptyText
    font-size 22px
    color #333
    margin 20px 0
</style>