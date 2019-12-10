<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
import { reqAutoLogin, reqGetGoods } from './api/index.js'
export default {
  name: 'app',
  data () {
    return {
      isNeedFooter: true
    }
  },

  components: {
    Footer,
    Header
  },
  async mounted () {
    const result = await reqAutoLogin()
    if (result.status == 0) {
      window.console.log(result)
      this.$store.commit('user/loginIn', result.data)
    }
    const goodAll = await reqGetGoods()
    if (goodAll) {
      // window.console.log(goodAll)
      this.$store.commit('goods/setGoods', goodAll)
    }
  }
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
