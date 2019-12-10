<template>
  <div>
    <Header v-show="$route.meta.isShowFooter" />
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
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
  }
}
</script>

<style>
</style>
