<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
export default{
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
@font-face {
  font-family: "RobotoSlab-Medium";
  src: local("RobotoSlab-Medium"),
   url(./assets/fonts/Roboto_Slab/static/RobotoSlab-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "RobotoSlab-Bold";
  src: local("RobotoSlab-Bold"),
   url(./assets/fonts/Roboto_Slab/static/RobotoSlab-SemiBold.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p, a{
  
}
h1{
  font-family: 'RobotoSlab-Bold', sans-serif !important;
}




</style>
