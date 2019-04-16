import Vue from 'vue'
import Router from 'vue-router'
//import Hello from './components/Hello'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: ()=>import('./views/Home.vue')
    },
    {
      path: '/Hello1',
      name: 'hello1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Hello1.vue')
    },
    {
      path:'/home/table2',
      component:()=>import('./components/table/Table2.vue')
    },
    {
      path:'/home/table/export',
      component:()=>import ('./components/TableModal.vue')
    },
    {
      path:'/home/transfer',
      component:()=>import('./components/Transfer.vue')
    },
    {
      path:'/home/data',
      component:()=>import('./components/Data/Axios.vue')
    },
    {
      path:'/table/table',
      component:()=>import('./views/Table.vue')
    },
    {
      path:'/button',
      component:()=>import('@/components/Button.vue'),
      meta:{
        requireAuth:true
      }

    },
    {
      path:'/menu',
      component:()=>import('@/components/Menu/Menu1.vue')
    }
  ]
})
