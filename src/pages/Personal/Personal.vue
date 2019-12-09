<template>
  <div>
    <Header title="个人中心"
            class="HeaderMargin" />
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>
<script>
// 引入头部组件Header
import Header from '../../components/Header/Header';
import Vue from 'vue';
// 引入vant框架Card方法
import { Card, Row, Col } from 'vant';
import 'vant/lib/index.css';

Vue.use(Card).use(Row).use(Col);
export default {
  name: 'Personal',
  components: {
    Header
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>