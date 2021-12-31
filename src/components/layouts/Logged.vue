<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Admin Panel</router-link> 
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