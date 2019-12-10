<template>
  <div class="homeWith">
    <Header title="vivo" />
    <div class="official"></div>
    <div class="swiper-container home-swiper ">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../static/img/vivo_bj_01.jpg"
               alt="小米手机"></div>
        <div class="swiper-slide"><img src="../../static/img/vivo_bj_02.jpg"
               alt="小米手机"></div>
        <div class="swiper-slide"><img src="../../static/img/vivo_bj_03.jpg"
               alt="小米手机"></div>
        <div class="swiper-slide"><img src="../../static/img/vivo_bj_04.jpg"
               alt="小米手机"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商品导航栏 -->
    <ShopList />
    <HomeProduct />
  </div>
</template>
<script>
// 引入Swiper
import Swiper from 'swiper';
// 引入Swiper样式文件
// import 'swiper/dist/css/swiper.css'
// 引入的包一样，这里我们引入的需要把dist删了
import 'swiper/css/swiper.css'
// 引入ShopList组件
import ShopList from "../../components/ShopList/ShopList";
import Header from '../../components/Header/Header';
// 引入HomeProduct产品组件文件
import HomeProduct from './HomeProduct/HomeProduct';

export default {
  name: 'Home',
  // 注册组件使用
  components: {
    ShopList,
    Header,
    HomeProduct
  },
  // 界面加载之后
  mounted () {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        // 操作swiper之后，是否禁止autoplay
        disableOnInteraction: false,
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 切换动画
      effect : 'fade'
    })
  }
}
</script>
<style scoped>
.homeWith {
  width: 100%;
}
.Home {
  border-bottom: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
}

.Homeheader i {
  font-size: 0.55rem;
  color: white;
  text-align: center;
  display: block;
}

.Homeheader {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 0.35rem;
  /* padding-left: 0.3rem; */
  background: black;
}

.official {
  width: 100%;
  height: 2rem;
  background: white;
  margin-top: 2.75rem;
  background: url("../../static/img/official.png") no-repeat;
  background-size: 100% 100%;
}
.home-swiper {
  width: 100%;
  margin-top: 1px;
  height: 15rem;
}

.home-swiper img {
  width: 100%;
}
</style>