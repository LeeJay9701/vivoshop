<template>
  <div>
    <van-submit-bar :price="totalPrice"
                    :loading="loading"
                    label="订单金额"
                    text-align="left"
                    button-text="确认付款"
                    @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  name: 'SettlementFooter',
  data() {
    return {
      loading: false,
      totalPrice: 0
    }
  },
  methods: {
    onSubmit() {

    }
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.van-submit-bar__text
  margin-left 10px
  text-align left
  font-size 16px
  font-weight bold
  .van-submit-bar__price
    margin-left 5px
</style>