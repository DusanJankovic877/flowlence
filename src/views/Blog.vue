<template>
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
</template>
<style >
.blog{
  margin-top: -100px !important; 
}
.blog-row{
  display: flex;
}
@media only screen and (max-width: 1024px){
  .blog{
    margin-top: 0 !important; 
}
.blog-row{
  display: inherit;
}
}
</style>