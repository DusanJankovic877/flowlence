<template>
    <div class="login col-lg-5 m-auto mt-5">
        <form @submit.prevent class="col-lg-9 m-auto">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="form.email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="form.password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check" v-model="form.rememberMe">
                <label class="form-check-label" for="check">zapamti me</label>
            </div>
            <button type="submit" class="btn btn-primary login-button" @click="submit">Submit</button>
     
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:{
        form: Object
    },
    methods:{

        ...mapActions(['login']),
        submit(){
            this.$emit('submit', this.form)
        }
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