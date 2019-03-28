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
    }
  ]
})
