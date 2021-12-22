<template>
    <div class="col-lg-7 m-auto post" style="height: 500px;" >
        <div class="row">

            <div v-for="post in posts" :key="'post_'+post.post_title.id" class="col-lg-4 krug blog-circle" style="padding-top: 35px; text-align:center;">
             
                <div style="padding-left:40px;padding-right:40px;">
                    <h5 >{{post.post_title.post_title}}</h5>
                </div>
                <div v-for="image in post.section_titles.images" :key="'image_'+image.id"  >
                    <div style="height: 100px; overflow:hidden;">
                        <img 
                        :src="`http://127.0.0.1:8000/api/get-image/${image.name}`" 
                        alt="picture" 
                        style="width:100%;">
                    </div>
                    <div class="mt-3">
                        <p>{{post.section_titles.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return{

        }
    },
    computed:{
        ...mapGetters({posts: 'BlogModule/posts'})
    },
    methods:{
        ...mapActions({getPosts: 'BlogModule/getPosts'})
    },

    created(){
        this.getPosts()
    }
}
</script>
<style>
    .responsive{
        width: 100%;
        height: auto;
    }
    .second-image{

        overflow: hidden;
        max-height: 43vh !important;
        width: 100%;
        background-size: auto;
    }

    .post{
        background-color: rgba(255, 248, 220, 0.479);
        text-align:left;
    }
    .post span{
        text-decoration: underline;
    }
    .post p{
        line-height: 30px;
        /* white-space: pre-wrap !important; */
    }
</style>