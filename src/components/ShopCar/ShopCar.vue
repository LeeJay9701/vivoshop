<template>
  <div class="shopCar">
    <ShopCarHeader />
    <EmptyShopCar v-if="goods.goodCart.length===0" />

    <UnEmptyShopCar v-else />
  </div>
</template>
<script>


// 引入子组件
import ShopCarHeader from './ShopCarHeader/ShopCarHeader.vue';
import EmptyShopCar from './EmptyShopCar/EmptyShopCar.vue';
import UnEmptyShopCar from './UnEmptyShopCar/UnEmptyShopCar.vue';
import { mapState } from 'vuex'
export default {
  name: 'ShopCar',
  components: {
    ShopCarHeader,
    EmptyShopCar,
    UnEmptyShopCar
  },
  data () {
    return {
      // 是否空购物车
      isEmpty: true,
      shopCarGoods: []
    }
  },
  computed: {
    ...mapState(['goods'])
  },
  mounted () {

  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>