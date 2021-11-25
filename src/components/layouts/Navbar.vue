<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isLogged">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Admin Panel</router-link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link class="nav-link active" to="/">Početna</router-link> 
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/posts">Postovi</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/create-post">Kreiraj Post</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <ul class="navbar-nav pt-3">
          <li class="nav-item">
              <p class="nav-link">ulogovani korisnik</p>
          </li>
          <li class="nav-item">
            <button class="nav-link" style="border:none; background-color: #F8F9FA;" @click="logout">Odjavi se</button>
              <!-- <router-link class="nav-link" to="" @click="logout">Odjavi se</router-link> -->
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light  sticky-top" v-else>
      <div class="col-lg-7 m-auto">
        <div class="info-row">
          <div class="col-lg-2 info-mail">
            <p>
            <img src="../../assets/svg/telephone-fill.svg" alt="phone">
              &nbsp;flowlence@gmail.com
            </p>
          </div>
          <div class="info-phone col-lg-2 ">
            <p>
              <img src="../../assets/svg/envelope-fill.svg" alt="phone"> 
              &nbsp;+38163466371
              </p>
          </div>
        </div>
      </div>
    <div class="container links-container col-lg-7 m-auto">
      <router-link class="navbar-brand"  to="/">Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-links">
          <li class="nav-item">
            <router-link  :class="this.$route.name == '/'  ? 'nav-link active' :  'nav-link' "  to="/">Početna</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="this.$route.name == 'about'  ? 'nav-link active' :  'nav-link' " to="/about">O nama</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="this.$route.name == 'services'  ? 'nav-link active' :  'nav-link' " to="/services">Usluge</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="this.$route.name == 'price-list'  ? 'nav-link active' :  'nav-link' " to="/price-list">
              Procena cena usluge   
              <b-dropdown id="dropdown-1"  right class="m-2">
                <b-dropdown-item><router-link class="prices-link" to="/price-list/entrepreneur">Preduzetnik</router-link></b-dropdown-item>
                <b-dropdown-item><router-link class="prices-link" to="/price-list/entrepreneur" style="width: 100px !important">DOO</router-link></b-dropdown-item>
                <b-dropdown-item><router-link class="prices-link" to="/price-list/entrepreneur">Udruženje</router-link></b-dropdown-item>
              </b-dropdown> 
              </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="this.$route.name == 'blog'  ? 'nav-link active' :  'nav-link' " to="/blog">Blog</router-link>
          </li>
          <li  class="nav-item">
            <router-link :class="this.$route.name == 'contact'  ? 'nav-link active' :  'nav-link' " to="/contact">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
       

    

</template>
<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
      return{
         
      }
  },
  computed:{
            ...mapGetters({isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser'})
  },
  methods:{
    ...mapActions({getLogout: 'AdminModule/getLogout'}),
      async logout(){
        
        await this.getLogout(localStorage.token)
      }
    }
  }

</script>
<style>

.active{
    text-decoration: underline;
}
nav {
  display: block !important;
  background-color: #e6e6e6 !important;

}
.nav-links, .navbar-brand{
  padding-bottom: 20px;
}

.info-row{
  margin-right: 0;
}
.info-row p{
  margin-left: 2px;
  margin-bottom: 0;
  display: flex;
}
.info-mail, .info-phone{
 text-align: left;
 margin-right: 20px ;
}
.links-container{
  padding: 0;
}
.nav-links{
  margin-left: auto;
}
.navbar-toggler{
    border: none;
    box-shadow: none !important;
}
.navbar-toggler-icon{
  
  color: black !important;
}
.text, .option{
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  font-size:16px !important;

}
.expand, .dropdown-label{
  background-color: #4d4d4d ;
}
#dropdown-1{
  margin: 0 !important;
}
.dropdown-menu{
  background-color: #e6e6e6 !important;
}
.dropdown-item:hover{
  background-color: #4d4d4d;
}

#dropdown-1__BV_toggle_:hover{
  background-color: #4d4d4d;
  color: #f2f2f2
}
#dropdown-1__BV_toggle_{
  background-color: #e6e6e6;
  margin: 0 !important;
  padding: 0 7px;
  border: none;
  box-shadow: none !important;
  color: #4d4d4d;
}
@media only screen and (max-width: 1024px){
    nav{
    padding: 22px;
  }
  .info-mail{
    margin-right: 100px;
  }
  ul li a {
    padding:8px 4px 0 4px !important;
  }
}
@media only screen and (max-width: 600px){
  nav{
    padding: 10px;
  }
}
</style>