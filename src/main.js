
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import ElementUI from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css'
import vueSwiper from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css' ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
 import {
   swiper,
   swiperSlide
 } from 'vue-awesome-swiper'
 import Axios from 'axios'
 import http from '@/util/http.js'

import './assets/style/table.scss' /*引入公共表单样式*/
import './assets/style/main.scss' /*引入公共样式*/
import './assets/style/element.scss' /*引入公共自定义样式*/
import './assets/style/animateCss.scss' /*引入公共动画样式*/
Vue.prototype.$axios = Axios
Vue.prototype.$http = http
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {
  name: 'v-touch'
})

import VueBus from 'vue-bus'
Vue.use(VueBus)//中央控制总线

Vue.use(vueSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(CollapseTransition)

Vue.directive('log', {
  bind: function (el, binding, vnode) {
    console.log('el-log', el)
  }
})
Vue.directive('color', {
  bind: function (el, binding, vnode) {
    if (binding.value) {
      el.style.color = binding.value
    } else {
      el.style.color = '#333'
    }
  }
})
Vue.directive('top', {
  inserted (el, binding, vnode) {
    el.style.display = 'none'
    window.onscroll = () =>{
      if((document.body.scrollTop||document.documentElement.scrollTop)>50){
        el.style.display = 'block'
      }else{
        el.style.display = 'none'
      }
    }
  },unbind(){
    window.onscroll = null
  }
})
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import 'vant/lib/index.css'
import { Skeleton, Col, Row, Button, Swipe, SwipeItem, Lazyload, Icon, ImagePreview,Image as VanImage } from 'vant'
Vue.use(Lazyload, { lazyComponent: true, })

Vue.use(ImagePreview)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Skeleton)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
   swiper,
   swiperSlide,
  render: h => h(App)
}).$mount('#app')

/* new Vue({
  el: '#app',
  router,
  store,
  swiper,
  swiperSlide,
  components: {
    App
  },
  template: '<App/>'
}) */

