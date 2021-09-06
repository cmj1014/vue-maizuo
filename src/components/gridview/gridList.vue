<template>
  <div class="gridList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
	  :immediate-check="false"
    >
      <van-cell v-for="item in list" :key="item.filmId" @click="detail(item)">
        <div class="flex">
          <div class="flex componentDiv">
            <img :src="item.poster" alt class="poster" />
            <div class="nowPlayingFilm-info">
              <div class="nowPlayingFilm-name info-col flex">
                <span>{{item.name}}</span>
                <span>{{item.filmType.name}}</span>
              </div>
              <div data-title="观众评分" class="grade flex"><span v-show="item.grade">观众评分： <span style="color:#ffb232">{{item.grade}}</span></span> </div>
              <p class="nowPlayingList-wrap">
                主要演员:{{item.actors |getActors}}
                <!-- <span v-for="it in item.actors" :key="it.name">{{it.name}}</span> -->
              </p>
              <div class="flex">{{item.nation}} | {{item.runtime}}分钟</div>
            </div>
          </div>
          <div class="flex1 btndiv">
            <van-button plain type="default" color="#7232dd" size="small">买票</van-button>
       
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {mixinsMain} from "@/assets/js/myMixin"
import Vue from 'vue';
import { List,Cell } from 'vant';
import {mapState} from "vuex";
Vue.use(List).use(Cell);
export default {
  name: "gridList",
  props: ["list"],
  mixins :[mixinsMain],
  data() {
    return {
		loading: false,
		finished: false,
		num:1,
		total:0
	};
  },
  computed:{
	...mapState("cityMod",["cityId"])  
  },
  methods:{
    detail(item){
      this.$router.push({path:"/detail/"+item.filmId})
    },
	onLoad(){
		this.num++;
		let me = this;
		if(me.list&&me.list.length==me.total&&me.list.length!=0){
			me.finished = true;
			return;
		}
		
		this.$axios({
		  url:
		    "/maizuo/gateway?cityId="+this.cityId+"&pageNum="+this.num+"&pageSize=10&type=1&k=1095390",
		  headers: {
		    "X-Client-Info":
		      '{"a":"3000","ch":"1002","v":"5.0.4","e":"16223891571754988061655041","bc":"'+this.cityId+'"}',
		    "X-Host": "mall.film-ticket.film.list",
		  },
		}).then(({data}) => {
			this.loading = false
			this.$emit("setDataList",data.data)
			this.total = data.data.total
		  
		});
		
	}
  }
};
</script>
<style scoped lang="scss">
.gridList {
  .van-cell{
    padding: 10px;
    border-bottom: 1px solid #9e9e9e;
  }
  .componentDiv{
    width: calc(100% - 45px);
  }
  .poster {
    width: 66px;
    height: 94px;
    background: rgb(249, 249, 249);
  }
  .nowPlayingFilm-info {
    width: calc(100% - 60px);
    padding: 0 10px;
    .grade{
      height:22px;
    }
    .nowPlayingFilm-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    .nowPlayingList-wrap{
          overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    }
  }
  .btndiv {
    width: 40px;
  }
}
</style>
