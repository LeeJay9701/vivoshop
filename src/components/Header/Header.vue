<template>
  <van-nav-bar class="titleHeader"
               :title="titlePath"
               @click-left="onClickLeft"
               @click-right="onClickRight"
               style="color:white">
    <van-icon name="arrow-left"
              slot="left" />
  </van-nav-bar>

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
      // Toast('返回');
      this.$router.back()
    },
    onClickRight () {
      Toast('按钮');
    }
  }
}
</script>

<style  scoped>
.titleHeader {
  background-color: rgb(29, 28, 28);
}
</style>