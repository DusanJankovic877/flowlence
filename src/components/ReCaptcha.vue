<template>
    <vue-recaptcha :sitekey="siteKey" :loadRecaptchaScript="true" @verify="validate" ref="recaptchaa"></vue-recaptcha>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';
import { mapActions } from 'vuex';
export default {
    components:{
        VueRecaptcha
    },
    methods:{
        ...mapActions(['emptyCaptchaValidate']),
    validate(response){
          this.$emit('validate', {response: response})
    },
    reCaptchaReset() {
        this.emptyCaptchaValidate(false)
        this.$refs.recaptchaa.reset();
      }
    },
    props:{
        siteKey: String
    }
}
</script>