<template>
    <div class="login col-lg-5 m-auto mt-5">
        <form @submit.prevent class="col-lg-9 m-auto">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="form.email" @input="handleInputs(form.email)">
            <div v-if="authErrors.email" class="alert alert-danger col-lg-12 " role="alert" >
                <p class="col-lg-5 m-auto">
                    {{authErrors.email[0]}}
                </p>
            </div>
            <div v-else></div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="form.password" @input="handleInputs(form.password)">
            <div v-if="authErrors.password" class="alert alert-danger col-lg-12 " role="alert" >
                <p class="col-lg-5 m-auto">
                    {{authErrors.password[0]}}
                </p>
            </div>
            <div v-else></div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check" v-model="form.rememberMe">
                <label class="form-check-label" for="check">zapamti me</label>
            </div>
     
            <div v-if="authError" class="alert alert-danger col-lg-12 " role="alert" >
                <p class="col-lg-5 m-auto">
                    {{authError}}
                </p>
            </div>
            <div v-else></div>
            <re-captcha :class="showForm ? 'captcha-contact' : 'hide captcha-contact'" :siteKey="siteKey" @validate="validate" ref="ReCaptcha"/>
            <button type="submit" class="btn btn-primary login-button" @click="submit">Submit</button>
     
        </form>
    </div>
</template>
<script>
import ReCaptcha from '../ReCaptcha.vue'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    props:{
        form: Object,
        authError: String,
        authErrors: Object,
        siteKey: String,
        showForm: Boolean
    },
    components:{
        ReCaptcha
    },
    methods:{

        ...mapActions({emptyAuthErrors: 'AdminModule/emptyAuthErrors', emptyCaptchaValidate:'emptyCaptchaValidate'}),
        submit(){
            this.$emit('submit', this.form)
        },
        handleInputs(val){
            this.$emit('handle-inputs', val)
        },
        validate(response){
            this.$emit('validate', {response: response})
        },
        reCaptchaReset() {
            this.emptyCaptchaValidate(false)
            // this.$refs.ReCaptcha.reset();
        },
    },
    beforeDestroy(){
        this.form.email = '';
        this.form.password = '';
        this.form.rememberMe = false;
        this.reCaptchaReset()
       
    }
}
</script>
<style scoped>
.login{
    padding: 80px 0;
    background-color: gray;
    text-align: left;
}
.login-button{
    margin-left: 87%;
}
@media only screen and (max-width: 1280px){
    .login-button{
        margin-left: 82%;
    }
}
@media only screen and (max-width: 1024px){
    .login-button{
        margin-left: 76%;
    }
}

@media only screen and (max-width: 768px){
    .login{
        padding: 80px 10px;
    }
    .login-button{
        margin-left: 90%;
    }

}
@media only screen and (max-width: 540px){
    .login-button{
        margin-left: 86%;
    }
}
@media only screen and (max-width: 414px){
    .login-button{
        margin-left: 80%;
    }
}
@media only screen and (max-width: 375px){
    .login-button{
        margin-left: 79%;
    }
}
@media only screen and (max-width: 360px){
    .login-button{
        margin-left: 77%;
    }
}
@media only screen and (max-width: 320px){
        .login-button{
        margin-left: 75%;
    }
}
@media only screen and (max-width: 280px){
    .login-button{
        margin-left: 71%;
    }
}
</style>