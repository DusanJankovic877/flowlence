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
    errors:[
   
    ]
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
     state.validateReCaptcha = payload
    },
    setFormEmailMessage(state, payload){
      state.emailFormMessage = payload
      console.log(state.emailFormMessage);
    },
    setApiWaitingCountIncrement(state){
      state.apiWaitingCount += 1
    },
    setApiWaitingCountDecrement(state){
      state.apiWaitingCount -= 1;
    },
    setErrors(state, payload){
      // Object.assign(state.errors, payload)
      // console.log(state.errors);
      state.errors.push(payload)
      // state.errors.push(payload.email[0])
      // state.errors.push(payload.telephone)
      // state.errors.push(payload.name[0])
      // state.errors.push(payload.message[0])
    },
    deleteErrors(state){
      state.errors = []
    },
    setDeleteFormMessage(state){
      state.emailFormMessage =''
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
        state.commit('setFormEmailMessage', response)
      }
      // console.log('store', response);
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
    //at contact us when you leave it validateReCaptcha is reseted to false
    emptyCaptchaValidate(state, payload){
      state.commit('setCaptchaValidate', payload)
    },
    async getCaptchaValidate(state,payload){
      const response = await recaptchaValidate.validate(payload)
      state.commit('setCaptchaValidate', response.success); 
      
    },
    async setMailFormData(state,payload){
     const response = await entrepreneurService.setMailFormData(payload)
     if(response){
       state.commit('setFormEmailMessage', response);
     }
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
    },
    setErrors(state,payload){
      state.commit('setErrors', payload)
    },
    deleteErrors(state){
      state.commit('deleteErrors')
    },
    deleteEmailFormMessage(state){
      state.commit('setDeleteFormMessage')
    }
  },
  getters: {
    formData: (state) => state.formData,

    validateReCaptcha: (state) => state.validateReCaptcha,
    emailFormMessage: (state) => state.emailFormMessage,
    errors: (state) => state.errors
  },
  modules: {
    AdminModule,
    BlogModule
  },
});