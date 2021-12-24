<template>
<div class="col-lg-7 m-auto create-post-form">
    <h1>editPost</h1>
    <form @submit.prevent="handleEditPost" method="POST" enctype="multipart/form-data">
<!-- {{imagesForPost}} -->

        <div class="mb-3 col-lg-9 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>
            
            <input type="text" class="form-control " id="blog-title" v-model="post.post_title.post_title">
            
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

        <div v-for="section_title in post.section_titles" :key="section_title.id">

        <div class="mb-3  row" v-for="(image, imageId) in section_title.images" :key="'image_'+imageId">

   
            <label for="formFileOne" class="form-label"><p>Slika br: {{image.id}}</p></label>
            <div class="col-lg-7 file-inputs">
                <!-- {{image}} -->
                <input name="img" :filename="`http://127.0.0.1:8000/api/get-image/${image.name}`" @change="previewFiles($event, image.id)" class="form-control " type="file" id="formFileOne" accept="image/*">

         
            <!-- <div v-for="imageE in imagesE" :key="'imageE_'+imageE.id"> -->
                <div class="row">

                    <div class="col-lg-6">
                    <p class="col-lg-2">
                        old image
                    </p>
                    <img 
                        :src="`http://127.0.0.1:8000/api/get-image/${image.name}`" 
                        alt="No image to display" 
                        style="width:70%;"
                    >
                    </div>
                                    <div class="col-lg-6">
                    <p class="col-lg-2">
                        new image
                    </p>
                    <img 
                        :src="imagesE[image.id - 1]" 
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
            <!-- <div class=" col-lg-1" v-if="imageId !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteImage(imageId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div> -->

            <!-- section titles to bind to -->
            <!-- <div class="col-lg-2">
                <div class="form-check" v-for="(sectionTitle, sectionTId) in blog.sectionTitles" :key="'imageSecionT_'+sectionTId">
                    <input class="form-check-input" type="radio" :name="'radio-input'+imageId" :id="'radio-input-'+imageId+sectionTId" :value="sectionTId" v-model="blog.images[imageId].belongsTo">
                    <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-input-'+imageId+sectionTId">
                        {{sectionTitle.title}}
                    </label>
                    <label class="form-check-label" :for="'radio-input-'+imageId+sectionTId" v-else>
                        Naslov sekcije
                    </label>
                </div>
                    <div v-if="errors.length">
                        <div v-for="(error, key) in errors" :key="key">
                            <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'images.'+imageId+'.belongsTo'">
                                {{errorItem[0]}}
                                </div>
                                <div v-else></div>
                            </span>
                        </div>
                    </div>
                    <div v-else></div>
            </div> -->
            <!-- <div class="col-lg-2">
                <div v-if="images.length === imageId+1" class="">
                <button @click="handleAddImage(images.length)" class="btn btn-success  ">
                    Dodaj novu sliku
                </button>
                </div>
                <div v-else class="col-lg-12"></div>
            </div> -->
            <!-- <div v-if="imagePreview" class="row mt-3">
                <img :src="imagePreview" alt="" style="width: 200px;">
            </div> -->
        
        </div>
        </div>
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
           imagesE: [
        
               ]
       } 
    },
    computed:{
        ...mapGetters({post: 'BlogModule/post', imagesForPost: 'BlogModule/imagesForPost'}),
        imagesToEdit(){
            const imagesToE = []
            this.post.section_titles.forEach(section_title => {
                section_title.images.forEach(image => {
                    imagesToE.push(image);
                });
            });
            console.log(imagesToE);
            return imagesToE;

        }
    },
    methods:{
        previewFiles(e, id){
            this.post.section_titles.forEach(sectionTitle => {
                sectionTitle.images.forEach(image => {
                    console.log(image);
                    this.imagesE.push({})
                });
            });
            e.target.files.forEach(file => {
                this.imagesE[id - 1] = URL.createObjectURL(file);
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