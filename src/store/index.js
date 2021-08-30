import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http.js";
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		swiperInfo: [],
		cityId: "310100",
		cityName: "上海",
		isTabbarShow: true,
		cinemaList:[] 
		
	},
	mutations: {
		setSwiperInfo(state, data) {
			state.swiperInfo = data;
		},
		changeCity(state, data) {
			state.cityId = data.cityId;
			state.cityName = data.name;
		},
		changeTabbar(state, data) {
			state.isTabbarShow = data;
		},
		setCinemaList(state, data) {
			state.cinemaList = data;
		},
	},
	actions: {
		getCinemaList(store,cityId){
			http({
			  url: "/gateway?cityId="+cityId+"&ticketFlag=1&k=9379490",
			  headers: { "X-Host": "mall.film-ticket.cinema.list" },
			}).then((res) => {
			  store.commit("setCinemaList",res.data.data.cinemas)
			 
			});
		}
	},
	modules: {}
})
