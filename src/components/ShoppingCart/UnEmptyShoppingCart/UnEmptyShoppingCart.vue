<template>
  <div class="unEmptyShoppingCart">
    <van-checkbox-group v-model="result"
                        @change="checkBoxChange"
                        ref="checkboxGroup">
      <van-card :num="item.num"
                :price="item.price"
                :title="item.name"
                v-for="(item) in shopCarGoods"
                :key="item.id"
                :thumb="item.images">
        <div slot="tags">
          <van-icon name="delete"
                    class="delIcon"
                    size="1.5em"
                    @click="handleDel(item.id)" />
          <van-tag plain
                   type="danger">
            <van-checkbox :name="item.id"></van-checkbox>
          </van-tag>
        </div>
        <div slot="footer">
          <van-stepper />
        </div>
      </van-card>
    </van-checkbox-group>
    <van-submit-bar :price="totalPrice"
                    :loading="loading"
                    button-text="结算"
                    @submit="onSubmit">
      <van-checkbox v-model="allChecked"
                    @click="toggleAll">全选</van-checkbox>
    </van-submit-bar>
  </div>

</template>
<script>
import Vue from 'vue';
import axios from 'axios';

import { NavBar, SubmitBar, Checkbox, CheckboxGroup, Card, Tag, Button, Stepper, Icon, Toast } from 'vant';
Vue.use(NavBar);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Toast);

export default {
  name: 'UnEmptyShoppingCart',
  props: ['changeEmptyState'],
  data() {
    return {
      // 全选框是否选中
      allChecked: false,
      // 加载中动画
      loading: true,
      // 已选中商品
      result: [],
      shopCarGoods: [],
      // 初始化总额
      totalPrice: 0
    }
  },
  async created() {
    const result1 = await axios.get('/api/info')
    this.shopCarGoods = result1.data.goods
    this.shopCarGoods.map(item => item.num = 1);
    this.loading = false
    // const result2 = await axios.get('/api/goods')
    // console.log(result2.data)
    // const result3 = await axios.get('/api/peijian')
    // console.log(result3)
    // const result4 = await axios.get('/api/all')
    // console.log(result4)
    // const result5 = await axios.get('/api/news')
    // console.log(result5)
  },
  methods: {
    // 结算点击事件
    onSubmit() {
      // 如果没有选中商品
      if (this.result.length <= 0) {
        return Toast('请选择要购买的商品')
      }
      this.$router.push('/settlement')
    },
    // 删除图标点击事件
    handleDel(id) {
      Toast.loading({
        forbidClick: true,
        loadingType: 'spinner',
        onOpened: async () => {
          this.shopCarGoods = await this.shopCarGoods.filter(item => id !== item.id)
          // 清除提示框
          Toast.clear()
        }
      });
    },
    toggleAll() {
      // this.allChecked = !this.allChecked;
      if (this.result.length >= 0 && this.result.length < 6) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    // 复选框点击事件
    checkBoxChange() {
      if (this.result.length === this.shopCarGoods.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
    }
  },
  watch: {
    // 深度监视result，当选中的内容发生变化，总额也要发生变化
    result: {
      deep: true,
      handler() {
        let totalPrice = 0;
        // 通过result中存储的id值找到对应的产品信息
        this.result.map(resultItem => {
          this.shopCarGoods.map(goodsItem => {
            if (resultItem === goodsItem.id) {
              totalPrice += goodsItem.price * goodsItem.num * 100
            }
          })
        }, 0)
        this.totalPrice = totalPrice
      }
    },
    // 深度监视shopCarGoods，当shopCarGoods为空时，将空购物车的页面展示出来
    shopCarGoods: {
      deep: true,
      handler() {
        if (this.shopCarGoods.length <= 0) {
          this.$props.changeEmptyState()
        }
      }
    }
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.unEmptyShoppingCart
  margin-top 46px
  .van-checkbox-group
    .van-card
      padding-left 50px
      .van-card__header
        .van-card__content
          // 删除图标
          .delIcon
            position absolute
            right 0
            top 0
          .van-card__title
            font-size 15px
          .van-card__bottom
            line-height 40px
            .van-card__price
              font-size 14px
            .van-card__num
              font-size 14px
          // 复选框小圆点
          .van-tag
            position absolute
            left -135px
            top 30px
            &.van-tag--danger
              color rgba(0, 0, 0, 0)
              background-color rgba(0, 0, 0, 0)
  .van-submit-bar
    .van-submit-bar__bar
      // 全选
      .van-checkbox
        margin-left 10px
</style>