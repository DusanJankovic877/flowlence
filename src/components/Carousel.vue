<template>
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
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
@media only screen and (max-width: 1024px){
  .carousel-inner{
    /* height: 40vh !important; */
  /* bottom: 150px; */
}
  .carousel-caption{
    bottom: 10%;
    right: 0;
    left: 0;
    background:rgba(0, 0, 0, 0.57) !important;
    width: 60%;
    padding: 15px;
  }

}
@media only screen and (max-width: 600px){
  .carousel-inner{
    height: 19vh !important;
  /* bottom: 150px; */
}
      .carousel button{
        margin-bottom: 0 !important;
      }

  

  .carousel-caption{
    bottom: 0;
    right: 0;
    left: 0;
    background:rgba(0, 0, 0, 0.57) !important;
    width: 80%;
    padding: 5px;
    }
  .carousel-caption h5{
    font-size: 15px;

  }
  .carousel-caption p{
    font-size: 10px;
    

  }
  .carousel-caption a{
      font-size: 10px;
      line-height: 6px;
      height: 20px;
      margin-bottom: 15px;
  }
  .carousel-indicators button{
    /* margin: 0 215px ; */
  margin-bottom:75px !important;
color:black !important;
  width: 15px !important;
}
.carousel-caption{
  right: 0;
  left: 0;
  bottom: 10%;
  background:rgba(0, 0, 0, 0.57) !important;
  width: 70%;
  margin:0  auto;
}
}
@media only screen and (max-height: 823px){
  .carousel-inner{
    margin-bottom: -18px;

  }
  .carousel button{
    margin-bottom: 17px !important;

  }
    .carousel-indicators{
    margin: 0 !important;
    margin-bottom: 27px !important;
    height: 9px !important;

  }
  .carousel-caption h5, .carousel-caption p, .carousel-caption .btn{
    font-size: 6px;
    margin: 0;
    
  }
}
@media only screen and (max-height: 812px){
    .carousel-inner{
    margin-bottom: -21px;
    height: 18vh !important;
  }
  .carousel button{
    margin-bottom: 20px !important;
  }
  .carousel-indicators{
    margin: 0 !important;
    margin-bottom: 30px !important;
    height: 9px !important;
  }
}
@media only screen and (max-height: 736px){
  .carousel-inner{
    margin-bottom: -2px;
  }
  .carousel button{
    margin-bottom: 0px !important;
  }
  .carousel-indicators{
    margin-bottom: 15px !important;
  }
}
@media only screen and (max-height: 731px){
  .carousel-inner{
    margin-bottom: -3px;
  }
}
@media only screen and (max-height: 640px){
  .carousel-inner{
    margin-bottom: -2px;
  }
  .carousel-caption{
    margin-bottom: 5px;
  }
  .carousel-indicators{
    margin-bottom: 10px !important;
  }
}
@media only screen and (max-height: 568px){
  .carousel-inner{
    height:19vh !important;
    margin-bottom: -1px;
}
  .carousel-caption{
    margin-bottom: 0px;
  }
}
</style>