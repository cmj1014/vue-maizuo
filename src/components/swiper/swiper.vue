<template>
  <div class="swiper-container">
    <van-swipe :autoplay="3000" v-if="flag">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:[""],
  data() {
    return {
      images:[],
      flag:false,
    };
  },
  mounted(){
    if(this.$store.state.swiperInfo){
      this.init();
    }
    
  },
  methods:{
    init(){
      this.$axios({
        url:
          "/maizuo/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1095390",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16223891571754988061655041","bc":"310100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then(({data}) => {
        //获取图片做轮播图
        let info = data.data.films
        console.log("data",info)
        if(info){
          let list = []
          info.map(item=>{
            list.push(item.poster)
          })
          this.$store.commit("setSwiperInfo", list);
          this.images = list
          this.$nextTick(()=>{
            this.flag = true
          console.log("this.image",this.image)
          })
          
        }
        
       
      });
    }
  }
};
</script>
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 212px;
  .van-swipe{
	  text-align: center;
  }
}
</style>
