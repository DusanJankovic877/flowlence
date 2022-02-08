<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand logo" to="/"></router-link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link class="nav-link active" to="/jolanda">Početna</router-link> 
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/jolanda/posts">Postovi</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/jolanda/create-post">Kreiraj Post</router-link>
          </li>
        </ul>
        <ul class="navbar-nav pt-3">
          <li class="nav-item">
              <p class="nav-link">{{loggedUser.name}}</p>
          </li>
          <li class="nav-item">
            <button class="nav-link" style="border:none; background-color: #F8F9FA;" @click="logout">Odjavi se</button>
          </li>
        </ul>
      </div>
    </div>
   
  </nav>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    methods:{
       logout(){
           this.$emit('get-logout')
       } 
    },
    props:{
        loggedUser: Object
    }
}
</script>
<style scoped>
.logo{
  margin: 0 auto;
  background-image: url('../../assets/svg/Flowlence-4.svg');
  background-repeat: no-repeat;
  width: 40px;
  height: 30px;
}
@media only screen and (max-width: 1280px){
  .logo{
    width: 200px;
  }
}
@media only screen and (max-width: 600px){
  .logo{
     width: 225px;
  }
}
@media only screen and (max-width: 280px){
  .logo{
     width: 195px;
     height: 25px;
  }
}
</style>