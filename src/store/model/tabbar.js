
const module = {
	namespaced:true,
	state: { isTabbarShow: true, },
	mutations: {
changeTabbar(state, data) {
			state.isTabbarShow = data
		},
},
	actions: {}
	
}
export default module 