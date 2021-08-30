import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { swiperInfo :[],cityId:"310100",cityName:"上海",isTabbarShow:true
  },
  mutations: {
     setSwiperInfo(state, data) {
       state.swiperInfo = data;
     },
	 changeCity(state,data){
		 state.cityId = data.cityId;
		 state.cityName = data.name;
	 },
	 changeTabbar(state,data){
		 state.isTabbarShow = data;
	 },
  },
  actions: {
  },
  modules: {
  }
})
