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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
