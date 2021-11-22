<template>

<div class="full-width-contact">
  <img class="responsive" src="../assets/3.jpg" alt="">

    <div class="contact-us  price-list-component col-lg-12">
        <ContactForm class="contact-form"/>
    </div>
      <!-- <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
</div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue'
export default {
    components:{
        ContactForm
    },
    data() {
        return{

        }
    }
}
</script>

<style>

  .contact-form{
  min-height: 700px;
  /* margin-bottom: 250px !important; */
  }

/* .contact-us{
    margin-bottom: 450px;
    padding-bottom: 50px;
} */
.responsive{
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 1024px){

  .full-width-contact{
    margin-bottom: 567px !important;
  }

}
@media only screen and (max-width: 768px){

  .contact-us{
     
    margin-bottom: 750px !important;
  }
}

@media only screen and (max-width: 600px){
    .contact-us{
    margin-bottom: -370px !important;
  }
}
</style>