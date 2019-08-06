import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import {isLogin} from '../store/user'
Vue.use(Router)
const router = new Router({
   mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      meta:{title:'第一个测试程序'},
      component: Index,
    },
    {
      path:'/logout',
      component:() => import('../views/Logout.vue')
    },
    {
      path:'/home',
      meta:{
        auth:true,
        title:'主页'
      },
      component:() => import('../views/Home.vue')
    },{
      path:'/about',
      meta:{title:'关于'},
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },{
      path:'/login',
      meta:{title:'登陆'},
      component:() => import('../views/Login.vue')
    },{
      path:'*',
      component:() => import('../views/Login.vue')
    }
  ]
})
//全局路由守卫
router.beforeEach((to,from,next)=>{
  const islogin = isLogin();
  if(to.meta.title){
    document.title = to.meta.title;
  }
  if(to.meta.auth && !islogin && to.path !=='/login'){
    next({
      path:'/login',
      query:{redirect:to.fullPath}
    })
    
  }else{
    next()
  }
})
export default router