<template>

<div class="full-width-contact">
    <div class="image-contact-cover">
      <div class="image-contact-cover-text col-lg-7">
        <h1>KONTAKTIRAJTE NAS</h1>
          <p>
            Za upite ili pitanja, koristite obrazac za kontakt ili nas pozovite na +381 63 466 371
          </p>
          <p>Flowlence</p>
          <p>Tihomira Ostojića 10</p>
          <p>21000 Novi Sad</p>
          <p>flowlence@gmail.com</p>
          <p>+381 63 466 371</p>
      </div>
      <img class="responsive" src="../assets/saksija.jpg" alt="" style="visibility: hidden;">
    </div>
 
    <div class="contact-us  price-list-component col-lg-12">
        <ContactForm class="contact-form" 
          :errors="errors" 
          :form="form" 
          :validateReCaptcha="validateReCaptcha"
          :emailFormMessage="emailFormMessage"
          @handle-submit="handleSubmit" 
          @handle-validate="validate"
          @handle-inputs="handleInputs"
          :siteKey="siteKey"
          />
    </div>
      <!-- <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ContactForm from '../components/ContactForm.vue'
export default {
    components:{
        ContactForm,
    },
    data() {
        return{
      siteKey: process.env.VUE_APP_RECAPTCHA_PUBLIC_KEY,
          form: {
              email: '',
              name: '',
              telephone: '',
              message: ''
          },
        }
    },
    computed:{
      ...mapGetters(['errors', 'validateReCaptcha', 'emailFormMessage'])
    },
    methods:{
      ...mapActions(['getContactFormData','getCaptchaValidate', 'deleteErrors','deleteEmailFormMessage']),

      async handleSubmit(form){
        this.deleteErrors()
        if (this.validateReCaptcha) {
          await this.getContactFormData(form)
        }

      },
      validate(response){
        this.getCaptchaValidate(response);
      },
      handleInputs(val){
        if(val){
          this.deleteErrors();
          this.deleteEmailFormMessage();
        }
      }
    },
    created(){
    },
    beforeDestroy(){
      this.deleteErrors();
      this.deleteEmailFormMessage();
    }
}
</script>

<style>
.full-width-contact{
  background-color: #DABEBF;
}
  .image-contact-cover{
    background: url('../assets/saksija.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.384);
    position:relative;
    text-align: right;
  }
  .image-contact-cover-text{

    color: white;
    position: absolute;
    z-index: 10;
    margin:  4% 0% 0% 21%!important;
  }
    .image-contact-cover-text p{
      margin-bottom: 1px;
    }
  .contact-form{
        padding-top: 50px;
  min-height: 700px;
  }
  .responsive{
    width: 100%;
    height: auto;
  }
@media only screen and (max-width: 1280px){
    .image-contact-cover-text{
    margin:  1% 0% 0% 40%!important;
  }
}
@media only screen and (max-width: 1024px){
  .full-width-contact{
    margin-bottom: 567px !important;
  }
  .image-contact-cover-text h1{
    font-size: 30px;
    margin-bottom: 1px !important;
  }
  .image-contact-cover-text p{
    font-size: 16px;
    padding-bottom: 4px;
  }
}
@media only screen and (max-width: 768px){
  .contact-us{
    margin-bottom: 750px !important;
  }
  .image-contact-cover-text{
    margin:  1% 0% 0% 30%!important;
  }
  .image-contact-cover-text h1{
    font-size: 24px;
    margin-bottom: 1px !important;
  }
  .image-contact-cover-text p{
    font-size: 14px;
    padding-bottom: 4px;
  }
}
@media only screen and (max-width: 600px){
    .contact-us{
    margin-bottom: -370px !important;
  }
}
@media only screen and (max-width: 540px){
  .image-contact-cover-text{
    padding-right: 4px;
  }
}
@media only screen and (max-width: 414px){
  .image-contact-cover-text{
    padding-right: 5px !important;
    margin:  1% 0% 0% 30%!important;
  }
  .image-contact-cover-text h1{
    font-size: 16px;
    margin-bottom: 1px !important;
  }
  .image-contact-cover-text p{
    font-size: 10px;
  }
}
@media only screen and (max-width: 375px){
  .image-contact-cover-text h1{
    font-size: 12px;
    margin-bottom: 1px !important;
  }
    .image-contact-cover-text p{
    font-size: 9px;
  }
}
@media only screen and (max-width: 360px){
  .image-contact-cover-text h1{
    font-size: 14px;
    margin-bottom: 1px !important;
  }
  .image-contact-cover-text p{
    font-size: 8px;
  }
}
@media only screen and (max-width: 320px){
    .image-contact-cover-text h1{
    font-size: 12px;
    margin-bottom: 1px !important;
  }
}
@media only screen and (max-width: 280px){
  .image-contact-cover-text{
    padding-right: 5px !important;
    margin:  4% 0% 0% 30%!important;
  }
  .image-contact-cover-text h1{
    font-size: 12px;
    margin-bottom: 1px !important;
  }
  .image-contact-cover-text p{
    font-size: 6px;
    padding-bottom: 0;
  }
}
</style>