<template>
<div class="col-lg-7 m-auto create-post-form">
    <h1>editPost</h1>
    <form @submit.prevent="handleEditPost" method="POST" enctype="multipart/form-data">

        <div class="mb-3 col-lg-9 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>


            <input type="text" class="form-control " id="blog-title"  v-model="post.post_title">
       
            
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
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in this.post.section_titles" :key="'sectionTitle_'+sectionTId">
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
            <div v-if="sectionTitles.length === sectionTId+1"  class="section-title-button col-lg-2">
                
                <button @click="handleAddSectionTitle(sectionTitles.length)" class="btn btn-success s-title-button col-lg-12">
                    Dodaj nov naslov
                </button>
            </div>
            <div v-else class="col-lg-2"></div>
        </div>
        <!-- IMAGE -->
        <!-- {{post.section_titles.images}} -->


        <!-- <div v-for="section_title in post.section_titles" :key="section_title.id"> -->
            <div class="mb-3  row" v-for="(image, imageId) in imagesE" :key="'image_'+imageId">
                <label for="formFileOne" class="form-label"><p>Slika br: {{image.id ? image.id : image.formImageId}}</p></label>
                <div class="col-lg-7 file-inputs">
                    <input name="img" @change="previewFiles($event, image.id ? image.id : image.formImageId, image.section_title_id)" class="form-control " type="file" id="formFileOne" accept="image/*">
                    <div class="row">

                        <div class="col-lg-6">
                        <p :class="imagesEE[image.id ? image.id - 1 : image.formImageId - 1] ? 'col-lg-6 alert  alert-success' : 'col-lg-6 alert alert-danger'">
                            {{imagesEE[image.id ? image.id - 1 : image.formImageId - 1] ? 'new image' : 'old image'}}
                          
                        </p>
                        <img 
                            :src="imagesEE[image.id ? image.id - 1 : image.formImageId - 1] ? imagesEE[image.id ? image.id - 1 : image.formImageId - 1] : `http://127.0.0.1:8000/api/get-image/${image.name}`" 
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
                    <div class="form-check" v-for="(sectionTitle) in sectionTitles" :key="'imageSecionT_'+sectionTitle.id">
                        <!-- {{sectionTitle.images}} -->
                        <div v-if="sectionTitle.images.length">
                            {{image.section_title_id}}
                            <p>nije 0</p>
                        </div>
                        <div v-else> jeste 0</div>
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
              
                    <!-- {{imagesE.length === image.id - 1}} -->
                    <div v-if="imagesE.length === image.id - 1" class="">
                    <button @click="handleAddImage(image.id)" class="btn btn-success  ">
                        Dodaj novu sliku
                    </button>
                    <!-- {{imagesE}} -->
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
import { mapActions, mapGetters } from 'vuex';
import store from '../../store'
export default {
    data() {
       return{
         
           imagesToEdit:[],
           imagesEE: [
               
               ],
               empty: ''
       } 
    },
    computed:{
        ...mapGetters({post: 'BlogModule/post', imagesE: 'BlogModule/imagesE', postTitle: 'BlogModule/post_title',sectionTitles: 'BlogModule/sectionTitles'}),
    },
    methods:{
        ...mapActions({setEditPostImage: 'BlogModule/setEditPostImage'}),
        previewFiles(e, id, sectionTitleId){
            console.log(e.target.files);
            this.sectionTitles.forEach(sectionTitle => {
                sectionTitle.images.forEach(image => {
                    this.empty = image
                        this.imagesEE.push()
                        this.empty = ''   
                });
            });
                  
            e.target.files.forEach(file => {
                const fileUrl = URL.createObjectURL(file)
                this.imagesEE[id - 1] = fileUrl;
                this.imagesToEdit[id - 1] = {file: file, id :id, sId: sectionTitleId}
            });
            console.log('images to edit ', this.imagesToEdit[id - 1]);

        },
        async handleEditPost(){
            // console.log('edit', this.post)
            let data = new FormData();
            this.imagesToEdit.forEach((image) => {
            
                data.append('images[]', image.file);
            });
            // console.log('images to edit ', this.imagesToEdit, 'post images ', this.post);
            
            // const post = this.post
            const imagesToEdit = []

            this.imagesToEdit.forEach(imageToEdit => {
                console.log('imageToEdit', imageToEdit, this.imagesE);
                const sectionId = this.imagesE.find(x => x.id === imageToEdit.formImageId)
                console.log('sectionId', sectionId);
                const sectionTitleId = imageToEdit.sId ? imageToEdit.sId : sectionId.section_title_id;
                // const imageToReplaceId = '';
                imagesToEdit.push({imageName: imageToEdit.file.name, imageToReplaceId: imageToEdit.id ? imageToEdit.id : '', sectionTitleId: sectionTitleId})
            });
                console.log('imagesToEdit', imagesToEdit, 'imagese', this.imagesE);
            // await this.setEditPostImage({data, post, imagesToEdit})

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
          console.log(imagesLength);
            this.imagesE.push({formImageId: imagesLength + 1 })
        },
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