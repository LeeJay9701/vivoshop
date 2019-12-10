<template>
  <div class="shopCar">
    <ShoppingCartHeader />
    <EmptyShoppingCart v-if="isEmpty" />
    <UnEmptyShoppingCart :changeEmptyState="changeEmptyState"
                         v-else />
  </div>
</template>
<script>


// 引入子组件
import ShoppingCartHeader from '../../components/ShoppingCart/ShoppingCartHeader/ShoppingCartHeader.vue';
import EmptyShoppingCart from '../../components/ShoppingCart/EmptyShoppingCart/EmptyShoppingCart.vue';
import UnEmptyShoppingCart from '../../components/ShoppingCart/UnEmptyShoppingCart/UnEmptyShoppingCart.vue';

export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartHeader,
    EmptyShoppingCart,
    UnEmptyShoppingCart
  },
  data() {
    return {
      // 是否空购物车
      isEmpty: false,
      shopCarGoods: []
    }
  },
  methods: {
    changeEmptyState() {
      this.isEmpty = !this.isEmpty
    }
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>