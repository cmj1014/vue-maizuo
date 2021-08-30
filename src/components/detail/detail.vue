<template>
  <div v-if="detailInfo">
    <top-Head :data="detailInfo.name" v-top></top-Head>
	<div><VanImage width="100%"  :src="detailInfo.poster" /></div>
    <div>{{detailInfo.name}} -- {{detailInfo.filmType?detailInfo.filmType.name:""}}</div>
    <div>{{detailInfo.category}}</div>
    <div>{{detailInfo.premiereAt | dateFormat}}上映</div>
    <div>{{detailInfo.nation}} | {{detailInfo.runtime}}分钟</div>
    <div :class="{synopsis : !showFlag}">{{detailInfo.synopsis}}</div>
    <div @click="showFlag=!showFlag">
      <van-icon name="arrow-down" v-show="!showFlag"/>
      <van-icon name="arrow-up" v-show="showFlag"/>
    </div>

    <h3>演职人员</h3>
    <detail-swiper :data="detailInfo.actors"></detail-swiper>

    <h3>剧照</h3>
    <photos-swiper :data="detailInfo.photos"></photos-swiper>
   
  </div>
</template>

<script>
 import http from '@/util/http.js'
 import moment from 'moment'
 import detailSwiper from '@/components/swiper/detail'
  import photosSwiper from '@/components/swiper/photos'
    import topHead from '@/components/topHead'
	import Vue from 'vue';
	
export default {
  name: 'detail',
  components:{
    detailSwiper,photosSwiper,topHead
  },
  filters:{
    dateFormat:function(val){
      return moment(val*1000).format('YYYY-MM-DD');
    }
  },
  data(){
    return{
      detailInfo:{},
      showFlag:true
    }
  },
  mounted(){
    let id= this.$route.params.id;
    //https://m.maizuo.com/gateway?filmId=5568&k=8027758
    this.$http({
      url:`/gateway?filmId=${id}&k=8027758`,
      headers:{"X-Host": "mall.film-ticket.film.info"}
    }).then(data=>{
      this.detailInfo = data.data.data.film;
	  
    })
  }
}
</script>

<style scoped lang="scss">
.synopsis{
  height:40px;
  overflow: hidden;
}
</style>
