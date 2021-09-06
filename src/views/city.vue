<template>
	<div id="cityMain">
		
		<van-index-bar :index-list="computedCityList" @select="selectItem">
			<div v-for="data in cityList" :key="data.type">
				<van-index-anchor :index="data.type" />
				<van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleChangePage(item)"/>
			</div>
		</van-index-bar>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { IndexBar, IndexAnchor ,Toast} from 'vant';
	import http from "@/util/http.js";
	import {mapState,mapMutations} from "vuex";
	Vue.use(IndexBar);
	Vue.use(IndexAnchor);
	export default {
	  name: "city",
	  components: {  },
	  data() {
	    return {
	      cityList: [],
	    };
	  },
	  computed:{
		  computedCityList(){
			  let list = this.cityList.map(item=>item.type)
			  console.log("computedCityList",list);
			  return list;
		  }
	  },
	  mounted() {

	    this.init();
	  },
	  beforeDestroy(){
	  	  // this.$store.commit("changeTabbar",true);
		  this.changeTabbar(true)
	  },
	  methods: {
		   ...mapMutations("cityMod",["changeCity"]),
		   ...mapMutations("tabbarMod",["changeTabbar"]),
	    init() {
			// this.$store.commit("changeTabbar",false);
			this.changeTabbar(false)
	     http({
	       url: "/gateway?k=8927997",
	       headers: { "X-Host": "mall.film-ticket.city.list" },
	     }).then((res) => {
	       
			this.handleCityData(res.data.data.cities)
	     });
	    },
		handleCityData(cities){
			let arr = []
			let cityList = []
			for (let code = 65; code < 91; code++) {
				arr.push(String.fromCharCode(code));
			}
			arr.forEach(letter=>{
				const list = cities.filter(item=>
					item.pinyin.substring(0,1).toUpperCase() ==letter
				)
				if(list.length>0){
					cityList.push({
						type:letter,list:list
					});
				}
			})
			console.log(cityList)
			this.cityList = cityList
		},
		selectItem(index){
			Toast(index);
		},
		handleChangePage(data){
			console.log(data)
			// this.$store.commit("changeCity", data);
			this.changeCity(data)
			this.$router.back();
		}
	  },
	};
</script>

<style scoped lang="scss">
	#cityMain{
		text-align: start;
		height: calc(100% - 50px);
	}
</style>
