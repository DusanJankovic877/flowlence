import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import contactServices from '../services/contactServices'
import recaptchaValidate from '../services/recaptchaValidate'
import  NProgress  from 'nprogress';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiWaitingCount: 0,
    entrepreneurForm:{},
    formData:{},
    associationFormData:{},
    validateReCaptcha: false,
    emailFormMessage: ''
  },
  mutations: {
    setFormData(state, payload){
      state.formData = payload;

    },
    setEmptyFormData(state){
      state.formData = {}
    },
    setEmptyEmailFormMessage(state){
      state.emailFormMessage = '';
    },
    setCaptchaValidate(state, payload){
      if(payload)state.validateReCaptcha = payload
    },
    setFormEmailMessage(state, payload){
      state.emailFormMessage = payload
    },
    setApiWaitingCountIncrement(state){
      state.apiWaitingCount += 1
    },
    setApiWaitingCountDecrement(state){
      state.apiWaitingCount -= 1;
    },

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
    setEmptyEmailFormMessage(state){
      state.commit('setEmptyEmailFormMessage');
    },
    async getCaptchaValidate(state,payload){
      const response = await recaptchaValidate.validate(payload)
      state.commit('setCaptchaValidate', response.success); 
    },
    async setMailFormData(state,payload){
     const response = await entrepreneurService.setMailFormData(payload)
      state.commit('setFormEmailMessage', response);
    },
    startLoading({commit, state}){
      if(state.apiWaitingCount === 0){
        NProgress.start()
        commit('setApiWaitingCountIncrement')
      }
    },
    doneLoading({commit, state}){
      commit('setApiWaitingCountDecrement')
      if(state.apiWaitingCount === 0){
        NProgress.done()

      }
    }
  },
  getters: {
    formData: (state) => state.formData,

    validateReCaptcha: (state) => state.validateReCaptcha,
    emailFormMessage: (state) => state.emailFormMessage
  },
  modules: {
  
  },
});