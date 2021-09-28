<template>
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="111112000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/kafa2.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption  d-md-block">
            <h5>Zakažite konsultacije</h5>
            <p>Some representative placeholder content for the first slide.</p>
      
            <router-link class="btn btn-secondary" to="/contact">Zakažite konsultacije</router-link>

          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/naocare.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/3.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption  d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

    </div> <!-- carousel end-->  
</template>
<style>
.carousel-inner{
  
  height: 70vh !important;

}
.carousel-caption{
  right: 0;
  left: 0;
  bottom: 10%;
  background:rgba(0, 0, 0, 0.57) !important;
  width: 50%;
  margin:0  auto;
}
.carousel-indicators{
  margin-bottom: 60px;
}
.carousel-caption a{
  border-radius: 0 !important;
}
@media only screen and (max-height: 1366px){/*I pad pro */
  .carousel-inner{
    height: 400px !important;
    margin-bottom: -58px !important;
  }
  .carousel button{
    margin-bottom: 30px !important;
  }
  .carousel-caption h5, .carousel-caption p, .carousel-caption .btn{
    font-size: 18px;
    margin: 1px;
  }
    .carousel-indicators{
    margin: 0 !important;
    margin-bottom: 25px !important;
  }

}
@media only screen and (max-height: 1024px){ /*I-pad */
  .carousel-inner{
    height: 257px !important;
    margin-bottom: 50px !important;

  }
  .carousel button{
    margin-bottom: 0px !important;
  }
  .carousel-indicators{
    margin: 0 !important;
    margin-bottom: 5px !important;
  }
  .carousel-caption h5, .carousel-caption p, .carousel-caption .btn{
    font-size: 13px;
    margin: 1px;
    
  }
 
}
@media only screen and (max-height: 823px){ /* Pixel 2XL */
  .carousel-inner{
    margin-bottom: 0 !important;
    height: 137px !important;
  }
  .carousel-caption{
    padding: 5px;
    width:250px;
  }
    .carousel button{
    margin:0 3px !important;
  }
  .carousel-indicators{
    margin-bottom: -5px !important;
  }
  .carousel-caption h5, .carousel-caption p, .carousel-caption .btn{
    font-size: 8px;
    margin: 0;
  }
}
@media only screen and (max-height: 812px){ /* Iphone X */
    .carousel-inner{
    margin-bottom: 0 !important;
    height: 125px !important;
  }
  .carousel button{
    margin: 0 3px !important;
  }
  .carousel-indicators{
    margin: 0 auto -5px auto !important;
    width: 100px;
  }
}
@media only screen and (max-height: 736px){/* Iphone 6/7/8 plus*/ 
  .carousel-inner{
    height:138px !important;
    margin-bottom: 0px !important;
    
  }
  .carousel button{
    margin: 0 3px !important;
  }
  .carousel-indicators{
    margin: 0 auto -5px auto !important;
    width: 100px;
  }
}
@media only screen and (max-height: 731px){/* Pixel 2 */
  .carousel-inner{
    margin-bottom: -1px !important;
  }
  .carousel-indicators{
    margin-bottom: -3px !important;
  }
  .carousel-caption{
    padding: 5px;
    width:250px;
  }
}
@media only screen and (max-height: 720px){/*Surface Duo */
  .carousel-inner{
    height: 190px !important;
    margin-bottom: 40px !important;
  }
  .carousel button{
    margin-bottom: 0px !important;
  }
  .carousel-indicators{
    margin: 0 auto 6px auto !important;
  }
  .carousel-caption h5, .carousel-caption p, .carousel-caption .btn{
    font-size: 8px;
    margin: 1px;
    
  }
}
@media only screen and (max-height: 667px){/* Iphone 6/7/8 */
  .carousel-inner{
    height:125px !important;
    margin-bottom: 0px !important;
  }
  .carousel button{
    margin: 0 3px !important;
  }
  .carousel-indicators{
    margin: 0 auto -6px auto !important;
    width: 100px;
  }
}
@media only screen and (max-height: 640px){/* Galaxy  S5/Motorola G4 */
  .carousel-inner{
    height:120px !important;

  }
  .carousel-caption{
    padding: 5px;
    width:250px;
  }
    .carousel-indicators{
    margin: 0 auto -7px auto !important;
    width: 90px;
  }

}
@media only screen and (max-height: 568px){ /*iphone5/SE*/
  .carousel-inner{
    height:107px !important;
  }
  .carousel-caption{
    padding: 2px;
    width:230px;
  }

  .carousel .btn{
    padding: 2px !important;
  }
  .carousel-indicators{
    width: 90px;
  }

}
</style>