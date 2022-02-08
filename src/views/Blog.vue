<template>
<div class="full-width">
      <div class="image-blog-cover" v-if="currentRoutePath !== '/'">
      <div class="image-blog-cover-text col-lg-7">
        <h1>Blog</h1>
          <p>
            Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati
            potrebama Vašeg poslovanja.
          </p>
      </div>
      <img v-if="currentRoutePath !== '/'" class="responsive" src="../assets/3.jpg" alt="" style="visibility: hidden;">
    </div>
    
      <div class="col-lg-7 m-auto post">
        <div class="circles">
            <div v-for="post in posts" :key="'post_short_'+post.post_title.id" class="col-lg-4 krug blog-circle">
                <router-link class="krug"  :to="{'name': 'post', params:{id: post.post_title.id}}">
                  <div class="post-title" style="">
                      <h5 >{{post.post_title.post_title}}</h5>
                  </div>
                  <div class="blog-image">
                      <img 
                      :src="`http://127.0.0.1:8000/api/get-image/${post.image.name}`" 
                      alt="picture" 
                      >
                  </div>
                  <div class="mt-3">
                      <p>{{post.section_title.title}}</p>
                  </div> 
                </router-link>   
            </div>
        </div>
      </div>
      <!-- <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
</div>
</template>
<script>
import { 
  mapActions, 
  mapGetters } from 'vuex'
export default {
  data() {
    return{}
  },
  computed: {
     
        ...mapGetters({posts: 'BlogModule/posts'}),

    currentRoutePath() {
        return this.$route.path;
    }
  },
  methods:{
      ...mapActions({getPosts: 'BlogModule/getPosts',  emptyPosts: 'BlogModule/emptyPosts'})
  },
      created(){
        this.getPosts()
    },
    destroyed(){
        this.emptyPosts()
    }
}
</script>
<style >
.full-width{
  background-color: #f2f2f2 ;
  z-index: 100;
}
.image-blog-cover{
  background: url('../assets/Blog-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.411);
  position:relative;
}
.image-blog-cover-text{
  color: white;
  position: absolute;
  z-index: 10;
  margin:  4% 0% 0% 21%!important;
}

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
  .blog-image{
    height: 100px !important;
    overflow: hidden;

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
  .post-title{
    padding-top: 35px !important;
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
  .image-blog-cover-text{
    margin:  4% 4%!important;
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
  .image-blog-cover-text{
    margin:  4% 4%!important;
  }
  .image-blog-cover-text h1{
    font-size: 17px;
  }
  .image-blog-cover-text p{
    font-size: 12px;
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
  .image-blog-cover-text{
    margin:  4% 0% 0% 2%!important;
  }
}
@media only screen and (max-width: 320px){
  .blog-img{
    margin-bottom: -53px;
  }
  .image-blog-cover-text{
    color: white;
    position: absolute;
    z-index: 10;
    margin:  4% 0% 0% 21%!important;
  }
  .image-blog-cover-text{
    margin:  4% 4%!important;
  }

}
@media only screen and (max-width: 280px){
  .image-blog-cover-text{
    margin:  4% 0% 0% 2%!important;
  }
  .image-blog-cover-text h1{
    font-size: 15px;
  }
  .image-blog-cover-text p{
    font-size: 10px;
  }
}
</style>