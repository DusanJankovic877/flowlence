<template>
  <div class="home">
    <Carousel/>
    <About/>
    <Services/>
    <div class="price-list">
      <h1>Cenovnik</h1>
      <p>Da saznate više o cenama kliknite na dugme više o cenama</p>
      <router-link class="btn btn-secondary" to="/price-list">više o cenama</router-link>
    </div>
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
.price-list a, .contact a{
  border-radius: 0;
}
</style>