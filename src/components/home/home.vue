<template>
  <div class="home">
    <Swiper></Swiper>
    <div class="tabs-bar-wrapper flex-c">
      <ul class="indexUl">
        <li class="flex1">正在热映</li>
        <li class="flex1">即将上映</li>
      </ul>
    </div>

    <!-- <router-view></router-view> -->
    <component :is="component"></component>
  </div>
</template>

<script>
// import swiperIndex from "@/components/swiper/swiperIndex.vue";
import Swiper from "@/components/swiper/swiper.vue";
import comingsoon from "@/components/home/comingsoon.vue";
import nowplaying from "@/components/home/nowplaying.vue";
export default {
  name: "home",
  components: {
    Swiper,
    // swiperIndex,
    nowplaying,
    comingsoon,
  },
  mounted() {
    // this.$router.push("/home/nowplaying")
    this.component = "nowplaying";
  },
  data() {
    return {
      component: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  margin-bottom: 50px;
  .tabs-bar-wrapper {
    height: 50px;
    position:sticky;
    top:0;
    background-color: white;
    z-index:3;
    .indexUl {
      display: flex;
      margin: auto;
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #9e9e9e;
      li {
        // border: 1px solid #9e9e9e;
        background-color: white;
        color: #888;
        font-size: 14px;
        padding: 6px 10px;
      }
    }
  }
}
</style>
