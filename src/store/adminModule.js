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
            console.log('state.token', state.token);
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
    actions:{
        async login({dispatch},credentials){
         const response =  await adminService.login(credentials);
       
        //  console.log('response',response.data.token );
         dispatch('attempt', response.token)
        //  if(response){
        //      console.log('response state ', response);
            //  state.commit('setLogin', response.user.original)
            //  localStorage.setItem('token', response.token.original.access_token)
            //  localStorage.setItem('user', JSON.stringify(response.user.original))

        //  }
        },
        async attempt({commit}, token){
           commit('SET_TOKEN', token);
           console.log('token', token);
           const response = await adminService.me(token);
           console.log('ME TOKEN',response);
           try{
           
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
        loggedUser: (state) => state.user,
        authError: (state) => state.authError,
        authErrors: (state) => state.authErrors
    }
}
export default adminModule;