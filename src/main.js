import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDropdown from 'vue-dynamic-dropdown'
import'nprogress/nprogress.css'

store.dispatch('AdminModule/attempt', localStorage.getItem('token')).then(() => {
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
  Vue.config.productionTip = false
  Vue.component('vue-dropdown', VueDropdown);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
