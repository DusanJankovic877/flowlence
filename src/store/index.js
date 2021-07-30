import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{}
  },
  mutations: {
  },
  actions: {
    async getEntrepreneurFormData(state, payload){
       await entrepreneurService.getEntrepreneurFormData(payload)
    }
  },
  modules: {
  }
})
