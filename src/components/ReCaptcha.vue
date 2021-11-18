<template>
    <vue-recaptcha :sitekey="siteKey" :loadRecaptchaScript="true" @verify="validate" ref="recaptchaa"></vue-recaptcha>
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
    },
    reCaptchaReset() {
        this.$refs.recaptchaa.reset();
      }
    },
    props:{
        siteKey: String
    }
}
</script>