
import Vue from 'vue'
import Vuex from 'vuex'
import cityMod from './model/city.js'
import tabbarMod from './model/tabbar.js'
import cinemaMod from './model/cinemaList.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { swiperInfo: [], },
	mutations: {
		setSwiperInfo(state, data) {
			state.swiperInfo = data
		},
		
		
		
	},
	actions: {},
	modules: { cityMod,tabbarMod,cinemaMod }
})
