<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form @submit.prevent="handleFormSubmit" method="POST" enctype="multipart/form-data">
        <h1>Kreiranje Članka</h1>
        <div class="mb-3 col-lg-9 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>
            <input type="text" class="form-control" id="blog-title" v-model="blog.postTitle">
            
            <div  v-if="errors.length">
                <div v-for="(error, key) in errors" :key="key">
                    <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                        <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'postTitle'">
                        {{errorItem[0]}}
                        </div>
                    </span>
                </div>
            </div>
            <div v-else></div>
        </div>
        <!-- section title -->
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in blog.sectionTitles" :key="'sectionTitle_'+sectionTId">
            <label for="blog-section-title"  class="form-label col-lg-9">Naslov sekcije br:{{sectionTitle.sectionTId}}</label>
            <div class="col-lg-7 file-inputs">
            <input type="text" class="form-control" id="blog-section-title" v-model="sectionTitle.title" placeholder="Naslov sekcije">

            <div  v-if="errors.length">
                <div v-for="(error, key) in errors" :key="key">
                    <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                        <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'sectionTitles.'+sectionTId+'.title'">
                        {{errorItem[0]}}
                        </div>
                    </span>
                </div>
            </div>
            <div v-else></div>
            </div>
            <div class=" col-lg-1" v-if="sectionTId !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteSecetionTitle(sectionTId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>
            <div v-if="blog.sectionTitles.length === sectionTId+1"  class="section-title-button col-lg-2">
                <button @click="handleAddSectionTitle(blog.sectionTitles.length)" class="btn btn-success s-title-button col-lg-12">
                    Dodaj nov naslov
                </button>
            </div>
            <div v-else class="col-lg-2"></div>
        </div>
        <!-- IMAGE -->
        <!-- <div class="mb-3  row" v-for="(image, imageId) in images" :key="'image_'+imageId">

              <label for="formFileOne" class="form-label"><p>Slika br: {{image.imageId}}</p></label>
            <div class="col-lg-7 file-inputs">
                <input name="img" @change="previewFiles($event, imageId)" class="form-control " type="file" id="formFileOne" accept="image/*">
            </div>
        </div> -->
        <div class="mb-3  row" v-for="(image, imageId) in images" :key="'image_'+imageId">
            <label for="formFileOne" class="form-label"><p>Slika br: {{image.imageId}}</p></label>
            <div class="col-lg-7 file-inputs">

                <input name="img" @change="previewFiles($event, imageId)" class="form-control " type="file" id="formFileOne" accept="image/*">
                <div v-if="errors.length">       
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

                <div v-else></div>
            </div>
            <div class=" col-lg-1" v-if="imageId !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteImage(imageId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>

            <!-- section titles to bind to -->
            <div class="col-lg-2">
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
            </div>
            <div class="col-lg-2">
                <div v-if="images.length === imageId+1" class="">
                <button @click="handleAddImage(images.length)" class="btn btn-success  ">
                    Dodaj novu sliku
                </button>
                </div>
                <div v-else class="col-lg-12"></div>
            </div>
            <div v-if="imagePreview" class="row mt-3">
                <img :src="imagePreview" alt="" style="width: 200px;">
            </div>
        </div>
        <!-- text area -->
        <div :class="textarea.textareaId % 2 === 0? 'mb-3  odd-text-areas' : 'mb-3  even-text-areas'" v-for="(textarea, textareaId) in blog.textareas" :key="'textarea_'+textareaId">
            <label for="exampleFormControlTextarea1" class="form-label col-lg-8">Textarea{{textarea.textareaId}}</label>
            <div class="div-text row">
                <div class="col-lg-7">
                <textarea v-model="blog.textareas[textareaId].text" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div v-if="errors.length">
                    <div v-for="(error, key) in errors" :key="key">
                        <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                            <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'textareas.'+textareaId+'.text'">
                            {{errorItem[0]}}
                            </div>
                            <div v-else></div>
                        </span>
                    </div>
                </div>
                <div v-else></div>

                </div>
                <div class="col-lg-1 buttons-up-down">
                    <div class="col-lg-12" v-if="textareaId !== 0">
                        <button class="btn btn-light ml-auto col-lg-12" @click="handleMoveUp(textarea)">
                            <svg id="i-chevron-top" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 32 32" 
                                width="14" 
                                height="15" 
                                fill="none" 
                                stroke="currentcolor" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="4">
                                <path d="M30 20 L16 8 2 20" />
                            </svg>
                        </button>
                    </div>
                    <div class="col-lg-12 buttons-up-down"  v-if="blog.textareas.length !== textareaId+1">
                        <button class="btn btn-dark col-lg-12" @click="handleMoveDown(textarea)">
                            <svg id="i-chevron-bottom" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 32 32" 
                                width="14" 
                                height="15" 
                                fill="none" 
                                stroke="currentcolor" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="4">
                                <path d="M30 12 L16 24 2 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="delete-button  col-lg-1" v-if="textareaId !== 0">
                    <button class="btn btn-danger" @click="handleDeleteTextarea(textareaId)">Obrisi</button>
                </div>
                <div v-else class="col-lg-1"></div>
                <!-- section titles to bind to -->
                <div class="col-lg-2">
                    <div class="form-check" v-for="(sectionTitle, sectionTId) in blog.sectionTitles" :key="'imageSecionT_'+sectionTId">
                        <input class="form-check-input" type="radio" :name="'radio-text-area'+textareaId" :id="'radio-text-area'+textareaId+sectionTId" :value="sectionTId" v-model="textarea.belongsTo">
                        <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-text-area'+textareaId+sectionTId">
                            {{sectionTitle.title}}
                        </label>

                        <label :for="'radio-text-area'+textareaId+sectionTId" v-else>
                            Naslov sekcije
                        </label>
                    </div>
                    <div v-if="errors.length">
                        <div v-for="(error, key) in errors" :key="key">
                            <span v-for="(errorItem, innerKey) in error" :key="innerKey">
                                <div class="alert alert-danger col-lg-12" role="alert" v-if="innerKey === 'textareas.'+textareaId+'.belongsTo'">
                                {{errorItem[0]}}
                                </div>
                                <div v-else></div>
                            </span>
                        </div>
                    </div>
                    <div v-else></div>
                </div>
            </div>
            <div class="mt-4" v-if="blog.textareas.length === textareaId+1" style="float:right;">
                <button class="btn btn-success" @click="handleAddTextarea(blog.textareas.length)">Dodaj novu text areu</button>
            </div>
            <div v-else></div>
        </div>
        <button class="btn btn-success">Pošalji</button>
    </form>
    </div>
