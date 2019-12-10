<template>
  <div class="homeWith">
    <div class="official"></div>
    <div class="home-swiper ">
      <!-- <van-swipe :autoplay="3000"
                 indicator-color="white">
        <div v-for="(swiperimg,index) in swiperImgArr.swipeImages"
             :key="index">
          <van-swipe-item>
            <img :src="swiperimg.img"
                 alt="">
          </van-swipe-item> -->
    </div>
  </div>
</template>
<script>
// 引入ShopList组件
// import ShopList from "../../components/ShopList/ShopList.vue";
// import Header from '../../components/Header/Header';
// import { reqSwiperImgArr } from '../../api/index'
export default {
  name: 'Home',
  // 注册组件使用
  data () {
    return {
      swiperImgArr: []
    }
  },
  components: {
    // ShopList
  },
  // 界面加载之后
  async mounted () {
    this.$store.dispatch('user/authUser')
    // const swiperImg = await reqSwiperImgArr()
    // window.console.log(swiperImg.swipeImages)
    // this.swiperImgArr = swiperImg

    // this.$nextTick(() => {
    //   new Swiper('.swiper-container', {
    //     loop: true, // 循环模式选项
    //     autoplay: {
    //       delay: 1000,
    //        stopOnLastSlide: false,
    //       disableOnInteraction: true,
    //     },
    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //   })
    // })
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
  /* margin-top: 2.75rem; */
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