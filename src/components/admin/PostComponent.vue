<template>
<div class="col-lg-5 m-auto post">
            <div v-for="postOne in post" :key="'post_title_'+postOne.id">
                <div class="mb-3 col-lg-9 file-inputs" v-if="postOne.post_title">
                    <h1>{{postOne.post_title}}</h1>
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
        <div v-for="textarea in section_title.textareas" :key="'textarea_'+textarea.id">
            <p>{{textarea.text}}</p>
        </div>
    </div>
    <div class="row">
    <button class="col-lg-2 btn btn-danger m-auto" @click="goBack">idi nazad</button>

    <router-link class="col-lg-2 btn btn-success m-auto" style="border-radius:0;"  :to="{'name': 'edit-post', params:{id: routeParam}}">uredi objavu</router-link>
    <div class="col-lg-2 m-auto" v-if="routeName !== '/blog/'+routeParam">
    <button class="col-lg-12 btn btn-danger " @click="deletePost(post[0].id)">Obriši</button>{{deletetPost}}
    </div>
    <div v-else></div>

    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../../store'
export default {
    computed:{
        ...mapGetters({post: 'BlogModule/post',deletetPost: 'BlogModule/deletetPost'}),
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
    store.dispatch('BlogModule/getPost', from.params.id)
        next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('BlogModule/emptyPost')
        next();

    }
}
</script>