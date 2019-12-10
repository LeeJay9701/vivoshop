<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
                       to='/'
                       name='home'>主页</van-tabbar-item>
      <van-tabbar-item icon="search"
                       to='/category'
                       name="category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to='/dynamic'
                       name="dynamic">动态</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       to='/personal'>个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 'home'
    };
  },
  methods: {}
}
</script>

<style  scoped>
</style>