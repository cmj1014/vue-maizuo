<template>
  <div class="swiper-photos">
    <van-swipe :loop="false" :show-indicators="false" :width="180" >
      <van-swipe-item v-for="(item,index) in data" :key="item" @click="showImg(index)">
        <p>
          <img :src="item" alt width="150px" />
        </p>
      </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="show" :images="data" :startPosition="num">

</van-image-preview>
  </div>
</template>

<script>
export default {
  name: "swiper-photos",
  props: ["data"],
  data() {
    return {
      show:false,
      num:0
    };
  },
  mounted() {},
  methods: {
    init() {},
    showImg(index){
		console.log("data",this.data)
      this.show = true
      this.num = index;
    }
  },
};
</script>
<style scoped lang="scss">
.swiper-photos {
}
</style>
