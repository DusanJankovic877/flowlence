<template>
  <div id="app">
    <Navbar/>
  <transition name="slide-fade" mode="out-in">
    <router-view/>
  </transition>
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
  },
  data(){
    return{
      show:true
    }
  }

  
}
</script>

<style>

@font-face {
  font-family: "RobotoSlab-Medium";
  src: local("RobotoSlab-Medium"),
   url(./assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "RobotoSlab-Bold";
  src: local("RobotoSlab-Bold"),
   url(./assets/fonts/Roboto_Slab/static/RobotoSlab-SemiBold.ttf) format("truetype");
}
#app {
  background-color: #F2F2F2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


p, a, label, .alert, button, .error-message{

  font-family: 'RobotoSlab-Medium', sans-serif !important; 
  /* font-family: "Linux Libertine", Georgia, Times, serif !important;  */

}
h1, h2, h3, h4, h5{


  font-family: 'RobotoSlab-Medium', sans-serif !important; 

  /* font-family: "Linux Libertine", Georgia, Times, serif !important;  */

}
button{
  border: none !important;
  border-radius: 0 !important;
}
/* .page{
  width:100%;
  box-sizing: border-box;

} */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}





</style>
