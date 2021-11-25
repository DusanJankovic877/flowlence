import adminService from '../services/adminService'
const adminModule = {
    namespaced: true,
    state:{

        loggedUser: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    },
    mutations:{
        setLogin(state, payload){
        state.loggedUser = payload
        }
    },
    actions:{
        async login(state,payload){
         const response =  await adminService.login(payload);
            state.commit('setLogin', response.user)
            localStorage.setItem('token', response.token)
            localStorage.setItem('user', JSON.stringify(response.user))
        }
    },
    getters:{
        isLogged: (state) => !!state.loggedUser, 
        loggedUser: (state) => state.loggedUser
    }
}
export default adminModule;