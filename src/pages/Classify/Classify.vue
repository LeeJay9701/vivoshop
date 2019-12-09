<template>
  <div>
    <Header title="商品分类" />
    <van-tree-select height="90%"
                     :items="items"
                     :main-active-index.sync="activeIndex"
                     class="van-tree-select">
      <template slot="content">
        <h1>我是内容</h1>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
// 引入头部组件Header
import Header from '../../components/Header/Header';
import Vue from 'vue';
// 引入vant样式组件使用
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
export default {
  name: 'Classify',
  // 注册组件
  components: {
    Header
  },
  data () {
    return {
      activeIndex: 0,
      items: [
        { text: '全部' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' },
        { text: 'X系列' }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.van-tree-select
  margin-top 45px
</style>