<template>
<div class="col-lg-7 m-auto create-post-form" >
    <h1>Uređivanje članka</h1>
    <form @submit.prevent="handleEditPost('submitted')" method="POST" enctype="multipart/form-data">
        <div v-for="(postOne, id) in post" :key="'post_title_'+id">
            <div class=" col-lg-9 file-inputs" v-if="postOne.post_title">
                <label for="blog-title" class="form-label">Naslov posta</label>
                <input type="text" class="form-control " id="blog-title"  v-model="postOne.post_title">
            </div>
        </div>
        <div  v-if="errors.length">
            <div v-for="(error, key) in errors" :key="key">
                <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                    <div  v-if="innerKey === `post.post_title.post_title`">
                        <div class="alert alert-danger col-lg-9 mb-3" role="alert" v-for="error in errorItem" :key="error.id">
                        {{error}}
                        </div>
                    </div>
                </span>
            </div>
        </div>
        <!-- section title -->
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in this.post.section_titles" :key="'sectionTitle_'+sectionTId">
            <label for="blog-section-title"  class="form-label col-lg-9">Naslov sekcije br:{{sectionTitle.formId}}</label>
            <div class="col-lg-7 file-inputs">
            <input type="text" class="form-control" id="blog-section-title" v-model="sectionTitle.title" placeholder="Naslov sekcije">
            <div  v-if="errors.length">
                <div v-for="(error, key) in errors" :key="key">
                    <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                        <div  v-if="innerKey === 'post.section_titles.'+sectionTId+'.title'">
                            <div class="alert alert-danger col-lg-12" role="alert" v-for="error in errorItem" :key="error.id">
                                {{error}}
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div v-else></div>
            </div>
            <div class=" col-lg-1" v-if="sectionTitle.formId !== 1">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteSecetionTitle(sectionTId, sectionTitle.id)">Obrisi</button>
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
                        <img v-if="image.name"
                            :src="newImages[i] ? newImages[i] : `https://rest.flowlence.rs/api/get-image/${image.name}`" 
                            alt="No image to display" 
                            style="width:70%;"
                        >
                        <img v-else src="http://placehold.it/300x200" alt="" style="width:70%;">
                    </div>
                </div> 
            </div>
            <div class=" col-lg-1" v-if="image.formId !== 1">
                <button class="btn btn-danger col-lg-12" @click="deleteEditImage(image.formId, image.id)">Obrisi</button>
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
        <button @click="handleAddImage(post.images.length)" class="btn btn-success" v-if="!post.images === false && post.images.length === 0">
            Dodaj novu sliku
        </button>
        <!-- textarea -->
        <div :class="textarea.id % 2 === 0? 'mb-3  odd-text-areas' : 'mb-3  even-text-areas'" v-for="(textarea, i) in post.textareas" :key="'textarea_edit_'+textarea.formId">
            <label for="exampleFormControlTextarea1" class="form-label col-lg-8">Textarea{{textarea.formId}}</label>
            <div class="div-text row">
                <div class="col-lg-7">
                    <textarea v-model="textarea.text" class="form-control text-area" id="exampleFormControlTextarea1" rows="3" style="white-space: pre-wrap !important;"></textarea>
                    <div  v-if="errors.length">
                        <div v-for="(error, key) in errors" :key="key">
                            <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                <div  v-if="innerKey === `post.textareas.${textarea.formId-1}.text`">
                                    <div class="alert alert-danger col-lg-12" role="alert" v-for="error in errorItem" :key="error.id">
                                    {{error}}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="delete-button  col-lg-1" v-if="textarea.formId !== 1">
                    <button class="btn btn-danger" @click="handleDeleteTextarea(textarea.formId, textarea.id)">Obrisi</button>
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
                    <div  v-if="errors.length">
                        <div v-for="(error, key) in errors" :key="key">
                            <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                <div  v-if="innerKey === `post.textareas.${textarea.formId-1}.section_title_id`">
                                    <!-- {{errorItem}} -->
                                    <div class="alert alert-danger col-lg-12" role="alert" v-for="errorr in errorItem" :key="errorr">
                                    {{errorr}}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div v-if="post.textareas.length -1 === i" class="col-lg-2">
                    <button class="btn btn-success" @click="handleAddTextarea(post.textareas.length)">Dodaj novo polje</button>
                </div>
                <div v-else class="col-lg-2"></div>
            </div>
        </div>
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
       } 
    },
    computed:{
        ...mapGetters({
            post: 'BlogModule/postToEdit', 
            errors: 'errors',
            // post_title: 'BlogModule/post_title',
            // sectionTitles: 'BlogModule/sectionTitles', 
            // textareas: 'BlogModule/textareas',
            apiWaitingCount: 'apiWaitingCount'
        }),
 
    },
    methods:{
        ...mapActions({
            setEditPostImage: 'BlogModule/setEditPostImage',
            deleteImage: 'BlogModule/deleteImage', 
            deleteSectionTitle: 'BlogModule/deleteSectionTitle',
            deleteTextarea: 'BlogModule/deleteTextarea' 
            }),
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
            });
        },
        async handleEditPost(){
            const answer = confirm('Da li želite da pošaljete editovanu formu?')
            if(answer === true){

                let data = new FormData();
                this.post.images.forEach((image) => {
                    if(image.new_image){
                        data.append('images[]', image.new_image)
                    }
                });
                //checking if data is empty
                let bool = !!data.entries().next().value
                const post = this.post
                const imagesToEdit = this.imagesToEdit
                await this.setEditPostImage({data: bool ? data : null, images_to_edit: imagesToEdit, post})
                if(this.errors.length === 0)this.$router.push(`/jolanda/posts/${this.post.post_title.id}`)
            }
        },
        goBackToPost(){
            this.$router.push(`/jolanda/posts/${this.$route.params.id}`);
        },
        handleAddSectionTitle(length){
            this.post.section_titles.push({formId: length+1, title: '', id: ''})
        },
        async handleDeleteSecetionTitle(k, sTId){
            const answer = confirm('Da li ste sigurni da hoćete da obrišete naslov sekcije?')
            if(answer === true){
                this.post.section_titles.splice(k, 1);
                if(sTId !== ''){
                    await this.deleteSectionTitle(sTId);
                    this.$router.push(`/jolanda/edit-post/${this.post.post_title.id}`);
                }
            }
        },
        handleAddImage(imagesLength){
            this.post.images.push({formId: imagesLength+1, section_title_id: '', id: ''})
        },
        async deleteEditImage(formId, imageId){
            const answer = confirm('Da li ste sigurni da hoćete da obrišete sliku?')
            if(answer === true){
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
                }
                if(imageId !== ''){
                    await  this.deleteImage(imageId);
                }
            }
        },
        handleAddTextarea(length){
            this.post.textareas.push({formId: length + 1, section_title_id: '', id:''})
        },
        async handleDeleteTextarea(formId, textareaId){
            const answer = confirm('Da li ste sigurni da hoćete da obrišete tekst polje?')
            if(answer === true){
                const iterator = this.post.textareas.keys()
                for(const key of iterator){
                    if(this.post.textareas[key].formId === formId){
                        this.post.textareas.splice(key, 1)
                    }
                }
                if(textareaId !== ''){
                    await  this.deleteTextarea(textareaId);
                }

            }
        }
    },
    beforeRouteEnter(from, to, next){
        store.dispatch('BlogModule/getPostToEdit', from.params.id)
        next();
    },
    beforeRouteLeave(from, to, next){
        store.dispatch('deleteErrors')
        store.dispatch('BlogModule/emptyPostToEdit')
        store.dispatch('BlogModule/emptyPost')
        next();

    }
}
</script>