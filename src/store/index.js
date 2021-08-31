import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import contactServices from '../services/contactServices'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{},
    formData:{}
  },
  mutations: {
    setFormData(state, payload){
      state.formData = payload;

    }
  },
  actions: {
    async getEntrepreneurFormData(state, payload){
       await entrepreneurService.getEntrepreneurFormData(payload)
    },
    async getContactFormData(state, payload){
      await contactServices.getContactFormData(payload);
    },
    async getFormData(state, payload){
       const response = await entrepreneurService.getFormData(payload);
       state.commit('setFormData', response)
       
    }
  },
  getters: {
    formData: (state) => state.formData,
    
  },
  modules: {
  
  },
});