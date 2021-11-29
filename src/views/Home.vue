<template>
  <div class="home">
    <Carousel/>
    <div class="about-margin">

    <About/>
    </div>
    <div class="services-margin">
      <ServicesComponent/>
    </div>
    <div class="price-list-margin">

    <PriceListComponent :fromRoute="fromRoute"/>
    </div>
    <div class="blog-margin">
    <Blog/>
    </div>
  <div class="contact">
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div class="contact-info">
      <h1 class="title">Kontakt</h1>
      <router-link class="btn btn-secondary" to="/contact">Kontaktiraje nas</router-link>
    </div>
  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  </div>
  </div> <!-- end of home -->
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import About from '../views/About.vue'
// import Services from '../views/Services.vue'
import PriceListComponent from '../components/PriceListComponent.vue'
import Blog from '../views/Blog.vue'
import ServicesComponent from '../components/ServicesComponent.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    About,
    // Services,
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
    margin-bottom: -160px;

  }
  .price-list-margin{
    margin-bottom: -260px;

  }
  .blog-margin{
    margin-top: 120px ; 
  }
  .contact{
    position: relative;
    margin-top: -100px;
  }
  .contact-info {
    background-color: #e6e6e6;
  }
  .contact-info{
    color: white !important;
  }
@media only screen and (max-width: 1024px){
  .price-list-margin{
    margin-bottom: -160px;

  }
  .blog-margin{
    margin-top: 50px !important; 
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
    margin-bottom: 0px !important;
  }
}
</style>