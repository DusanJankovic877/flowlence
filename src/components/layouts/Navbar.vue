<template>
    <nav class="navbar navbar-expand-lg navbar-dark  sticky-top">
                <div class="col-lg-7 m-auto">
          <div class="row info-row">
            <div class="col-lg-2 info-mail">
              <p>
              <img src="../../assets/svg/telephone.svg" alt="phone">
                &nbsp;flowlence@gmail.com
              </p>
            </div>
            <div class="info-phone col-lg-2 ">
              <p>
                <img src="../../assets/svg/envelope.svg" alt="phone"> 
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
              <router-link :class="this.$route.name == 'price-list'  ? 'nav-link active' :  'nav-link' " to="/price-list">Procena cene usluga</router-link>
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
.active{
    text-decoration: underline;
}
nav {
  display: block !important;
  background-color: #2B5877 !important;
  border-bottom: 3px solid #fba822;
}
.nav-links, .navbar-brand{
  padding-bottom: 20px;
}
nav p{
  color: white;
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
@media only screen and (max-width: 1024px){
    nav{
    padding: 22px;
  }
  .info-mail{
    margin-right: 100px;
  }
}
@media only screen and (max-width: 600px){
  nav{
    padding: 10px;
  }
}
</style>