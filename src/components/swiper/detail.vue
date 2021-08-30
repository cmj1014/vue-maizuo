<template>
  <div class="swiper-detail">
   <van-swipe :loop="false" :width="100" :show-indicators="false">
  <van-swipe-item v-for="(item,index) in data" :key="item.name"  @click="showImg(index)">
    <p><img :src="item.avatarAddress" alt=""     width="85px" height="85px"></p>
    <p>{{item.name}}</p>
    <p>{{item.role}}</p>
  </van-swipe-item>
  
</van-swipe>
<van-image-preview v-model="show" :images="imageList" :startPosition="num">

</van-image-preview>
  </div>
</template>

<script>
export default {
  name: "swiper-detail",
  props:["data"],
  data() {
    return {
     show:false,
     num:0,
	 imageList:[]
    };
  },
  watch:{
	  data:function(val){
		  if(val){
			  this.imageList = this.data.map(item=>{return item.avatarAddress })
		  }
	  }
  },
  mounted(){
	  
  
  },
  methods:{
    init(){
      this.data.map(item=>{
		  this.imageList.push(item.avatarAddress)
	  })
    },
	showImg(index){
	  this.show = true
	  this.num = index;
	}
  }
};
</script>
<style scoped lang="scss">
.swiper-detail {

}
</style>
