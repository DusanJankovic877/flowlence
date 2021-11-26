import axios from 'axios'
import store from '../store';

// import router from '../router'
// import  NProgress  from 'nprogress';


export class RequestHandler {
    constructor(){
        
        this.apiClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
              if( error.response.status === 422){
                  store.dispatch('doneLoading')
                  store.dispatch('setErrors', error.response.data.errors)
                //   return Promise.reject(error);
                  return Promise.resolve();
              }else{
                  return Promise.reject(error);

              }
          })
    }
}