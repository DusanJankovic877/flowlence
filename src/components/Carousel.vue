<template>
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style="margin-top: 0px !important;">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" style="margin-top: 0px !important;">
        <div class="carousel-item active">
          <img src="../assets/kafa2.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption  d-md-block">
            <h5>Zakažite konsultacije</h5>
            <p>Some representative placeholder content for the first slide.</p>
      
            <router-link class="btn btn-secondary" to="/contact">Zakažite konsultacije</router-link>

          </div>
        </div>
        <div class="carousel-item" >
          <img src="../assets/naocare.jpg" class="d-block w-100" alt="a" >
          <div class="carousel-caption d-md-block">
            <h5>Procena cena Usluge</h5>
            <p>Da saznate više o proceni</p>
            <router-link class="btn btn-secondary" to="/price-list">Kliknite ovde</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/isecene-slike/Pozadina-2.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption  d-md-block">
            <h5>Blog</h5>
            <p>Detaljnije o člancima</p>
            <router-link class="btn btn-secondary" to="/blog">Kliknite ovde</router-link>

          </div>
        </div>
      </div>
      <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <div id="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>

        </div>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <div id="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </div>
      </button>

    </div> <!-- carousel end-->  
</template>
<style>
@media (max-width:540px){ /*iphone5/SE*/
  .carousel-caption{
    margin: 0 auto 0 auto;

    background:rgba(0, 0, 0, 0.57);
    padding: 2px;
    width:190px;
  }
  .carousel-caption h5{
    font-size: 12px !important;
    margin-bottom: 0;
  }
  .carousel-caption  p, .carousel-caption .btn{
    font-size: 10px !important;
    margin-bottom: 0;
  }
  .carousel .btn{
    padding: 2px;
  }
  .carousel-indicators{
    margin: 0 auto 0 auto;
    width: 90px;
  }

}
@media only screen and (max-width: 1280px){
    .carousel-caption{
    margin: 0 auto 0 auto;

    background:rgba(0, 0, 0, 0.57);
    padding: 2px;
    width:360px;
  }
  .carousel-caption h5{
    font-size: 18px ;
    margin: 5px 0;
  }
  .carousel-caption  p, .carousel-caption .btn{
    font-size: 15px ;
    margin-bottom: 5px;
    
  }
  .carousel-caption a{
    border-radius: 0 !important;
  }
  .carousel .btn{
    padding: 5px 10px;
  }
  .carousel-indicators{
    margin: 0 auto 0 auto;
    width: 90px;
  }

}
/* @media only screen and (min-width: 1281px){ */

  .carousel-caption  p, .carousel-caption h5{
    color:rgb(190, 190, 190) !important;
  }
  .carousel-caption{
    
    right: 0;
    left: 0;
    bottom: 10%;
    background:rgba(0, 0, 0, 0.57);
    width: 50%;
    margin:0  auto;
  }
  .carousel-caption a{
    border-radius: 0;
    
  }
/* } */




</style>