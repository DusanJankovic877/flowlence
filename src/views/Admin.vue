<template>
    <div>
        {{isLogged}}
        {{loggedUser}}
        <h1>admin</h1>
        <div v-if="!isLogged">
            <login-compoenent :form="form" @submit="submit"/>
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
        ...mapGetters({isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser'})
    },
    methods:{
        ...mapActions({login: 'AdminModule/login'}),
        async submit(form){
           await this.login(form)
            // console.log( form);
            // this.login(form);
            

        }
    }
}
</script>