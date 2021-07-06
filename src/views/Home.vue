<template>
  <div class="home">
    <Carousel/>
    <About/>
    <Services/>
    <PriceListComponent/>
    <Blog/>
  <div class="contact">
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1194A8" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div class="contact-info">
      <h1>Kontakt</h1>
      <router-link class="btn btn-secondary" to="/contact">Kontaktiraje nas</router-link>

    </div>

  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1194A8" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  </div>
  </div> <!-- end of home -->
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import PriceListComponent from '../components/PriceListComponent.vue'
import Blog from '../views/Blog.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    About,
    Services,
    PriceListComponent,
    Blog,
  }
}
</script>
<style>
.home{
  margin-bottom: -310px !important;
}

.contact{
  margin-top: -100px;
}
.contact-info {
  background-color: #1194A8;
  color: white;
}
@media only screen and (max-width: 1024px){
.contact{
  margin-top: -50px;
  
}
.home{
  margin-bottom: -70px !important;
}
}
</style>