import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
      children:[{
        path:'/home',
        component:() => import('./views/Home.vue')
      },{
        path:'/login',
        component:() => import('./views/Login.vue')
      },{
        path:'/logout',
        component:() => import('./views/Logout.vue')
      },{
        path:'/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },{
        path:'*',
        component:() => import('./views/Login.vue')
      }]
    }
  ]
})
