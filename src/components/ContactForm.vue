<template>
<!-- TREBA PREPRAVITI ISPIS ERRORA -->
    <div class="form col-lg-7 m-auto">
      <div class="col-lg-12">
        <form @submit.prevent class="contact-form">
          <!-- NAME -->
             <div class="input-group contact-input-height">
                <div class=" col-lg-12">
                  <label for="name" class="form-label">Vaše Ime:</label>
                  <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Petar" @input="handleInputs(form.name)">
                <div v-for="error in errors" :key="error.id">
                <div class="alert alert-danger col-lg-12" role="alert" v-if="error.name">
                  {{error.name[0]}}
                </div>
                <div v-else></div>

                </div>
                </div>
             </div>
            <!-- EMAIL -->
            <div class="input-group contact-input-height">
                <div class=" col-lg-12">
                  <label for="emial" class="form-label">Vaš Email:</label>
                  <input type="email" class="form-control" id="email" v-model="form.email" placeholder="email@gmail.com" @input="handleInputs(form.email)">
                  <div v-for="error in errors" :key="error.id">
                    <div class="alert alert-danger col-lg-12" role="alert" v-if="error.email">
                      {{error.email[0]}}
                    </div>
                  <div v-else></div>
                </div>
                </div>
            </div>
            <!-- TELEPHONE -->
            <div class="input-group contact-input-height" :style="errors.length ? 'margin-bottom: 80px !important;' : ''">
                <div class=" col-lg-12">
                  <label for="telephone" class="form-label">Vaš Telefon:</label>
                  <input type="text" class="form-control" id="telephone" v-model="form.telephone" placeholder="+38163123456" @input="handleInputs(form.telephone)">
                <div v-for="error in errors" :key="error.id">
                  <div v-if="error.telephone" >
                    <div v-for="telephoneE in error.telephone" :key="telephoneE.id" class="alert alert-danger col-lg-12" role="alert">
                    {{telephoneE}}
                    </div>
                   
                  </div>
                </div>
                </div>
                
            </div>
            <!-- MESSAGE -->
            <div class="input-group contact-input-height mb-3 ">
              <div class=" col-lg-12">
                <label for="textarea" class="form-label">Poruka:</label>
                <textarea class="form-control" id="textarea" v-model="form.message" placeholder="Unesite poruku"  rows="3" @input="handleInputs(form.message)"></textarea>
                <div v-for="error in errors" :key="error.id">
                  <div v-if="error.message" class="alert alert-danger col-lg-12" role="alert">
                    {{error.message[0]}}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 contact-input-button mt-5">
                <re-captcha :class="showForm ? 'captcha-contact' : 'hide captcha-contact'" :siteKey="siteKey" @validate="validate" ref="ReCaptcha"/>
                <button class="contact-form-button col-lg-2 btn btn-success" @click="handleSubmit" >Pošalji</button>
            </div>
        </form>
      </div>
       
    </div>  
</template>
<script>
import ReCaptcha from '../components/ReCaptcha.vue'

export default {
  data(){
    return{
      showForm: true
    }
  },
  components:{
        ReCaptcha
  },
    props:{
      errors: Array,
      form: Object,
      siteKey: String,
      validateReCaptcha: Boolean,
      emailFormMessage: String
    },
    methods: {
      resetCaptcha(){
        this.$refs.ReCaptcha.reCaptchaReset()
      },
      handleSubmit() {
        this.$emit('handle-submit', this.form)
      },
      validate(response){
        this.$emit('handle-validate', response)
      },
      handleInputs(val){
        this.$emit('handle-inputs', val)
      }
    },
    beforeDestroy(){
      if(this.validateReCaptcha)this.$refs.ReCaptcha.reCaptchaReset();
    },

}
</script>
<style>
form{
  margin-top: 10px;
}
  .contact-text, .input-group{
    color: #404040 ;
    text-align: left !important;
  }
  .left{
    margin-top: 50px !important;
    float: left;
    padding-top: 50px !important;
    text-align: left;
    margin: 0 auto ;
  }
  .right{
    margin-top: 50px !important;
    float: right;
    padding: 50px 0px 0px 0px;
    
  }
  .contact-form input, textarea{
    border-radius: 0 !important;
    border: none !important;
    border-bottom: 1px solid #555555 !important;
  }
  .contact-form-button{
    float:right;
    border: none !important;
    margin-top: -39px;
    margin-bottom: 25px;
    margin-left: auto;
    border-radius: 0;
  }
  .contact-form-button:hover {
    background-color: #055831;
    color: black;
    border: none !important;
  }
  .contact-text p{
    line-height: 18px;
  }
  .contact-input-height{
    height: 104px;
  }
  .contact-input-button{
  
    margin-top: 50px !important;
  }
  .captcha-contact{
    margin-top:35px;
  }
  .alert{
    
    height: 35px;
    margin: 0;
    padding: 5px ;
  }
@media screen and (max-device-width: 1281px) {
  .left {
    padding: 0 !important;
    margin-top: 100px !important;
    margin-left: 100px !important;
  }
  .right{
    margin-left: -100px !important;
    padding-left: 100px;
  }
  .form{
    margin: 0 auto !important;
    height: 100% !important;
    width: 95% !important;
    padding-left: 50px;
  }
}
@media only screen and (max-width: 1024px) {
  .form{
    margin-left:40px !important;}
  .left {
    padding: 0 !important;
    margin-top: 50px !important;
    margin-left: 0px !important;
    }
  .right{
    padding: 0;
    margin-top: 50px !important;
    margin-left: 0px !important;
    padding-left: 100px;
  }
}
@media only screen and (max-width: 768px) {
  .form{
    width: 90% !important;
    margin: 0px auto!important;
    margin-top: 0px !important;
  }
  .left{
    margin-top: 25px !important;
    width: 90%; 
  }
  .right{
    width: 90%;
    margin-top: 25px !important;
    padding-left: 0px !important;
    float: left;
  }
  .image-card {
      top:4%;
  }
}
@media only screen and (max-width: 600px) {
  .form{
    margin-left: 0 !important;
  }
  .left{
    margin-top: 0px;
    padding-top: 50px;
    padding: 0px  5px!important;
    float:left !important;
  }
  .right{
    padding: 5px !important;
    float: none;
  }
  .contact-form-button{
    margin-top: 15px;
    }
  .captcha-contact{
    margin-left: -25px;
  }
}
@media only screen and (max-width: 540px) {
  .contact-form-button{
    margin-top: -37px;
  }
}
@media only screen and (max-width: 414px) {
  .contact-form-button{
    margin-top: 17px;
  }
}
@media only screen and (max-width: 360px) {
  .contact-form-button{
    margin-top: 7px;
  }
  .captcha-contact{
    transform:scale(0.925);
    transform-origin:0 0;
  }
}
@media only screen and (max-width: 280px) {
  .contact-form-button{
    margin-right: -31% !important;
    margin-top: 15px;
  }
  .captcha-contact{
    margin-left: -55px;
        transform:scale(0.925);
    transform-origin:0 0;

  }
}
</style>