import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import contactServices from '../services/contactServices'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{}
  },
  mutations: {
  },
  actions: {
    async getEntrepreneurFormData(state, payload){
      console.log("vuex ",payload);
       await entrepreneurService.getEntrepreneurFormData(payload)
    },
    async getContactFormData(state, payload){
      await contactServices.getContactFormData(payload);
    }
  },
  modules: {
  }
})
