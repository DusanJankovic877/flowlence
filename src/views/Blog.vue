<template>
<div class="full-width">
  <img v-if="currentRoutePath !== '/'" class="price-list-img responsive" src="../assets/3.jpg" alt="">
    <div class="blog-component">


      <div class="blog col-lg-7 m-auto">
       
          
      <h1 class="title">Blog</h1>
        <div class="circles">
            <div class="krug blog-circle col-lg-12" style="">
              <h4>post title</h4>
              <img src="../assets/racunovodja.jpg" alt="image">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="krug blog-circle col-lg-12" style="">
              <h4>post title</h4>
              <img src="../assets/racunovodja.jpg" alt="image">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="krug blog-circle col-lg-12" style="">
              <h4>post title</h4>
              <img src="../assets/racunovodja.jpg" alt="image">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
    </div>
    </div>

  </div>
      <!-- <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
</div>
</template>
<script>
export default {
  data() {
    return{}
  },
  computed: {
    currentRoutePath() {
        return this.$route.path;
    }
  }
}
</script>
<style >
.blog-img{
  margin-bottom: 0px;
}
.blog-component{
    margin-bottom: 50px;

}
  .blog{
    position: relative;
    z-index: 1;
    margin-bottom: 70px ; 
    

  }
  .blog h1{
    margin: 50px 0;
   }
  .blog-row{
    display: flex;
  }
  .blog-circle{
  overflow: hidden;
  }
  .blog-circle h4{
    margin:20px 0;
  }
  .blog-circle img{
    width: 320px;
  }



@media only screen and (max-width: 1280px){

  .blog{
    width: 100%;
    margin-top: 0 !important; 
  }
  .blog-row{
    display: flex;
  }
  .blog-img{
  margin-bottom: -209px !important;
}

}
/* @media only screen and (max-width: 1024px){
  .blog-img{
  margin-bottom: -168px;
} 
} */

@media only screen and (max-width: 768px){

  .blog h1{
  margin-bottom: 20px
  }
    .circles{
    display: inherit !important;
  }
  .blog-img{
  margin-bottom: -126px;
}
}

@media only screen and (max-width: 540px){
.blog-img{
  margin-bottom: -88px;
}
}
@media only screen and (max-width: 414px){
.blog-img{
  margin-bottom: -68px;
}
}
@media only screen and (max-width: 375px){
.blog-img{
  margin-bottom: -62px;
}
}
@media only screen and (max-width: 360px){
.blog-img{
  margin-bottom: -59px;
}
}
@media only screen and (max-width: 320px){
.blog-img{
  margin-bottom: -53px;
}

}
</style>