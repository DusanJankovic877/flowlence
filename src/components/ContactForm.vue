<template>
    <div class="form col-lg-7 m-auto">
        <div class="col-lg-4 left">
        <div class="contact-text col-lg-12">
          <h2>KONTAKTIRAJTE NAS</h2>
          <p>
            Za upite ili pitanja, koristite obrazac za kontakt ili nas pozovite na +381 63 466 371
          </p>
          <p>Flowlence</p>
          <p>Tihomira Ostojića 10</p>
          <p>21000 Novi Sad</p>
          <p>flowlence@gmail.com</p>
          <p>+381 63 466 371</p>
        </div>
        </div>
        <div class="col-lg-8 right" >
        <b-form @submit.prevent v-if="show" class="contact-form col-lg-8">
          <!-- NAME -->
            <b-form-group id="input-name" label="Vaše Ime:" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" type="text" placeholder="Petar" required></b-form-input>
              <div class="alert alert-danger" role="alert" v-if="errors.name.length">
                {{errors.name}}
              </div>
              <div v-else></div>
            </b-form-group>
         
            <div class="col-lg-6">
              <!-- EMAIL -->
              <b-form-group id="input-email" label="Email adresa:" label-for="input-email">
                <b-form-input id="input-email" v-model="form.email" type="email" placeholder="petar@gmail.com"  required></b-form-input>
                <div class="alert alert-danger" role="alert" v-if="errors.email.length">
                  {{errors.email}}
                </div>
                <div v-else></div>
              </b-form-group>
            </div>
            <!-- TELEPHONE -->
            <div class="col-lg-6">
              <b-form-group id="input-telephone"  label="Telefon:" label-for="input-telephone">
                <b-form-input id="input-telephone" v-model="form.telephone" type="text" placeholder="+38163123456" required></b-form-input>
                <div class="alert alert-danger" role="alert" v-if="errors.telephone.length">
                  {{errors.telephone}}
                </div>
                <div v-else></div>
              </b-form-group>
            </div>
          
          <b-form-group id="input-message" label="Poruka:" label-for="input-message">
            <b-form-textarea id="input-message" v-model="form.message" rows="3"  placeholder="Unesite poruku" required></b-form-textarea>
          <div class="alert alert-danger" role="alert" v-if="errors.message.length">
            {{errors.message}}
          </div>
          <div v-else></div>
          </b-form-group>
          <div class="col-lg-12" >
           
              <b-button class="col-lg-3 contact-form-button" @click="handleSubmit" style="float:right;">Pošaljite</b-button>
           
          </div>
        </b-form>
        </div>
       
    </div>  
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
       return{
        form: {
            email: '',
            name: '',
            telephone: '',
            message: ''
        },
        show: true,
        errors: {
          email:'',            
          name: '',
          telephone: '',
          message: ''
        }
       } 
    },
    methods: {
      ...mapActions(['getContactFormData']),
       async handleSubmit() {
         
          await this.getContactFormData(this.form).then(response => {
        if(response){
        
         this.errors.email = '';
         this.errors.name = '';
         this.errors.message = '';
         this.errors.telephone = '';
         }
          }).catch(error => {
            if(error.response.data.errors.email != undefined){
              this.errors.email = error.response.data.errors.email[0]
            }
            else{
            this.errors.email = '';
            }
            if(!this.form.name){
              this.errors.name = error.response.data.errors.name[0];
            }else{
              this.errors.name = '';
            }
            if(!this.form.message){
              this.errors.message = error.response.data.errors.message[0];
            }else{
              this.errors.message = '';
            }
            if(!this.form.telephone){
              this.errors.telephone = error.response.data.errors.telephone[0];
            }else{
              this.errors.telephone = '';
            }
          })
        }
    }
}
</script>
<style>
  .form{

    margin: 0 auto;
  }
  .left{
    float: left;
    padding-top: 50px !important;
    text-align: left;
    margin: 0 auto !important;
  }
  .right{
    float: right;

    padding: 50px 0px 0px 0px;
    
  }
  .contact-form input, textarea{
    border-radius: 0 !important;
    border: none !important;
    border-bottom: 1px solid #555555 !important;
  }
  form{
    margin: 0 auto;
  }
  .contact-form-button{
    background-color: #C9C9C9;
    border: none !important;
    color:#5E5E5E;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: auto;
    border-radius: 0;
  }
  .contact-form-button:hover {
    background-color: black;
    border: none !important;
  }
  .contact-text p{
    margin: 2px 0;
  }
@media screen and (max-device-width: 1281px) {
    .left {
      padding: 0 !important;
      /* padding: 30px !important;  */
    }
    .form{
      padding-bottom: 0;
    }
  }
@media only screen and (max-width: 1024px) {
  .left{
    padding: 0px !important;
    padding-left: 0px !important;
  }
}
@media only screen and (max-width: 769px) {

  .image-card {
      top:4%;
      left:4%;
  }
  .text{
    padding: 2px 2px 2px 10px!important;
  }
}
@media only screen and (max-width: 600px) {

  .left{
    padding-top: 50px;
    padding: 0px  5px!important;
  }
  .right{
    padding: 5px !important;
    float: none;
  }
}
</style>