<template>
  <div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<div v-if="computedCinemaList" style="height: calc(100% - 50px);">
        <ul class="cinema">
          <li v-for="item in computedCinemaList" :key="item.cinemaId">
            <div style="flex: 1;">
              <div>{{item.name}}</div>
              <div class="address">{{item.address}}</div>
            </div>
            
          </li>
        </ul>
      </div> 
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import {mapActions, mapMutations, mapState } from 'vuex';
Vue.use(Search);
export default {
  name: "search",
  components: {  },
  data() {
    return {
      value:""
    };
  },
  computed:{
	  ...mapState("cityMod",["cityId"]),
	  ...mapState("cinemaMod",["cinemaList"]),
    computedCinemaList(){
      if(this.value=="") return [];
      return this.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())||item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted() {
    if(this.cinemaList.length ==0){
		  // this.$store.dispatch("getCinemaList",this.cityId)
		  this.getCinemaList(this.cityId);
	  }else{
		  console.log("读取缓存",this.cinemaList)
	  }
  },
  methods: {
	  ...mapActions('cinemaMod', ['getCinemaList']),
   onSearch(){

   },
   onCancel(){
     this.$router.back();
   },
  },
};
</script>
<style scoped lang="scss">
ul {
  li {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
