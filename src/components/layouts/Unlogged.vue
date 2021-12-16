<template>
    <nav class="navbar navbar-expand-lg navbar-light  sticky-top" >
      <div class="col-lg-7 m-auto">
          <ul class="navbar-nav nav-links phone-mail">
            <li class="nav-item">
              <a  class="nav-link" href="mailto:flowlence@gmail.com">
                <img src="../../assets/svg/telephone-fill.svg" alt="phone">
                flowlence@gmail.com
              </a>
            </li>
            &nbsp;
            <li class="nav-item">
              <a  class="nav-link" href="tel:+38163466371">
                <img src="../../assets/svg/envelope-fill.svg" alt="phone"> 
                +38163466371
              </a>
            </li>
          </ul>
        </div>

    <div class="container links-container col-lg-7 m-auto">
      <router-link class="navbar-brand logo"  to="/">Logo</router-link>
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