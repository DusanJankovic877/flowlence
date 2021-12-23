<template>
<div class="col-lg-5 m-auto post">
    <div v-for="postOne in post" :key="'post_'+postOne.id">
        <h1>{{postOne.post_title}}</h1>
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
    <button class="col-lg-2 btn btn-danger" @click="goBack">idi nazad</button>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
    computed:{
        ...mapGetters({post: 'BlogModule/post'})
    },
    methods:{
        goBack(){
            this.$router.push('/posts');
        }
    },
    beforeRouteEnter(from, to, next){
    store.dispatch('BlogModule/getPost', from.params.id)
        next();
    },
    destroyed(){
        store.dispatch('BlogModule/emptyPost')
    }
}
</script>