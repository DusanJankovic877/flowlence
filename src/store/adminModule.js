import adminService from '../services/adminService'

const adminModule = {
    namespaced: true,
    state:{
        token: null,
        user: null,
        authError: '',
        authErrors: {},
        bool: false
    },
    mutations:{
        SET_TOKEN(state, token){
            state.token = token;
        },
        SET_USER(state, data){
            state.user = data
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
            state.authErrors = {}
        }
    },
    actions:{
        async login({dispatch},credentials){

         const response =  await adminService.login(credentials);

         dispatch('attempt', response.token)
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
                commit('SET_USER', response);
               
           }catch(e){
      
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
           }
        },
        async getLogout({commit}){
            return await adminService.getLogout().then(()=>{
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                
            });

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