<template>
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/racunovodja.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption  d-md-block">
            <h5>Zakažite konsultacije</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <button class="btn btn-secondary">Zakažite konsultacije</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/racunovodja2.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/racunovodja.jpg" class="d-block w-100" alt="a">
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
  bottom: 40%;
  background:rgba(0, 0, 0, 0.57) !important;
  width: 50%;
  margin:0  auto;
}
.carousel-indicators{
  margin-bottom: 30px;
}
  .carousel-caption button{
 
border-radius: 0 !important;
  }
@media only screen and (max-width: 600px){
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
  .carousel-caption button{
      font-size: 10px;
      line-height: 6px;
      height: 20px;
  }
}
</style>