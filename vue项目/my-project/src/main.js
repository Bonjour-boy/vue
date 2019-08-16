import Vue from 'vue'
import store from './stores/store'
import App from './App.vue'
import router from './routers/router'


//引入vant ui
import Vant from './vants/index'
Vant()

//引入vant ui
import MuseUI from './muse/index';
MuseUI()

//全局使用
// 全局引入
import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')