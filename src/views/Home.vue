<template>
  <div class="home">
    <Carousel/>
    <About/>
    <Services/>
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB26D" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div class="price-list col-lg-12">
      <div class="col-lg-7 m-auto">
        <h1>Procena cene usluga</h1>
        <p>Da saznate više o cenama kliknite na dugme više o cenama</p>
        <div class="row">
          <router-link class="prices-link col-lg-3" to="/price-list">
              <h1>Preduzetnik</h1>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </router-link>
          <router-link class="col-lg-3 m-auto prices-link" to="/price-list">
              <h1>DOO</h1>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </router-link>
          <router-link class="col-lg-3 prices-link " to="/price-list">
            <h1>Udruženje</h1>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </router-link>
        </div>
   

      </div>

    </div>
  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB26D" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <Blog/>
      <div class="contact">
    <h1>Kontakt</h1>
    <router-link class="btn btn-secondary" to="/contact">Kontaktiraje nas</router-link>

  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Blog from '../views/Blog.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    About,
    Services,
    Blog
  }
}
</script>
<style>
.prices-link{

    border-radius: 25em !important;
  text-decoration: none;
  
    background-color: white;
  padding: 60px 10px !important;
  color: #385663;
}

.price-list{
  background-color: #FFB26D;
  padding-bottom: 25px;

}
.price-list a, .contact a{
  border-radius: 0;
}
</style>