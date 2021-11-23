<template>
    <div class="form col-lg-8 m-auto">
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
      <div class="col-lg-8 right">
        <form @submit.prevent class="contact-form">
          <!-- NAME -->
             <div class="input-group contact-input-height">
                <div class=" col-lg-12">
                  <label for="name" class="form-label">Vaše Ime:</label>
                  <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Petar" required>
                </div>
                <div class="alert alert-danger col-lg-12" role="alert" v-if="contactUsErrors.name">
                  {{contactUsErrors.name[0]}}
                </div>
                <div v-else></div>
             </div>
            <!-- EMAIL -->
            <div class="input-group contact-input-height">
                <div class=" col-lg-12">
                  <label for="emial" class="form-label">Vaš Email:</label>
                  <input type="email" class="form-control" id="email" v-model="form.email" placeholder="email@gmail.com" required>
                </div>
                <div class="alert alert-danger col-lg-12" role="alert" v-if="contactUsErrors.email">
                  {{contactUsErrors.email[0]}}
                </div>
                <div v-else></div>
            </div>
            <!-- TELEPHONE -->
            <div class="input-group contact-input-height">
                <div class=" col-lg-12">
                  <label for="telephone" class="form-label">Vaš Telefon:</label>
                  <input type="text" class="form-control" id="telephone" v-model="form.telephone" placeholder="+38163123456" required>
                </div>
                <div class="alert alert-danger col-lg-12" role="alert" v-if="contactUsErrors.telephone">
                  {{contactUsErrors.telephone[0]}}
                </div>
                <div v-else></div>
            </div>
            <!-- MESSAGE -->
            <div class="input-group contact-input-height">
              <div class=" col-lg-12">
              <label for="textarea" class="form-label">Poruka:</label>
              <textarea class="form-control" id="textarea" v-model="form.message" placeholder="Unesite poruku" required rows="3" ></textarea>
              </div>
              <div class="alert alert-danger col-lg-12" role="alert" v-if="contactUsErrors.message">
                {{contactUsErrors.message[0]}}
              </div>
              <div v-else></div>
            </div>
            <div class="col-lg-12 contact-input-button" >
                <b-button class="col-lg-3 contact-form-button" @click="handleSubmit" style="float:right;">Pošaljite</b-button>
            </div>
        </form>
      </div>
       
    </div>  
</template>
<script>
export default {
    props:{
      contactUsErrors: Object,
      form: Object
    },
    methods: {
        handleSubmit() {
         this.$emit('handle-submit', this.form)
        }
    }
}
</script>
<style>
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
  .contact-input-height{
    height: 104px;
  }
  .contact-input-button{
    margin-top: 50px;
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
      
     
      /* margin-top: 300px !important; */
      height: 100% !important;
      width: 95% !important;
      padding-left: 50px;
    }
  }
@media only screen and (max-width: 1024px) {
  .form{
    /* width: 100%;  */
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
}
</style>