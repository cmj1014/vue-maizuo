<template>
	<div id="nav">
		<ul>
			<li @click="goToAction('/home')" :class="{'router-link-active':puthTo=='home'}">
				<i class="iconfont icon-training"></i>
				<span>电影</span>
			</li>
			<li @click="goToAction('/info')" :class="{'router-link-active':puthTo=='info'}">
				<i class="iconfont icon-all"></i>
				<span>影院</span>
			</li>
			<li @click="goToAction('/userInfo')" :class="{'router-link-active':puthTo=='userInfo'}">
				<i class="iconfont icon-account"></i>
				<span>我的</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'tabBar',
	data() {
		return {
			puthTo:"",
		};
	},
	mounted() {
		// this.$router.push("/home/nowplaying")
		// this.component = 'nowplaying';
		this.$bus.on('puthTo', (val) => {
				 this.puthTo = val;
		});
	},
	methods: {
		goToAction(str) {
			this.$router.push({ path: str });
		}
	}
};
</script>
<style lang="scss">
#nav {
	margin-top: 50px;
	position: fixed;
	bottom: 0px;
	left: 0px;
	height: 50px;
	line-height: 25px;
	border-top: 1px solid #333;
	width: 100%;
	text-align: center;
	background-color: white;
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
	ul {
		display: flex;
		li {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 12px;
			&:hover {
				color: red;
			}
			i {
				font-size: 18px;
			}
		}
	}
}

.router-link-active {
	color: red;
}
</style>
