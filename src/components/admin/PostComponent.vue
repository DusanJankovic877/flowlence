<template>
<div class="col-lg-5 m-auto single-post">
    <!-- {{post.post_title.id}} -->
        <div class="col-lg-12 alert alert-success mt-5" v-if="postMessage" >
           <p>
               {{postMessage}}
            </p> 
        </div>
            <div v-for="postOne in post" :key="'post_title_'+postOne.id">
                <div class="mb-3 col-lg-12 file-inputs" v-if="postOne.post_title">
                    <h1 style="text-align: center;">{{postOne.post_title}}</h1>
                </div>
            </div>
    <div v-for="section_title in post.section_titles" :key="'sectionTitle_'+section_title.id">
        <h3>{{section_title.title}}</h3>
        <div v-for="image in section_title.images" :key="'image_'+image.id">
               <img 
                    :src="`http://127.0.0.1:8000/api/get-image/${image.name}`" 
                    alt="picture" 
                    style="width:100%;"
                >
        </div>
        <div v-for="textarea in section_title.textareas" :key="'textarea_'+textarea.id" style="white-space: pre-wrap !important;">
            <p>{{textarea.text}}</p>
        </div>
    </div>
    <div class="row">
        <button class="col-lg-2 btn  m-auto" style="background-color: #e6b800; color: #808080;" @click="goBack">idi nazad</button>
        <div class="col-lg-3 m-auto" v-if="routeName !== '/blog/'+routeParam">
            <router-link class="col-lg-12 btn btn-success m-auto" style="border-radius:0;"  :to="{'name': 'edit-post', params:{id: routeParam}}">uredi objavu</router-link>
        </div>
        <div class="col-lg-3 m-auto" v-else></div>
        <div class="col-lg-2 m-auto" v-if="routeName !== '/blog/'+routeParam">
            <button class="col-lg-12 btn btn-danger " @click="deletePost(post.post_title.id)">Obriši</button>{{deletetPost}}
        </div>
        <div class="col-lg-2 m-auto" v-else></div>
        
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../../store'
export default {
    computed:{
        ...mapGetters({post: 'BlogModule/post',deletetPost: 'BlogModule/deletetPost', postMessage: 'postMessage'}),
        routeParam(){
            return this.$route.params.id
        },
        routeName(){
            return this.$route.path
        }
    },
    methods:{
        ...mapActions(['BlogModule/deletePost']),
        goBack(){
            console.log(this.routeName !== '/blog/'+this.routeParam);
          
            this.$router.push(this.routeName !== '/blog/'+this.routeParam ? '/jolanda/posts' : '/blog');
        },
        deletePost(id){
            store.dispatch('BlogModule/deletePost', id)
            this.$router.push('/jolanda/posts')
            // console.log(this.post[0].id);
            // this.deletePost(id)
        }

    },
    beforeRouteEnter(from, to, next){
        //  store.dispatch('BlogModule/emptyPost')
        store.dispatch('BlogModule/getPost', from.params.id)
        next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('BlogModule/emptyPost')
        store.dispatch('emptyPostMessage')
        next();
    }
}
</script>
<style>
.single-post{
    padding: 0 50px;
            background-color: rgba(255, 248, 220, 0.479);
}
</style>