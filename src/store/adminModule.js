import adminService from '../services/adminService'

const adminModule = {
    namespaced: true,
    state:{

        loggedUser: JSON.parse(localStorage.getItem('user')),
        token: null,
        user: null,
        authError: '',
        authErrors: {}
    },
    mutations:{
        SET_TOKEN(state, token){
            state.token = token;
            console.log('token setted', state.token);
        },
        SET_USER(state, data){
            state.user = data
        },
        setLogin(state, payload){
        state.loggedUser = payload
        },
        setLogout(state){
            state.loggedUser =''
        },
        setAuthError(state, payload){
            state.authError = payload
        },
        setAuthErrors(state, payload){
            state.authErrors = payload
        },
        emptyAuthError(state){
            state.authError = ''
        },
        emptyAuthErrors(state){
            // console.log('empty');
            state.authErrors = {}
        }
    },
    //STORE SUBSCRIBER IS NEXT
    actions:{
        async login({dispatch},credentials){
         const response =  await adminService.login(credentials);
        //  const response =  await axios.post('/login', credentials);
       
         console.log('response',response.token );
         dispatch('attempt', response.token)
        //  if(response){
        //      console.log('response state ', response);
            //  state.commit('setLogin', response.user.original)
            //  localStorage.setItem('token', response.token.original.access_token)
            //  localStorage.setItem('user', JSON.stringify(response.user.original))

        //  }
        },
        async attempt({commit, state}, token){
            if(token){
                commit('SET_TOKEN', token);
            }
            if(!state.token){
                return;
            }
           try{
               const response = await adminService.me();
               console.log('ME TOKEN',response);
                commit('SET_USER', response);
               
           }catch(e){
      
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
           }
        },
        async getLogout(state,payload){
            console.log('token', payload);
            await adminService.getLogout({'token': payload})
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            state.commit('setLogout');
        },
        async setAuthError(state, payload){
                await state.commit('setAuthError', payload)
        },
        emptyAuthError(state){
            state.commit('emptyAuthError')
        },
        async setAuthErrors(state,payload){
            await state.commit('setAuthErrors', payload)
        },
        emptyAuthErrors(state){
            state.commit('emptyAuthErrors')
        }

    },
    getters:{
        isLogged: (state) => {return !!state.token && !!state.user}, 
        token: (state) => state.token,
        loggedUser: (state) => state.user,
        authError: (state) => state.authError,
        authErrors: (state) => state.authErrors
    }
}
export default adminModule;