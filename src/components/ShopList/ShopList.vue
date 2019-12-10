<template>
  <div>
    <div>
      <ul class="nav_list">
        <li>
          <div>
            <img src="../../static/img/shopList_shouji.png"
                 alt="">
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopList'
}
</script>
<style scoped>
.nav_list {
  width: 100%;
  height: 10rem;
  background: white;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 0.6rem 0;
}
.nav_list li {
  width: 25%;
  float: left;
  margin: auto;
}
.nav_list li div {
  width: 3.4rem;
  height: 3.4rem;
  margin: 0.6rem auto;
  padding: 0.6rem 0;
}
.nav_list li img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>