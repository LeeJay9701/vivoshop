<template>
  <div class="box">
    <div class="head">
      <ul>
        <li>
          <a href="https://bbs.vivo.com.cn/index.php?mobile=2">精选</a>
        </li>
        <li>
          <a href="https://bbs.vivo.com.cn/forum.php?forumlist=1mobile=2">V摄影</a>
        </li>
        <li>
          <a href="https://bbs.vivo.com.cn/vpai.php?mobile=2">版块</a>
        </li>
        <li>
          <a href="https://bbs.vivo.com.cn/vdigest.php?mobile=2">V精华</a>
        </li>
      </ul>
    </div>
    <van-swipe :autoplay="3000"
               indicator-color="white"
               class="van-swipe">
      <van-swipe-item>
        <img src="../../assets/uploads/ia_100000154.jpg"
             alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/uploads/ia_100000155.jpg"
             alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/uploads/ia_100000156.jpg"
             alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/uploads/ia_100000157.jpg"
             alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="hot-sale"
                     text="vivoX30" />
      <van-grid-item icon="new"
                     text="vivo22x" />
      <van-grid-item icon="new-arrival"
                     text="vivo23x" />
      <van-grid-item icon="goods-collect"
                     text="vivo24x" />
    </van-grid>

    <h3>每日新聞</h3>
    <div class="van-col van-col--24">
      <h2>vivoX21全面屏手机五大个热门问题详解</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/211307l0sr8tqrpststut0.jpg"
             class="van-image__img" />
      </div>
      <p>X21给人的第一感觉是比X20更加惊艳的，6.28英寸的大屏幕，19:9的屏幕比例，屏占比达到了90.3%，全面屏视野比X20更加广阔。</p>
      <p>发布日期：2018-4-22</p>
      <van-divider />
    </div>

    <div class="van-col van-col--24">
      <h2>vivo X21屏幕指纹版，黑科技多到爆</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/12/190408w8123imwv3w22z4t.jpg"
             class="van-image__img" />
      </div>
      <p>vivo X21屏幕指纹版已经是vivo第二款屏幕指纹手机'简称X21UD'，也是目前全世界在售手机中唯一一款屏幕指纹解锁手机。</p>
      <p>发布日期：2018-4-22</p>
      <van-divider />
    </div>
    <div class="van-col van-col--24">
      <h2>vivo X21冰钻黑图赏，黑色也要唱着高调</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/23/175957thm7fz3m6am6l7fz.jpg"
             class="van-image__img" />
      </div>
      <p>X21带来了3D玻璃机身，这种质感过渡，在黑色版本上基本不会视觉残留，就像黑的看不见接缝，看不到瑕疵。</p>
      <p>发布日期：2018-4-22</p>
      <van-divider />
    </div>
    <div class="van-col van-col--24">
      <h2>你的女朋友vivo X21，从内到外都是美</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/210355fmpl8qqnu737qlz9.jpg"
             class="van-image__img" />
      </div>
      <p>X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。这项科技目前全球只有vivo拥有，没有之一。</p>
      <p>发布日期：2018-4-22</p>
      <van-divider />
    </div>
    <div class="van-col van-col--24">
      <h2>你的女朋友vivo X21，从内到外都是美</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201912/08/210424o5wk67o2edwme5p7.jpg"
             class="van-image__img" />
      </div>
      <p>X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。这项科技目前全球只有vivo拥有，没有之一。</p>
      <p>发布日期：2019-12-22</p>
      <van-divider />
    </div>
    <div class="van-col van-col--24">
      <h2>vivo专注于智能手机领域的国际化品牌</h2>
      <div class="van-image">
        <img src="https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201912/09/211719e37bukgpgfep5kek.jpg"
             class="van-image__img" />
      </div>
      <p>X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。</p>
      <p>发布日期：2019-12-22</p>
      <van-divider />
      <p></p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// 引入vant框架解构赋值的方法把Swipe, SwipeItem解构出来
import { Swipe, SwipeItem } from "vant";
// 引入vant样式文件
// import "vant/lib/index.css";
Vue.use(Swipe).use(SwipeItem);
//card卡片vivo价格
import { Card } from "vant";
// import "vant/lib/index.css";
Vue.use(Card);
//小图标
import { Grid, GridItem } from "vant";
// import "vant/lib/index.css";
Vue.use(Grid).use(GridItem);
//Divider 分割线
import { Divider } from 'vant';
// import "vant/lib/index.css";
Vue.use(Divider);
export default {
  name: "News",
  // 注册组价使用
  // components: {
  //   Header
  // }
};
</script>
<style>
.van-swipe {
  height: 100%;
}
.van-swipe img {
  height: 200px;
}
.box ul {
  display: flex;
  text-align: center;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  background: #fdfefe;
  /* padding-top: 38px; */
  /* position: fixed;
  top: 0;
  z-index: 10; */
}
.box ul li {
  flex: auto;
  line-height: 40px;
  font-size: 15px;
}
.box ul li a {
  color: #474849;
}
.digests {
  padding: 15px 10px;
}
.wb {
  padding: 15px 10px;
}
.title {
  display: block;
  height: 26px;
  overflow: hidden;
  color: #42566c;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: normal;
}
.van-col {
  padding: 0 2.5%;
}
h3 {
  padding: 10px 20px;
}
.van-col h2 {
  color: #040217;
  font-weight: 500;
  text-align: left;
  font-size: 19px;
  height: 4.7rem;
  line-height: 4.7rem;
}
.van-col .van-image {
  display: block;
  height: 13.5rem;
}
.van-col p {
  line-height: 1.5rem;
  padding-top: 1rem;
  color: #696969;
  text-align: justify;
  font-size: 12px;
}
</style>
