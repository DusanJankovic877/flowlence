<template>
<div class="col-lg-7 m-auto create-post-form">
    <h1>editPost</h1>
    <form @submit.prevent="handleEditPost" method="POST" enctype="multipart/form-data">
   <!-- {{post_title}} -->
    <!-- <label for="blog-title" class="form-label">Naslov posta</label>
    <input type="text" class="form-control " id="blog-title"  v-model="post_title"> -->
    {{post.images}}
        <div v-for="(postOne, id) in post" :key="'post_title_'+id">
            <div class="mb-3 col-lg-9 file-inputs" v-if="postOne.post_title">
                <label for="blog-title" class="form-label">Naslov posta</label>
                <input type="text" class="form-control " id="blog-title"  v-model="postOne.post_title">
            </div>
        </div>
        <!-- <div class="mb-3 col-lg-9 file-inputs">
           

            <input type="text" class="form-control " id="blog-title"  v-model="post.post_title"> -->
       
            
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
        <!-- </div> -->
                <!-- section title -->
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in this.post.section_titles" :key="'sectionTitle_'+sectionTId">

            <label for="blog-section-title"  class="form-label col-lg-9">Naslov sekcije br:{{sectionTitle.formId}}</label>
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
            <div class=" col-lg-1" v-if="sectionTitle.formId !== 1">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteSecetionTitle(sectionTId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>

            
            <div v-if="post.section_titles.length === sectionTId +1"  class="section-title-button col-lg-2">
                <button @click="handleAddSectionTitle(post.section_titles.length)" class="btn btn-success s-title-button col-lg-12">
                    Dodaj nov naslov
                </button>
            </div>
            <div v-else class="col-lg-2"></div>
        </div>
        <!-- IMAGE -->
        <div class="mb-3  row" v-for="(image, i) in post.images" :key="'image_'+image.formId">
    
            <label for="formFileOne" class="form-label"><p>Slika br: {{image.formId}}</p></label>
            
            <div class="col-lg-7 file-inputs">
                <input name="img" @change="previewEditedFiles($event, i, image)" class="form-control " type="file" id="formFileOne" accept="image/*">
                <div class="row">
                    <div class="col-lg-6">
                        <p :class="newImages[i]? 'col-lg-6 alert  alert-success' : 'col-lg-6 alert alert-danger' ">
                            {{newImages[i]  === undefined ? 'old image' : 'new image' }}
                        </p>
                        <img 
                            :src="newImages[i] ? newImages[i] : `http://127.0.0.1:8000/api/get-image/${image.name}`" 
                            alt="No image to display" 
                            style="width:70%;"
                        >
                    </div>
                </div> 

            </div>
            <div class=" col-lg-1" v-if="image.formId !== 1">
                <button class="btn btn-danger col-lg-12" @click="deleteEditImage(image.formId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>

            <!-- section titles to bind to -->
            <div class="col-lg-2">
                <div class="form-check" v-for="(sectionTitle) in post.section_titles" :key="'imageSecionT_'+sectionTitle.formId">
    
                    <input class="form-check-input" type="radio" :name="'image-radio-input-'+image.formId+''+sectionTitle.formId" :id="'image-radio-input-'+image.formId+''+sectionTitle.formId" :value="sectionTitle.id ? sectionTitle.id : sectionTitle.formId" v-model="image.section_title_id">
                    <label class="form-check-label" :for="'image-radio-input-'+image.formId+''+sectionTitle.formId">
                        <p v-if="sectionTitle.title">
                            {{sectionTitle.title}}
                        </p>
                        <p v-else>Naslov sekcije</p>
                    </label>
                </div>
            </div>
            <div class="col-lg-2" style="float:right !important;" >
                <button @click="handleAddImage(post.images.length)" class="btn btn-success" v-if="post.images.length - 1 === i">
                    Dodaj novu sliku
                </button>
            </div>

        </div>
        <!-- textarea -->
        <div :class="textarea.id % 2 === 0? 'mb-3  odd-text-areas' : 'mb-3  even-text-areas'" v-for="(textarea, i) in post.textareas" :key="'textarea_edit_'+textarea.formId">
            <label for="exampleFormControlTextarea1" class="form-label col-lg-8">Textarea{{textarea.formId}}</label>
            <div class="div-text row">

                <div class="col-lg-7">
                    <textarea v-model="textarea.text" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
        
                <div class="delete-button  col-lg-1" v-if="textarea.formId !== 1">
                    <button class="btn btn-danger" @click="handleDeleteTextarea(textarea.formId)">Obrisi</button>
                </div>
                <div v-else class="col-lg-1"></div>

                <!-- section titles to bind to -->
                <div class="col-lg-2">
                    <div class="form-check" v-for="(sectionTitle) in post.section_titles" :key="'textareaSecionT_'+sectionTitle.formId">
        
                        <input class="form-check-input" type="radio" :name="'textarea-radio-input-'+textarea.formId+''+sectionTitle.formId" :id="'textarea-radio-input-'+textarea.formId+''+sectionTitle.formId" :value="sectionTitle.id ? sectionTitle.id : sectionTitle.formId" v-model="textarea.section_title_id">
                        <label class="form-check-label" :for="'textarea-radio-input-'+textarea.formId+''+sectionTitle.formId">
                            <p v-if="sectionTitle.title">
                                {{sectionTitle.title}}
                            </p>
                            <p v-else>Naslov sekcije</p>
                        </label>
                    </div>
                </div>
                <div v-if="post.textareas.length -1 === i" class="col-lg-2">
                    <button class="btn btn-success" @click="handleAddTextarea(post.textareas.length)">Dodaj novo polje</button>
                </div>
                <div v-else class="col-lg-2"></div>
            </div>
        </div>

      

            <!-- <div class="col-lg-10 mb-5"> -->
            <!-- </div> -->
            <!-- <div class="mb-3  row" v-for="(image, imageId) in imagesE" :key="'image_'+imageId"> -->
                <!-- <label for="formFileOne" class="form-label"><p>Slika br: {{image.id ? image.id : image.formImageId}}</p></label>
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
                                 
                    </div> -->
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
                <!-- </div> -->
<!--   
                <div class=" col-lg-1">
                    <button class="btn btn-danger col-lg-12" @click="deleteEditImage(imageId)">Obrisi</button>
                </div> -->
                <!-- <div v-else class="col-lg-1"></div> -->

                <!-- section titles to bind to -->
                <!-- <div class="col-lg-2"> -->
                    <!-- <div class="form-check" v-for="(sectionTitle) in post.section_titles" :key="'imageSecionT_'+sectionTitle.id">
                        <input class="form-check-input" type="radio" :name="'radio-input'+image.id+''+sectionTitle.id" :id="'radio-input-'+image.id+''+sectionTitle.id" :value="sectionTitle.id" v-model="image.section_title_id">
                        <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-input-'+image.id+''+sectionTitle.id">
                            {{sectionTitle.title}}
                        </label>
                        <label class="form-check-label" :for="'radio-input-'+image.id+''+sectionTitle.id" v-else>
                            Naslov sekcije
                        </label>
                    </div> -->
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
                <!-- </div>  -->
               
                <!-- <div class="col-lg-2"> -->
<!--               
                   {{imagesLastCount.id +' '+ image.id}} -->
                    <!-- <div v-if="imagesE.length === image.id ? image.id - 1 : image.formImageId" class="">
                    <div v-if="imagesLastCount.id === image.id ? image.id : image.formImageId" class="">
                    <button @click="handleAddImage(imagesE.length)" class="btn btn-success  ">
                        Dodaj novu sliku
                    </button>
            
                    </div>
                    <div v-else class="col-lg-12"></div>
                </div> -->
                        <!-- {{imagesE}} -->
                <!-- <div v-if="imagePreview" class="row mt-3">
                    <img :src="imagePreview" alt="" style="width: 200px;">
                </div> -->
            <!-- </div> -->

        <div :class="textarea.id % 2 === 0? 'mb-3  odd-text-areas' : 'mb-3  even-text-areas'" v-for="textarea in textareas" :key="'textarea_edit_'+textarea.id">
            <label for="exampleFormControlTextarea1" class="form-label col-lg-8">Textarea{{textarea.formId}}</label>
            <div class="div-text row">
                <div class="col-lg-7">
                    <textarea v-model="textarea.text" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <!-- <div v-if="errors.length">
                        <div v-for="(error, key) in errors" :key="key">
                            <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'textareas.'+textareaId+'.text'">
                                {{errorItem[0]}}
                                </div>
                                <div v-else></div>
                            </span>
                        </div>
                    </div>
                    <div v-else></div> -->
                </div>
                <div class="delete-button  col-lg-1" v-if="textarea.id !== 1">
                    <button class="btn btn-danger" @click="handleDeleteTextarea(textarea.formId)">Obrisi</button>
                </div>
                <div v-else class="col-lg-1"></div>
                <!-- section titles to bind to -->
            <div class="col-lg-2">
                <div class="form-check" v-for="(sectionTitle) in sectionTitles" :key="'textareaSecionT_'+sectionTitle.id">
                    <input class="form-check-input" type="radio" :name="'radio-text-area'+textarea.id" :id="'radio-text-area'+textarea.id+sectionTitle.id" :value="sectionTitle.id" v-model="textarea.section_title_id">
                    <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-text-area'+textarea.id+sectionTitle.id">
                        {{sectionTitle.title}}
                    </label>

                    <label :for="'radio-text-area'+textarea.id+sectionTitle.id" v-else>
                        Naslov sekcije
                    </label>
                </div>
                <!-- <div v-if="errors.length">
                    <div v-for="(error, key) in errors" :key="key">
                        <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                            <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'textareas.'+textareaId+'.belongsTo'">
                            {{errorItem[0]}}
                            </div>
                            <div v-else></div>
                        </span>
                    </div>
                </div>
                <div v-else></div> -->
                </div>
            </div>
            <div class="row">

            <div class="col-lg-3 mt-4" v-if="textareasLastCount.id === textarea.id" style="margin-left: auto !important;">
                <button class="btn btn-success" @click="handleAddTextarea(textareas.length)">Dodaj novu text areu</button>
            </div>
            <div v-else></div>
            </div>
                            <!-- section titles to bind to -->
        </div>
    <!-- </div>        -->

            
        <!-- </div> -->
   

        <div class="row">

            <button class="col-lg-2 btn btn-success m-auto">Pošalji</button>
            <button class="col-lg-2 btn btn-danger m-auto" @click="goBackToPost">idi nazad</button>
        </div>
     
    </form>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import store from '../../store'
export default {
    data() {
       return{
           newImages: [],
           imagesToEdit:[],
           imagesEE: [
               
               ],
            //    empty: ''
       } 
    },
    computed:{
        textareasLastCount(){
            return this.textareas[this.textareas.length - 1]
        },
        imagesLastCount(){
            return this.imagesE[this.imagesE.length - 1]
        },
        ...mapGetters({
            post: 'BlogModule/postToEdit', 
            post_title: 'BlogModule/post_title',
            imagesE: 'BlogModule/imagesE', 
            sectionTitles: 'BlogModule/sectionTitles', 
            textareas: 'BlogModule/textareas',
            apiWaitingCount: 'apiWaitingCount'
        }),
    },
    methods:{
        ...mapActions({setEditPostImage: 'BlogModule/setEditPostImage'}),
        previewEditedFiles(e, i, image){
            e.target.files.forEach(file => {
         
                const fileUrl = URL.createObjectURL(file)
                this.newImages[i] = fileUrl ? fileUrl : null;
                this.post.images[i].oldName = image.name ? image.name : 'no old name';
                    this.imagesToEdit[i] = {
                        oldName: image.name ? image.name : 'no old name',
                        name: file.name, 
                        id: image.id ? image.id : null ,
                        formId: image.formId,
                        sId: image.section_title_id ? image.section_title_id : null
                    }
                this.post.images[i].name = file.name;
                if(file){
                    this.post.images[i].new_image = file ? file : {}
                    this.newImages.push()
                }else {
                    this.newImages[i] = {}
                }
              

                console.log('this.imagesToEdit', this.post.images);  
            });
        },
        // previewFiles(e, id, sectionTitleId){
        //     this.sectionTitles.forEach(sectionTitle => {
        //         sectionTitle.images.forEach(image => {
        //             this.empty = image
        //                 this.imagesEE.push()
        //                 this.empty = ''   
        //         });
        //     });
                  
        //     e.target.files.forEach(file => {
        //         this.sectionTitles.forEach(sectionTitle => {
        //             sectionTitle.images.forEach(image => {
        //                 const foundImage = image.id === id
        //                 const fileUrl = URL.createObjectURL(file)
        //                 this.imagesEE[id - 1] = fileUrl;
        //                 this.imagesToEdit[id - 1] = {file: file, id: foundImage ? id : null, sId: sectionTitleId}
        //             });
        //         });
        //     });
        // },
        async handleEditPost(){
            let data = new FormData();
            this.post.images.forEach((image) => {
                data.append('images[]', image.new_image)
            console.log(image);
            });
            // this.imagesToEdit.forEach((image) => {
            //     data.append('images[]', image.file);
            // });
            const post = this.post
            // const imagesToEdit = []
            // this.imagesToEdit.forEach(imageToEdit => {
            //     const sectionId = this.imagesE.find(x => x.id === imageToEdit.formImageId)
            //     const sectionTitleId = imageToEdit.sId ? imageToEdit.sId : sectionId.section_title_id;
            //     imagesToEdit.push({imageName: imageToEdit.file.name, imageToReplaceId: imageToEdit.id ? imageToEdit.id : '', sectionTitleId: sectionTitleId})
            // });
            this.imagesToEdit.forEach(imageToEdit => {
                this.post.images.forEach(image => {
                    
                    if(image.formId === imageToEdit.formId && image.section_title_id === null){
                        imageToEdit.sId = image.section_title_id
                        }
                })
                
            });
            const imagesToEdit = this.imagesToEdit
            console.log('ITE ',this.imagesToEdit,'Post', this.post.images);
            await this.setEditPostImage({data, images_to_edit: imagesToEdit, post})
            // if(this.apiWaitingCount === 0){
            //     this.$router.push('/jolanda/posts')
            // }

        },
        goBackToPost(){
            this.$router.push(`/jolanda/posts/${this.$route.params.id}`);
        },
        handleAddSectionTitle(length){
            this.post.section_titles.push({formId: length+1, title: '', belongsTo: ''})
        },
        handleDeleteSecetionTitle(k){
            this.post.section_titles.splice(k, 1);
        },
        handleAddImage(imagesLength){
            // this.imagesE.push({formImageId: imagesLength + 1 })
            this.post.images.push({formId: imagesLength+1, section_title_id: ''})
        },
        deleteEditImage(formId){
            const imageToCompare = this.post.images.find(x => x.formId === formId)
            this.newImages.forEach(newImage => {
                if(newImage.name === imageToCompare.new_image_name){
                    const index = this.newImages.indexOf(newImage)
                    this.newImages.splice(index, 1);
                }
            });
            const iterator = this.post.images.keys()
            for(const key of iterator){
                if(this.post.images[key].formId === formId){
                    this.post.images.splice(key, 1)
                    this.newImages.splice(key, 1)
                }
                console.log(this.newImages);
            }

      

            // this.post.images.splice(formId, 1)
                // this.post.images.splice(formId, 1)
        

           
        //  this.post.images.forEach(image => {
            //  console.log('imnage', image.indexOf(formId));
             
        //      if(image.formId === formId){
        //         // const imageFID = formId
        //         this.post.images.splice(image.formId, 1)

       
          
             
        //  });
            // this.imagesE.forEach(imageE => {
            //     if(imageE.id === k){
            //         this.imagesE.splice(k, 1)
            //     }else if(imageE.formImageId === k){
            //         this.imagesE.splice(k, 1)
            //     }
            // });
        },
        handleAddTextarea(length){
            console.log(this.textareas);
            this.post.textareas.push({formId: length + 1, section_title_id: ''})
        },
        handleDeleteTextarea(formId){
            // this.post.textareas.splice(formId, 1)
            const iterator = this.post.textareas.keys()
            for(const key of iterator){
                console.log('asdasdasddas ', this.post.textareas[key].formId === formId);
                if(this.post.textareas[key].formId === formId){
                    this.post.textareas.splice(key, 1)

                }
            }
        }
    },
    beforeRouteEnter(from, to, next){
        store.dispatch('BlogModule/getPostToEdit', from.params.id)
        next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('BlogModule/emptyPost')
        // store.dispatch('BlogModule/emptyPost')
        next();

    }
}
</script>