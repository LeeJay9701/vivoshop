<template>
  <div class="shopCar">
    <ShopCarHeader />
    <EmptyShopCar v-if="isEmpty" />
    <UnEmptyShopCar v-else />
  </div>
</template>
<script>


// 引入子组件
import ShopCarHeader from './ShopCarHeader/ShopCarHeader.vue';
import EmptyShopCar from './EmptyShopCar/EmptyShopCar.vue';
import UnEmptyShopCar from './UnEmptyShopCar/UnEmptyShopCar.vue';

export default {
  name: 'ShopCar',
  components: {
    ShopCarHeader,
    EmptyShopCar,
    UnEmptyShopCar
  },
  data() {
    return {
      // 是否空购物车
      isEmpty: false,
      shopCarGoods: []
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>