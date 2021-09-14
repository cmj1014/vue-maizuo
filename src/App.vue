<template>
  <div id="app">
    <v-touch v-on:swipeleft="goRegister" v-on:swiperight="goRegister" @swiperright="goRegister">
      <div class="main">
        <router-view />
      </div>
    </v-touch>
    <!-- 电影网站数据建议使用猫眼和卖座  https://m.maoyan.com/ https://m.maizuo.com/-->
    <TabBar v-show="isTabbarShow"></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/tabBar.vue";
import { mapState } from "vuex";
export default {
  name: "home",

  components: {
    TabBar,
  },

  data() {
    return {};
  },

  computed: {
    // ...mapState('CinemaModule', ['cinemaList']),
    ...mapState("tabbarMod", ["isTabbarShow"]),
  },

  methods:{
    goRegister(){
      console.log("右滑动")
       this.$router.go(-1);//返回上一层
    }
  },

  mounted() {}
};
</script> 

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  text-align: start;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  ul,
  li,
  p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
.main {
  width: 100%;
  // height: 100%;
  // flex: 1;
  height: calc(100% - 50px);
}

.router-link-active {
  color: red;
}
</style>