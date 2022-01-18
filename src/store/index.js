import Vue from 'vue'
import Vuex from 'vuex'
import entrepreneurService from '../services/entrepreneurService'
import contactServices from '../services/contactServices'
import recaptchaValidate from '../services/recaptchaValidate'
import  NProgress  from 'nprogress';
import AdminModule from './adminModule'
import BlogModule from './blogModule'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    apiWaitingCount: 0,
    entrepreneurForm:{},
    formData:{},
    associationFormData:{},
    validateReCaptcha: false,
    emailFormMessage: '',
    postMessage: '',
    errors:[
   
    ]
  },
  mutations: {
    SET_FORM_DATA(state, payload){
      state.formData = payload;

    },
    SET_EMPTY_FORM_DATA(state){
      state.formData = {}
    },
    SET_EMPTY_EMAIL_FORM_MESSAGE(state){
      state.emailFormMessage = '';
    },
    SET_CAPTCHA_VALIDATE(state, payload){
     state.validateReCaptcha = payload
    },
    SET_FORM_EMAIL_MESSAGE(state, payload){
      state.emailFormMessage = payload
    },
    SET_API_WAITING_COUNT_INCREMENT(state){
      state.apiWaitingCount += 1
    },
    SET_API_WAITING_COUNT_DECREMENT(state){
      state.apiWaitingCount -= 1;
    },
    SET_ERRORS(state, payload){
      if(state.apiWaitingCount === 1)state.errors.push(payload)
    },
    DELETE_ERRORS(state){
      state.errors = []
    },
    SET_DELETE_FORM_MESSAGE(state){
      state.emailFormMessage =''
    },
    SET_POST_MESSAGE(state, payload){
      state.postMessage = payload
    },
    EMPTY_POST_MESSAGE(state){
      state.postMessage = ''
    }


  },
  actions: {
    //nista ne radi bila proba
    async getStuff(){
      await entrepreneurService.getStuff();
    },
    async getContactFormData(state, payload){
      const response = await contactServices.getContactFormData(payload);
      if(response){
        state.commit('SET_FORM_EMAIL_MESSAGE', response)
      }
      // console.log('store', response);
    },
    async getFormData(state, payload){
       const response = await entrepreneurService.getFormData(payload);
       state.commit('SET_FORM_DATA', response)  
    },
    setEmptyFormData(state){
       state.commit('SET_EMPTY_FORM_DATA');
    },
    setEmptyEmailFormMessage(state){
      state.commit('SET_EMPTY_EMAIL_FORM_MESSAGE');
    },
    //at contact us when you leave it validateReCaptcha is reseted to false
    emptyCaptchaValidate(state, payload){
      state.commit('SET_CAPTCHA_VALIDATE', payload)
    },
    async getCaptchaValidate(state,payload){
      const response = await recaptchaValidate.validate(payload)
      state.commit('SET_CAPTCHA_VALIDATE', response.success); 
      
    },
    async setMailFormData(state,payload){
     const response = await entrepreneurService.setMailFormData(payload)
     if(response){
       state.commit('SET_FORM_EMAIL_MESSAGE', response);
     }
    },
    startLoading({commit, state}){
      if(state.apiWaitingCount === 0){
         NProgress.start()
        commit('SET_API_WAITING_COUNT_INCREMENT')
      }
    },
    doneLoading({commit, state}){
      commit('SET_API_WAITING_COUNT_DECREMENT')
      if(state.apiWaitingCount === 0){
        NProgress.done()

      }
    },
    setPostMessage({commit}, payload){
      commit('SET_POST_MESSAGE', payload)
    },
    setErrors(state,payload){
      state.commit('SET_ERRORS', payload)
    },
    deleteErrors(state){
      state.commit('DELETE_ERRORS')
    },
    deleteEmailFormMessage(state){
      state.commit('SET_DELETE_FORM_MESSAGE')
    },
    emptyPostMessage({commit}){
      commit('EMPTY_POST_MESSAGE');
    }
  },
  getters: {
    formData: (state) => state.formData,
    validateReCaptcha: (state) => state.validateReCaptcha,
    emailFormMessage: (state) => state.emailFormMessage,
    errors: (state) => state.errors,
    apiWaitingCount: (state) => state.apiWaitingCount,
    postMessage: (state) => state.postMessage
  },
  modules: {
    AdminModule,
    BlogModule
  },
});