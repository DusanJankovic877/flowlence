<template>
  <div class="home page">
      <Carousel/>
    <div class="about-margin">
      <About/>
    </div>
    <div class="services-margin">
      <ServicesComponent />
    </div>
    <div class="price-list-margin">
      <PriceListComponent/>
    </div>
    <div class="blog-margin">
      <h1>Blog</h1>
      <Blog/>
    </div>
  <div class="contact">
    <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135"><path fill="#dabebf" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div class="contact-info">
      <h1 class="title">Kontakt</h1>
      <router-link class="btn btn-secondary" to="/contact">Kontaktiraje nas</router-link>
    </div>
    <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dabebf" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  </div>
  </div> <!-- end of home -->
</template>
<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import About from '../views/About.vue'
import PriceListComponent from '../components/PriceListComponent.vue'
import Blog from '../views/Blog.vue'
import ServicesComponent from '../components/ServicesComponent.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    About,
    PriceListComponent,
    Blog,
    ServicesComponent,
  },
  computed:{
    fromRoute() {
        return this.$route.params.from;
    }
  }
}
</script>
<style>
  .home{
    margin-bottom: -310px !important;
  }
  .about-margin{
    margin-bottom: -210px;
  }
  .services-margin{
    margin-bottom: 100px;
  }
  .price-list-margin{
    margin-bottom: -160px;
  }
  .blog-margin{
    margin-top: 220px ; 
    background-color: #f2f2f2;
  }
  .blog-margin h1{
    color: #404040;
  }
  .contact{
    margin-top: -100px;
    margin-bottom: -350px !important;
    z-index: -1 !important;
  }
  .contact-info {
    background-color: #dabebf;
  }
  .contact-info{
    color: white !important;
  }
  .contact-info .btn{
    border-radius: 0;
    background-color: #314247;
    color: #d9d9d9;
  }
  
@media only screen and (max-width: 1292px){
  .contact{
    margin-bottom: 100px !important;
  }
}
@media only screen and (max-width: 1024px){
  .price-list-margin{
    margin-top: 65px;
    margin-bottom: -120px;
  }
  .blog-margin{
    margin-top: 150px !important; 
    margin-bottom: 100px !important; 
  }
  .contact{
    margin-bottom: -167px !important;
  }
  .home{
    margin-bottom: -70px !important;
  }
}
@media only screen and (max-width: 768px){
  .contact{
    margin-bottom: -125px !important;
  }
}
@media only screen and (max-width: 600px){
  .blog-margin{
    margin-top: 150px !important; 
    margin-bottom: 60px !important; 
  }
    .contact{
    margin-bottom: -100px !important;
  }
}
@media only screen and (max-width: 449px){
  .contact{
    margin-bottom: -80px !important;
  }
}
@media only screen and (max-width: 358px){
    .contact{
    margin-bottom: -70px !important;
  }
}
@media only screen and (max-width: 311px){
    .contact{
    margin-bottom: 10px !important;
  }
}
</style>