</template>
<script>
import { 
    mapActions, 
    mapGetters, 

    } from 'vuex';
export default {
    data() {
        return{
            images:[
                {

                }
            ],
            imagePreview: null,
            //napraviti generisanje slika i generisanje naslova za odredjenu sekciju posta, i povezati text reone sa ti naslovom
            counter: 1,
            sectionTitleCounter: 1,
            imageCounter:1,
            submitClicked: false,
            blog:{
                postTitle: ' ',
                sectionTitles:[
                    {
                        sectionTId: 0,
                        title: '' 
                    },
                    
                ],
                images: [
                    {
                        imageId: 0,
                        belongsTo:'',//belong to what section title ID GOES THERE
                        name: ''
                    }

                ],
                textareas: [
                    {
                        textareaId:0,
                        text: '',
                        belongsTo:''//belong to what section title ID GOES THERE
                    },

                ]

            },
            move: function(textarea, delta){
            var index = this.blog.textareas.indexOf(textarea);
            var newIndex = index + delta;
            if(newIndex < 0 || newIndex == this.blog.textareas.length)return;
            var indexes = [index, newIndex].sort((a, b) => a - b);
            this.blog.textareas.splice(indexes[0], 2, this.blog.textareas[indexes[1]], this.blog.textareas[indexes[0]]);
            },
        }
    },
    computed:{
        ...mapGetters({
                errors: 'errors',
                postMessage: 'postMessage'
        }),
        routeParam(){
            return this.$route.params.id
        }

    },
    methods:{
        ...mapActions({
            addNewTextArea: 'BlogModule/addNewTextArea',
            deleteTextArea: 'BlogModule/deleteTextArea', 
            setCreatePost: 'BlogModule/setCreatePost',
            setCreatePostImage: 'BlogModule/setCreatePostImage', 
            getImage: 'BlogModule/getImage', 
            deleteErrors: 'deleteErrors',
            } ),
        previewFiles(e, id){
            e.target.files.forEach(file => {
                    this.blog.images[id].name = file.name
                   if(file){
                       this.images[id]=  file;
                   }else {
                       this.images[id] = {}
                   }
            });
        },
        async handleFormSubmit(){
                let data = new FormData();
                this.images.forEach((image) => {
                    data.append('images[]', image);
                });
                const blog = this.blog;
                await this.setCreatePostImage({data, blog})
                this.$router.push('/jolanda/posts')
        },

        handleAddTextarea(){
            this.blog.textareas.push({textareaId: this.counter++, text: '', belongsTo: ''})        
        },
        handleDeleteTextarea(k){
            this.blog.textareas.splice(k, 1);
        },
        handleAddSectionTitle(){
            this.blog.sectionTitles.push({sectionTId: this.sectionTitleCounter++, title: '', belongsTo: ''})
        },
        handleDeleteSecetionTitle(k){
            this.blog.sectionTitles.splice(k, 1);
        },
        handleAddImage(){
            this.blog.images.push({imageId: this.imageCounter++, belongsTo: ''})
            this.images.push({})
        },
        handleDeleteImage(k){
            this.blog.images.splice(k, 1);
            this.images.splice(k, 1);
        },
        handleMoveUp(textarea){
            this.move(textarea, -1);
        },
        handleMoveDown(textarea){
           this.move(textarea, 1);
        },
    },
     beforeDestroy(){
        this.deleteErrors();
     }
}
</script>
<style >
.arrows{
    width: 22px;

    height: 10px;
    padding: 0;

}
.arrows button{
    width: 22px;
    height: 20px;
    background-color: red;
    padding: 0;
}
.create-post-form{
    padding:15px;
    background: #DABEBF!important;
}
.file-inputs {
    text-align: left !important;
}
.odd-text-areas{
    background: #314247;
    padding: 5px 0 10px 20px;
    color: white;
}
.even-text-areas{
    background: #698c96;
    padding: 5px 0 10px 20px;

}

.buttons-up-down{
    margin-right: 0 !important;
}
.delete-button{
    border-radius: 0;
    border: none;
}
.file-inputs input{
    margin:0 !important;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid  black;
}
</style>