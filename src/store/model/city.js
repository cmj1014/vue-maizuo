
const module = {
	namespaced: true,
	state: {
		cityId: '310100',
		cityName: '上海',
	},
	mutations: {
		changeCity(state, data) {
			state.cityId = data.cityId
			state.cityName = data.name
		},
	},
	actions: {}

}
export default module 
