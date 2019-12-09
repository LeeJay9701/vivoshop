<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o"
                     @click="goto('/home')">首页</van-tabbar-item>
    <van-tabbar-item icon="search"
                     @click="goto('/classify')">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o"
                     @click="goto('/news')">社区</van-tabbar-item>
    <van-tabbar-item icon="setting-o"
                     @click="goto('/personal')">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from 'vue';
// 引入vant UI框架，引入其中Tabbar标签栏
import { Tabbar, TabbarItem } from 'vant';
// 引入组件样式文件
// 这里使用了按需引入，所以不用每个都引入文件了
// import 'vant/lib/index.css';
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: 'Footer',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goto (path) {
      // 判断,如果当前路由组件对应的path(地址)和传入进来的地址不一致,则进行替换并跳转
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
      window.console.log(this.$route);

    }
  }
}
</script>
<style lang="stylus" scoped></style>