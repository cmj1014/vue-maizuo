<template>
  <div class="nowplaying">
    <van-skeleton  title avatar :row="3" :loading="loading" />
    <GridList :list="datalist.films" @setDataList="setDataList"></GridList>
  </div>
</template>

<script>
import {mapState} from "vuex";
import GridList from "@/components/gridview/gridList";
export default {
  name: "nowplaying",
  components: {
    GridList,
  },
  mounted() {
	  console.log("this.cityId",mapState("cityMod",["cityId"]));
		  this.init();
    // this.test();
  },
  data() {
    return {
      datalist: [],
      loading:true
    };
  },
  computed: {
      // ...mapState('CinemaModule', ['cinemaList']),
      ...mapState('cityMod', ['cityId', 'cityName']),
    },
  methods: {
    init() {
		 console.log("this.cityId",this.cityId)
		// console.log("this.$store",this.$store);
      /* console.log("init")
      //https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0
      let str = "";
      str+="type=movie&tag=热门&page_limit=50&page_start=0"
      this.$axios.get('https://movie.douban.com/j/search_subjects?'+str)
  .then(function (data) {
    // console.log(response);
    this.datalist = data.subjects
  })
  .catch(function (error) {
    console.log(error);
  }); */
      //https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6990128
      this.$http({
        url:
          `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=1095390`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16223891571754988061655041","bc":'+this.cityId+'}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then(({data}) => {
        
        this.loading = false
        this.datalist = data.data
        console.log( this.datalist);
      });
    },
	setDataList(data){

		let films = [...this.datalist.films,...data.films];
		let total = this.datalist.total +data.total;
		this.datalist = {films,total};
	}
  },
};
</script>
<style scoped lang="scss">
</style>
