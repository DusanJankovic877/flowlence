import adminService from '../services/adminService'
const adminModule = {
    namespaced: true,
    state:{

        loggedUser: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        authError: '',
        authErrors: {}
    },
    mutations:{
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
            console.log('empty');
            state.authErrors = {}
        }
    },
    actions:{
        async login(state,payload){
         const response =  await adminService.login(payload);
         if(response){
             console.log(response.user);
             state.commit('setLogin', response.user.original)
             localStorage.setItem('token', response.token.original.access_token)
             localStorage.setItem('user', JSON.stringify(response.user.original))

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
        isLogged: (state) => !!state.loggedUser, 
        loggedUser: (state) => state.loggedUser,
        authError: (state) => state.authError,
        authErrors: (state) => state.authErrors
    }
}
export default adminModule;