import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import contactServices from '../services/contactServices'
import recaptchaValidate from '../services/recaptchaValidate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrepreneurForm:{},
    formData:{},
    associationFormData:{},
    validateReCaptcha: false
  },
  mutations: {
    setFormData(state, payload){
      state.formData = payload;
    },
    setEmptyFormData(state){
      state.formData = {}
    },
    setCaptchaValidate(state, payload){
      if(payload)state.validateReCaptcha = payload
    }

  },
  actions: {
    async getContactFormData(state, payload){
      await contactServices.getContactFormData(payload);
    },
    async getFormData(state, payload){
       const response = await entrepreneurService.getFormData(payload);
       state.commit('setFormData', response)  
    },
     setEmptyFormData(state){
       state.commit('setEmptyFormData');
    },
    async getCaptchaValidate(state,payload){
      const response = await recaptchaValidate.validate(payload)
      state.commit('setCaptchaValidate', response.success); 
    },
    async setMailFormData(state,payload){
      console.log(payload);
    }
  },
  getters: {
    formData: (state) => state.formData,
    validateReCaptcha: (state) => state.validateReCaptcha
  },
  modules: {
  
  },
});