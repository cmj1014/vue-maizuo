
import http from '@/util/http.js'
const module = {
	namespaced: true,
	state: { cinemaList: [] },
	mutations: {
		setCinemaList(state, data) {
			console.log('setCinemaList',data)
			state.cinemaList = data
		},
	},
	actions: {
		getCinemaList(store, cityId) {
			http({
				url: '/gateway?cityId=' + cityId + '&ticketFlag=1&k=9379490',
				headers: { 'X-Host': 'mall.film-ticket.cinema.list' },
			}).then(res => {
				store.commit('setCinemaList', res.data.data.cinemas)

			})
		}
	}

}
export default module
