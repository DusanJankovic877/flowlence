<template>
<div class="col-lg-7 m-auto create-post-form">
    <h1>editPost</h1>
    <form @submit.prevent="handleEditPost" method="POST" enctype="multipart/form-data">
<!-- {{imagesForPost}} -->

        <div class="mb-3 col-lg-9 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>
            
            <input type="text" class="form-control " id="blog-title" v-model="post_title">
            
            <!-- <div  v-if="errors.length">
                <div v-for="(error, key) in errors" :key="key">
                    <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                        <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'postTitle'">
                        {{errorItem[0]}}
                        </div>
                    </span>
                </div>
             </div> -->
            <!-- <div v-else></div> --> 
        </div>
                <!-- section title -->
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in post.section_titles" :key="'sectionTitle_'+sectionTId">
            <label for="blog-section-title"  class="form-label col-lg-9">Naslov sekcije br:{{sectionTId}}</label>
            <div class="col-lg-7 file-inputs">

            <input type="text" class="form-control" id="blog-section-title" v-model="sectionTitle.title" placeholder="Naslov sekcije">

            <!-- <div  v-if="errors.length">
                <div v-for="(error, key) in errors" :key="key">
                    <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                        <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'sectionTitles.'+sectionTId+'.title'">
                        {{errorItem[0]}}
                        </div>
                    </span>
                </div>
            </div>
            <div v-else></div> -->
            </div>
            <div class=" col-lg-1" v-if="sectionTId !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteSecetionTitle(sectionTId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>
            <div v-if="post.section_titles.length === sectionTId+1"  class="section-title-button col-lg-2">
                
                <button @click="handleAddSectionTitle(post.section_titles.length)" class="btn btn-success s-title-button col-lg-12">
                    Dodaj nov naslov
                </button>
            </div>
            <div v-else class="col-lg-2"></div>
        </div>
        <!-- IMAGE -->
        <!-- {{post.section_titles.images}} -->
        <!-- <div v-for="imageP in imagesForPost" :key="imageP.id">

                <input name="img" @change="previewFiles(imageP, imageId)" class="form-control " type="file" id="formFileOne" accept="image/*">
        </div> -->

        <!-- <div v-for="section_title in post.section_titles" :key="section_title.id"> -->

            <div class="mb-3  row" v-for="(image, imageId) in imagesE" :key="'image_'+imageId">

    
                <label for="formFileOne" class="form-label"><p>Slika br: {{image.id}}</p></label>
                <div class="col-lg-7 file-inputs">
                    <!-- {{image}} -->
                    <!-- <div v-for="imagesForPost"></div> -->
                    <input name="img" @change="previewFiles($event, image.id)" class="form-control " type="file" id="formFileOne" accept="image/*">

            
                <!-- <div v-for="imageE in imagesE" :key="'imageE_'+imageE.id"> -->
                    <div class="row">

                        <div class="col-lg-6">
                        <p :class="imagesEE[image.id - 1] ? 'col-lg-6 alert  alert-success' : 'col-lg-6 alert alert-danger'">
                            {{imagesEE[image.id - 1] ? 'new image' : 'old image'}}
                        </p>
                        <img 
                            :src="imagesEE[image.id - 1] ? imagesEE[image.id - 1] : `http://127.0.0.1:8000/api/get-image/${image.name}`" 
                            alt="No image to display" 
                            style="width:70%;"
                        >
                        </div>
                                 
                    </div>
                <!-- </div> -->
                    <!-- <div v-if="errors.length">       
                        <span  v-for="(error, key) in errors" :key="key">                    
                            <div v-for="(errorItems, innerKey) in error" :key="innerKey" >
                                    <span v-if="innerKey === 'images.'+imageId">
                                        <div v-for="errorItem in errorItems" :key="errorItem.id" class="alert alert-danger col-lg-12  mb-1" role="alert">
                                            {{errorItem}}
                                        </div>
                                    </span>
                            </div>
                        </span>
                    </div>

                    <div v-else></div> -->
                </div>
                <div class=" col-lg-1" v-if="image.id - 1 !== 0">
                    <button class="btn btn-danger col-lg-12" @click="handleDeleteImage(image.id)">Obrisi</button>
                </div>
                <div v-else class="col-lg-1"></div>

                <!-- section titles to bind to -->
                <div class="col-lg-2">
                    <div class="form-check" v-for="(sectionTitle) in post.section_titles" :key="'imageSecionT_'+sectionTitle.id">
                        <!-- {{sectionTitle.images}} -->

                        <input class="form-check-input" type="radio" :name="'radio-input'+image.id+''+sectionTitle.id" :id="'radio-input-'+image.id+''+sectionTitle.id" :value="sectionTitle.id" v-model="image.section_title_id">
                        <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-input-'+image.id+''+sectionTitle.id">
                    
                            {{sectionTitle.title}}
                        </label>
                        <label class="form-check-label" :for="'radio-input-'+image.id+''+sectionTitle.id" v-else>
                            Naslov sekcije
                        </label>
                    </div>
                    <!--    <div v-if="errors.length">
                            <div v-for="(error, key) in errors" :key="key">
                                <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                    <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'images.'+imageId+'.belongsTo'">
                                    {{errorItem[0]}}
                                    </div>
                                    <div v-else></div>
                                </span>
                            </div>
                        </div>
                        <div v-else></div>-->
                </div> 
               
                <div class="col-lg-2">
                    <!-- {{imagesToShow.length}} -->
                    <div v-if="imagesE.length === image.id" class="">
                    <button @click="handleAddImage(imagesE.length)" class="btn btn-success  ">
                        Dodaj novu sliku
                    </button>
                    </div>
                    <div v-else class="col-lg-12"></div>
                </div>
                <!-- <div v-if="imagePreview" class="row mt-3">
                    <img :src="imagePreview" alt="" style="width: 200px;">
                </div> -->
            </div>
            
        <!-- </div> -->
        <button>Pošalji</button>
        <button class="col-lg-2 btn btn-danger m-auto" @click="goBackToPost">idi nazad</button>
    </form>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import store from '../../store'
