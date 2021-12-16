<template>
    <div>
        <h1>admin</h1>
        <h2>all posts</h2>
        <div v-if="!token">
            <login-compoenent :form="form" @submit="submit" @handle-inputs="handleInputs" :authError="authError" :authErrors="authErrors"/>
        </div>
    </div>
</template>
<script>
// import store from '../store'
import { mapActions, mapGetters } from 'vuex'
import LoginCompoenent from '../components/admin/LoginComponent.vue'
export default {
    components:{
        LoginCompoenent
    },
    data() {
        return{
            form:{
                email: '',
                password: '',
                rememberMe: false
            }
        }
    },
    computed:{
        ...mapGetters({token: 'AdminModule/token',isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser', authError: 'AdminModule/authError',authErrors: 'AdminModule/authErrors'})
    },

    methods:{
        ...mapActions({login: 'AdminModule/login', emptyAuthError: 'AdminModule/emptyAuthError',emptyAuthErrors: 'AdminModule/emptyAuthErrors'}),
        submit(form){
            this.login(form)
        },
        handleInputs(val){
            if(val){
                this.emptyAuthError()
                this.emptyAuthErrors();
            }
        }
    }

}
</script>