<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" >
    <div class="container links-container col-lg-7 m-auto">
      <router-link class="navbar-brand logo"  to="/"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-links right-links">
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
                <b-dropdown-item class="drop-down-li"><router-link class="prices-link drop-down-link" :to="{name: 'price-list', params:{selectedOption:'entrepreneur'}}" >Preduzetnik</router-link></b-dropdown-item>
                <b-dropdown-item><router-link class="prices-link drop-down-link" :to="{name: 'price-list', params:{selectedOption:'doo'}}" style="width: 100px !important">DOO</router-link></b-dropdown-item>
                <b-dropdown-item><router-link class="prices-link drop-down-link" :to="{name: 'price-list', params:{selectedOption:'association'}}">Udruženje</router-link></b-dropdown-item>
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
<style>
.logo{
  margin: 0 auto;
  background-image: url('../../assets/logos/Flowlence-w-3.svg');
  background-repeat: no-repeat;
  width: 315px;
  height: 25px;
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