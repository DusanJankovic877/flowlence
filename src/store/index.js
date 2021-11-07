import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'

import contactServices from '../services/contactServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{},
    formData:{},
    associationFormData:{},
    exampleFormData:{}
  },
  mutations: {
    setFormData(state, payload){
      state.formData = payload;
    },
    setEmptyFormData(state){
      state.formData = {}
    }

  },
  actions: {

    async getContactFormData(state, payload){
      await contactServices.getContactFormData(payload);
    },

    // i use this one
    async getFormData(state, payload){
       const response = await entrepreneurService.getFormData(payload);
      //  console.log(payload);
       state.commit('setFormData', response)  
     
    },
     setEmptyFormData(state){
       state.commit('setEmptyFormData');
    }
    
  },
  getters: {
    formData: (state) => state.formData,
    exampleFormData: (state) => state.exampleFormData
    
  },
  modules: {
  
  },
});