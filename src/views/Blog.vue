<template>
<div class="full-width">

      <div class="blog col-lg-7 m-auto">
      <h1>Blog</h1>
        <div class="blog-row">
      <div class="card col-lg-3">
        <h4>post title</h4>
        <img src="../assets/racunovodja.jpg" alt="">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card col-lg-3 m-auto" >
        <h4>post title</h4>
        <img src="../assets/racunovodja.jpg" alt="">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card col-lg-3">
        <h4>post title</h4>
        <img src="../assets/racunovodja.jpg" alt="">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

  </div>
      <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
</div>
</template>
<style >
.blog{
position: relative;
  margin-top: 50px !important; 
  margin-bottom: 7px !important; 
  min-height: 830px !important;
}
.blog-row{
  display: flex;
}
@media only screen and (max-width: 1024px){
  .full-width{

    margin-bottom:-167px !important;
  }
  .blog{
    
    margin-top: 0 !important; 
  }
  .blog-row{
    display: flex;
  }
}
@media only screen and (max-width: 768px){
  .full-width{

    margin-bottom:-157px !important;
  }


}
@media only screen and (max-width: 414px){
  .full-width{

    margin-bottom:-80px !important;
  }
}


</style>