<template>
  <div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// 引入Home组件
// import Home from './pages/Home/Home';
// 引入底部Footer组件
import Footer from './components/Footer/Footer';

export default {
  name: 'App',
  // 注册组件
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
