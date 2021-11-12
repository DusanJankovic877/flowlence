<template>
    <vue-recaptcha :sitekey="siteKey" :loadRecaptchaScript="true" @verify="validate"></vue-recaptcha>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    components:{
        VueRecaptcha
    },
    methods:{
    validate(response){
          this.$emit('validate', {response: response})
    }
    },
    props:{
        siteKey: String
    }
}
</script>