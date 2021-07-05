<template>
  <div class="home">
    <Carousel/>
    <About/>
    <Services/>

    <div class="price-list col-lg-12">
      <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBA922" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <div class="price-info ">
        <div class="col-lg-7 m-auto">

        <h1>Procena cene usluga</h1>
        <p>Da saznate više o cenama kliknite na dugme više o cenama</p>
        <div class="row">
            <div class="krug">
              <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h1>Preduzetnik</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>

          </router-link>
            </div>
          <div class="krug">
          <router-link class=" prices-link" to="/price-list">
              <div class="price-card-body">
              <h1>DOO</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </router-link>
          </div>
          <div class="krug">
          <router-link class="prices-link " to="/price-list">
            <div class="price-card-body">
            <h1>Udruženje</h1>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </router-link>
          </div>
        </div>
        </div><!-- end of row -->
      </div> <!-- end of col-lg-7 -->
      <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBA922" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div> <!-- end of price list -->
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
.home{
  margin-bottom: -310px !important;
}
.price-info{
  background-color: #FBA922;

}
.prices-link{
  text-decoration: none;
  color: #385663;
}
.prices-link:hover{
  color: white !important;
}

.krug{
    background-color: white;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;
}

.krug:hover {
  text-decoration: none;
  background-color: #385663;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;

}
.price-card-body{
  height: 320px;
  width: 320px;
  border-radius: 25em !important;
  padding: 93px 10px 0 10px;
}


.price-list a, .contact a{
  border-radius: 0;
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
  margin-bottom: -90px !important;
}
}
</style>