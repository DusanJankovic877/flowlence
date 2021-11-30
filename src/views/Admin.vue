<template>
    <div>
        {{isLogged}}
        {{loggedUser}}
        <h1>admin</h1>
        <div v-if="!isLogged">
            <login-compoenent :form="form" @submit="submit" @handle-inputs="handleInputs" :authError="authError" :authErrors="authErrors"/>
        </div>
    </div>
</template>
<script>
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
        ...mapGetters({isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser', authError: 'AdminModule/authError',authErrors: 'AdminModule/authErrors'})
    },

    methods:{
        ...mapActions({login: 'AdminModule/login', emptyAuthError: 'AdminModule/emptyAuthError',emptyAuthErrors: 'AdminModule/emptyAuthErrors'}),
        async submit(form){
           await this.login(form)
            // console.log( form);
            // this.login(form);
            
            //treba namestiti reset token

        },
        handleInputs(val){
            if(val){
                this.emptyAuthError()
                this.emptyAuthErrors();
            }
        },


      
    }
}
</script>