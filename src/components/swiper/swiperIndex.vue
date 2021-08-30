<template>
  <div class="swiperIndex">
    <!-- 轮播图 swiperjs -->
    <swiper :options="swiperOption">
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/jay.jpeg" /></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div v-show="configFlag">
      <div class="swiper-scrollbar"></div>
      //滚动条
      <div class="swiper-button-next"></div>
      //下一项
      <div class="swiper-button-prev"></div>
      //上一项
      <div class="swiper-pagination"></div>
      //标页码
    </div>

    <!-- 六宫格 -->
  </div>
</template>

<script>
export default {
  name: "swiperIndex",
  data() {
    return {
      // 配置案例说明  https://segmentfault.com/a/1190000014609379
      swiperOption: {
        //swiper3
        autoplay: 2000,
        speed: 1000,
       
      },
      configFlag: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container{
  max-height:450px
}
</style>
