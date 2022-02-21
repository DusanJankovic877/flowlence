<template>
    <div>
        <div v-if="!token">
        <h1>Admin stranica</h1>
        <div class="col-lg-5 alert alert-success mt-5 m-auto" v-if="postMessage" >
           <p>
               {{postMessage}}
            </p> 
        </div>
            <login-compoenent :showForm="showForm" :siteKey="siteKey" :form="form" @submit="submit" @handle-inputs="handleInputs" @validate="validate" :authError="authError" :authErrors="authErrors"/>
        </div>
        <div v-else>
            <posts-component/>
        </div>
    </div>
</template>
<script>
// import store from '../store'
import { mapActions, mapGetters } from 'vuex'
import LoginCompoenent from '../components/admin/LoginComponent.vue'
import PostsComponent from '../components/admin/PostsComponent.vue'
import store from '../store'

export default {
    components:{
        LoginCompoenent,
        PostsComponent  
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
        ...mapGetters({
            token: 'AdminModule/token',
            isLogged: 'AdminModule/isLogged', 
            loggedUser: 'AdminModule/loggedUser', 
            authError: 'AdminModule/authError',
            authErrors: 'AdminModule/authErrors', 
            validateReCaptcha: 'validateReCaptcha',
            postMessage: 'postMessage',
            getPosts: 'BlogModule/getPosts'
        }),
        
    },

    methods:{
        ...mapActions({
            getCaptchaValidate:'getCaptchaValidate', 
            login: 'AdminModule/login', 
            emptyAuthError: 'AdminModule/emptyAuthError',
            emptyAuthErrors: 'AdminModule/emptyAuthErrors',
            emptyPostMessage: 'emptyPostMessage'
        }),
        async submit(form){
        if(this.validateReCaptcha === true){
            await this.login(form)
            this.emptyPostMessage();
            this.getPosts();
            // this.$router.push('/jolanda/posts')

        }
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

    },
    beforeRouteEnter(from, to, next){
    store.dispatch('BlogModule/getPosts')
    next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('BlogModule/emptyPosts')
        if(this.$router.path === '/blog/'+this.$route.params.id){
        store.dispatch('emptyPostMessage')
        }
        store.dispatch('emptyPostMessage')
        next();
    }

}
</script>
<style>

</style>