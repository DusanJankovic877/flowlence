import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDropdown from 'vue-dynamic-dropdown'
import'nprogress/nprogress.css'


Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('vue-dropdown', VueDropdown);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
