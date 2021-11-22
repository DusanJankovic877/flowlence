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

            return config;
        });
        this.apiClient.interceptors.response.use(async response =>{
            // await delay(3000);
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
          });
    }
}