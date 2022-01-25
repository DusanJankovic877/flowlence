<template>
    <div>
        <h1>admin</h1>
        <h2>all posts</h2>
        <div v-if="!token">
            <login-compoenent :showForm="showForm" :siteKey="siteKey" :form="form" @submit="submit" @handle-inputs="handleInputs" @validate="validate" :authError="authError" :authErrors="authErrors"/>
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
            },
            showForm: true,
            siteKey: process.env.VUE_APP_RECAPTCHA_PUBLIC_KEY,
        }
    },
    computed:{
        ...mapGetters({token: 'AdminModule/token',isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser', authError: 'AdminModule/authError',authErrors: 'AdminModule/authErrors', validateReCaptcha: 'validateReCaptcha'})
    },

    methods:{
        ...mapActions({getCaptchaValidate:'getCaptchaValidate', login: 'AdminModule/login', emptyAuthError: 'AdminModule/emptyAuthError',emptyAuthErrors: 'AdminModule/emptyAuthErrors'}),
        submit(form){
            if(this.validateReCaptcha === true)this.login(form)
        },
        validate(val){
            this.getCaptchaValidate(val.response);
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