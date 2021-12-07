import axios from 'axios'

import store from '../store';

// import router from '../router'
// import  NProgress  from 'nprogress';


export class RequestHandler {
    constructor(){
        
        this.apiClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        Accept: 'application/json',
        Bearer: 'token',
        enctype: 'multipart/form-data'
        });
        // async function delay(delayInms) {
        //     return new Promise(resolve  => {
        //       setTimeout(() => {
        //         resolve(2);
        //       }, delayInms);
        //     });
        //   }
        this.apiClient.interceptors.request.use(  config => {
            store.dispatch('startLoading')
            // if()
            // console.log('request', this.apiClient.interceptors);
            return config;
        });
        this.apiClient.interceptors.response.use(  response =>  {
            // await delay(3000);
            // console.log('response', response );
     
            store.dispatch('doneLoading')
            return response;

            // if(error.response.status === 401 && error.config.url != '/login'){
            //     console.log('inside interceptor error', { error });
            //     localStorage.removeItem("token")
                // redirect to /login
                // router.push('/login');
            // }
            // else {
            //     return Promise.reject(error);
            // }
          }, async error =>  {
              console.log(error.response);

              if(error.response.status === 401){
                
                if(error.response.data.message){
                    await store.dispatch('AdminModule/setAuthError', error.response.data.message)
                }
                else if(error.response.data.error){
                    await store.dispatch('AdminModule/setAuthError', error.response.data.error)
                }
                await store.dispatch('doneLoading')

                console.log('dispatch reset token',error.response);
              }
              else if( error.response.status === 422){
                //   console.log('422 true');
                    if(error.response.config.url === '/auth/login'){
                        await store.dispatch('AdminModule/setAuthError', error.response.data.message)
                        await store.dispatch('AdminModule/setAuthErrors', error.response.data.errors)
                    }else {
                        await  store.dispatch('setErrors', error.response.data.errors)
                    }
                  await  store.dispatch('doneLoading')
                  return Promise.resolve();
              }
            else{
                  return Promise.reject(error);

              }
          })
    }
}