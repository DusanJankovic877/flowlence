<template>
    <div class="col-lg-7 m-auto post">
        <h1>Članak</h1>
        <div class="row">
            <div v-for="post in posts" :key="'post_'+post.post_title.id" class="col-lg-4 krug blog-circle">
                <router-link class="krug"  :to="{'name': 'admin-post', params:{id: post.post_title.id}}">
                    <div class="post-title" style="">
                        <h5 >{{post.post_title.post_title}}</h5>
                    </div>
                    <div v-for="image in post.section_titles.images" :key="'image_'+image.id"  >
                        <div class="blog-image">
                            <img 
                                :src="`http://127.0.0.1:8000/api/get-image/${image.name}`" 
                                alt="picture" 
                            >
                        </div>
                        <div class="mt-3">
                            <p>{{post.section_titles.title}}</p>
                        </div>
                    </div>
                </router-link>   
            </div>
        </div>

    </div>
</template>
<script>

import { mapGetters } from 'vuex'
import store from '../../store'
export default {
    computed:{
        ...mapGetters({posts: 'BlogModule/posts'})
    },
    beforeRouteEnter(from, to, next){
        store.dispatch('BlogModule/getPosts')
        next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('BlogModule/emptyPosts')
        if(this.$router.path === '/blog/'+this.$route.params.id){
        store.dispatch('emptyPostMessage')
        }
        store.dispatch('emptyPostMessage')
        next();
    }
}
</script>
<style>
    .responsive{
        width: 100%;
        height: auto;
    }
    .blog-circle{
        padding-top: 35px; text-align:center;
    }
    .blog-image{
        height: 100px; overflow:hidden;
    }
    .post{
        /* height: 580px; */
        margin-bottom: 50px !important;
        padding-top: 100px;
        padding-bottom: 100px;
        background-color: rgba(255, 248, 220, 0.479);
        
    }
    .post-title{
        padding-left:40px;
        padding-right:40px;
    }
    a:hover{
        color: #404040;
    }
    .post span{
        text-decoration: underline;
    }
    .post p{
        line-height: 30px;
        /* white-space: pre-wrap !important; */
    }
</style>