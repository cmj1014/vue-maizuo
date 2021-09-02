<template>
  <BetterScrollC>
    <div class="userInfo">
		<van-nav-bar
		  title="影院"
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		<template #left>
		    <span class="mgR10">{{$store.state.cityName}}</span>
			<van-icon name="arrow-down"  size="16" color="#999" />
		  </template>
		<template #right>
		    <van-icon name="search" size="23" color="#999" />
		  </template>
		</van-nav-bar>
      <div v-if="$store.state.cinemaList">
        <ul class="cinema">
          <li v-for="item in $store.state.cinemaList" :key="item.cinemaId">
            <div style="flex: 1;">
              <div>{{item.name}}</div>
              <div class="address">{{item.address}}</div>
            </div>
            <div style="width: 60px;">{{item.lowPrice/100}}元</div>
          </li>
        </ul>
      </div>
    </div>
  </BetterScrollC>
</template>

<script>
import http from "@/util/http.js";
// import BetterScroll from "better-scroll";
import BetterScrollC from "@/components/tools/BetterScroll";
import Vue from 'vue';
import { NavBar ,Icon } from 'vant';

Vue.use(NavBar).use(Icon);
export default {
  name: "userInfo",
  components: { BetterScrollC },
  data() {
    return {
      dataList: [],
      height: 0,
    };
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 50 + "px";
    let userInfoObj = document.getElementsByClassName("userInfo");
    console.log("userInfoObj", userInfoObj);
    if (userInfoObj && userInfoObj.length > 0) {
      userInfoObj[0].style.height = this.height;
    }
    this.init();
  },
  methods: {
    init() {
      // /gateway?cityId=310100&ticketFlag=1&k=9379490
      this.dataList = [];
	  if(this.$store.state.cinemaList.length ==0){
		  this.$store.dispatch("getCinemaList",this.$store.state.cityId)
	  }else{
		  console.log("读取缓存")
	  }
      /*http({
        url: "/gateway?cityId="+this.$store.state.cityId+"&ticketFlag=1&k=9379490",
        headers: { "X-Host": "mall.film-ticket.cinema.list" },
      }).then((res) => {
        console.log(res.data);
        this.dataList = res.data.data.cinemas;
         this.$nextTick(()=>{
           new BetterScroll(".userInfo",{
          scrollbar:{fabe:true}
        })
        }) 
      });*/
    },
	onClickLeft(){
    this.$store.commit("setCinemaList",[]);
		this.$router.push("city");
	},
	onClickRight(){
		this.$router.push("/info/search");
	}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userInfo {
  // height:calc(100% - 50px);
  // overflow: hidden;
  // position: relative;
      text-align: start;
}
ul {
  li {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
}
.cinema {
  .address {
    font-size: 12px;
    color: gray;
  }
}
.wrapper{
        height: calc( 100% - 0px );
            overflow: auto;
    }
</style>