export default {
    data() {
       return{
    
           imagesEE: [
               
               ],
               empty: ''
       } 
    },
    computed:{
        ...mapGetters({post: 'BlogModule/post', imagesForPost: 'BlogModule/imagesForPost', imagesE: 'BlogModule/imagesE', post_title: 'BlogModule/post_title'}),
        // imagesToShow(){
        //    if(this.imagesE.length === 0){

        //        console.log('true');
        //        this.post.section_titles.forEach(sectionTitle => {
        //            sectionTitle.images.forEach(image => {
        //               this.imagesE.push(image);
        //            });
        //        });
               
        //    }
        //    return this.imagesE
        // }
        // imagesToEdit(){
        //     const imagesToE = []
        //     this.post.section_titles.forEach(section_title => {
        //         section_title.images.forEach(image => {
        //             imagesToE.push(image);
        //         });
        //     });
        //     console.log(imagesToE);
        //     return imagesToE;

        // }
    },
    methods:{
        previewFiles(e, id){
            this.post.section_titles.forEach(sectionTitle => {
                sectionTitle.images.forEach(image => {
                    this.empty = image
                        this.imagesEE.push()
                        this.empty = ''
                     
                });
            });
                  
            e.target.files.forEach(file => {
                // this.imagesE[id - 1] = URL.createObjectURL(file);
                const fileUrl = URL.createObjectURL(file)
                this.imagesEE[id - 1] = fileUrl;
            });

        },
        handleEditPost(){
            console.log('edit');
        },
        goBackToPost(){
            this.$router.push(`/posts/${this.$route.params.id}`);
        },
        handleAddSectionTitle(id){
            this.post.section_titles.push({sectionTId: id++, title: '', belongsTo: ''})
        },
        handleDeleteSecetionTitle(k){
            this.post.section_titles.splice(k, 1);
        },
        handleAddImage(imagesLength){
            // console.log('imagesLength '+imagesLength, 'IP '+this.imagesForPost);
            // this.imagesForPost.push({imageId: this.imageCounter++, belongsTo: ''})
            this.imagesE.push({})
            console.log('imagesE '+this.imagesE, imagesLength);

        },
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