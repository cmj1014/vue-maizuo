import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home.vue'
Vue.use(VueRouter)

const routes = [
   {
     path: '/',
     component: Home
   },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {path: 'nowplaying',
       component: () => import('@/components/home/nowplaying.vue')
      },
       {
         path: 'comingsoon',
         component: () => import('@/components/home/comingsoon.vue')
       },
      {
        path: '',
        redirect: "nowplaying"
      },
    ]
  },
   {
     path: '/detail/:id',
     name: 'detail',
     component: () => import('@/components/detail/detail.vue')
   },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/components/info/Info.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city.vue')
  },
  
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/components/user/userInfo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/login.vue')
  },
  {
    path: '*',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
  const auth = ["/detail", "/money"];
  if (auth.indexOf(to.fullPath)>-1){
    console.log("需要处理")
    //  next("/login");
  }else{
    next();
  }
  
})

export default router
