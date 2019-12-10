<template>
  <div>
    <van-nav-bar :title="titlePath"
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Header',
  data () {
    return {
    };
  },
  computed: {
    //获取标题
    titlePath () {
      return this.$route.name
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回');
    },
    onClickRight () {
      Toast('按钮');
    }
  }
}
</script>

<style  scoped>
</style>