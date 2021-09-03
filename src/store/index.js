import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import dooService from '../services/dooService'
import contactServices from '../services/contactServices'
import associationService from '../services/associationService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{},
    formData:{},
    associationFormData:{}
  },
  mutations: {
    setFormData(state, payload){
      state.formData = payload;
    },
    setAssociationFormData(state, payload){
      state.associationFormData = payload
    }

  },
  actions: {
    async getEntrepreneurFormData(state, payload){
       await entrepreneurService.getEntrepreneurFormData(payload)
    },
    async getDooFormData(state, payload){
      await dooService.getDooFormData(payload)
    },
    async getAssociationMailData(state, payload){
      await associationService.getAssociationMailData(payload)
    },
    async getAssociationFormData(state){
      const response = await associationService.getAssociationFormData();
      state.commit('setAssociationFormData', response)
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
    assocFormData: (state) => state.associationFormData
    
  },
  modules: {
  
  },
});