import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Anted from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(Anted)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/table/table',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
