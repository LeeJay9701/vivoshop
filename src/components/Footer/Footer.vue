<template>
  <div>
    <van-tabbar v-model="activePath">
      <van-tabbar-item icon="home-o"
                       to='/home'
                       name='/home'>主页</van-tabbar-item>
      <van-tabbar-item icon="search"
                       to='/category'
                       name="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to='/dynamic'
                       name="dynamic">动态</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       name="/personal"
                       to='/personal'>个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    };
  },
  computed: {
    activePath: {
      get () {
        return this.$route.path
      },
      set () { }
    }
  },
  methods: {}
}
</script>

<style  scoped>
</style>