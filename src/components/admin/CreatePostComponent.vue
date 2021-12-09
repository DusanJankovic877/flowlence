<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form @submit.prevent="handleFormSubmit" method="POST" enctype="multipart/form-data">
        <!-- <pre>

        {{blog}}
        </pre> -->
        <h1>Povezati slike i teks reone sa odredjenim naslovom sekcije posta</h1>
        <div class="mb-3 col-lg-9 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>
            <input type="text" class="form-control" id="blog-title" v-model="blog.postTitle">
        </div>
        <!-- section title -->
        <div class="mb-3 row" v-for="(sectionTitle, sectionTId) in blog.sectionTitles" :key="'sectionTitle_'+sectionTId">
            <label for="blog-section-title"  class="form-label col-lg-9">Naslov sekcije br:{{sectionTitle.sectionTId}}</label>
            <div class="col-lg-7 file-inputs">

            <input type="text" class="form-control" id="blog-section-title" v-model="sectionTitle.title" placeholder="Naslov sekcije">
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
        <div class="mb-3  row" v-for="(image, imageId) in blog.images" :key="'image_'+imageId">
            <label for="formFileOne" class="form-label"><p>Slika br: {{image.imageId}}</p></label>
            <div class="col-lg-7 file-inputs">
                <input name="img" @change="previewFiles($event, imageId)" class="form-control " type="file" id="formFileOne" accept="image/*">
            </div>
            <div class=" col-lg-1" v-if="imageId !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteImage(imageId)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1"></div>

            <!-- section titles to bind to -->
            <div class="col-lg-2">
                <div class="form-check" v-for="(sectionTitle, sectionTId) in blog.sectionTitles" :key="'imageSecionT_'+sectionTId">
                    <input class="form-check-input" type="radio" :name="'radio-input'+imageId" :id="'radio-input-'+imageId+sectionTId" :value="sectionTId" v-model="image.belongsTo">
                    <label v-if="sectionTitle.title" class="form-check-label" :for="'radio-input-'+imageId+sectionTId">
                        {{sectionTitle.title}}
                    </label>
                    <label class="form-check-label" :for="'radio-input-'+imageId+sectionTId" v-else>
                        Naslov sekcije
                    </label>
                </div>
            </div>
            <div class="col-lg-2">
                <div v-if="blog.images.length === imageId+1" class="">
                <button @click="handleAddImage(blog.images.length)" class="btn btn-success  ">
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
                </div>
            </div>
            <div class="mt-4" v-if="blog.textareas.length === textareaId+1" style="float:right;">
                <button class="btn btn-success" @click="handleAddTextarea(blog.textareas.length)">Dodaj novu text areu</button>
            </div>
            <div v-else></div>
        </div>
        <button>Pošalji</button>
    </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return{
            image:null,
            imagePreview: null,
                // images: [
                //     {
                //         // imageId: 0,//duplicate key here 
                //         // belongsTo:''//belong to what section title ID GOES THERE
                //     }

                // ],
            //napraviti generisanje slika i generisanje naslova za odredjenu sekciju posta, i povezati text reone sa ti naslovom
            counter: 1,
            sectionTitleCounter: 1,
            imageCounter:1,
            submitClicked: false,
            blog:{
                postTitle: '',
                sectionTitles:[
                    {
                        sectionTId: 0,//duplicate key here 
                        title: ''   ,
                        belongsTo: '' 
                    },
                    
                ],
                images: [
                    {
                        // imageId: 0,//duplicate key here 
                        // belongsTo:''//belong to what section title ID GOES THERE
                    }

                ],
                textareas: [
                    {
                        textareaId:0,//duplicate key here 
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
    methods:{
        ...mapActions({addNewTextArea: 'BlogModule/addNewTextArea',deleteTextArea: 'BlogModule/deleteTextArea', setCreatePost: 'BlogModule/setCreatePost'}),
        previewFiles(e, id){
            e.target.files.forEach(file => {
                this.image = file;
                let reader = new FileReader();
                reader.readAsDataURL(this.image); 
        reader.onload = e =>{
                        this.imagePreview = e.target.result;
                }
                // this.blog.images[id] = file;
                // let reader = new FileReader();
                // reader.readAsDataURL(this.blog.images[id]);
                // reader.onload = e =>{
                //         this.imagePreview = e.target.result;
                // }
                //         console.log('for each blog ',this.blog.images);
            });
            // let files = e.target.files || e.dataTransfer.files;
            // if (!files.length)
            //     return;
            // this.createImage(files[0], id);
console.log(id);
        },
        async handleFormSubmit(){
            console.log('image',this.image);
            let data = new FormData();
            data.append('image',this.image);
            const blog = JSON.stringify(this.blog);
            data.append('blog',blog);
            await this.setCreatePost(data)
        },
        handleAddTextarea(){
            this.blog.textareas.push({textareaId: this.counter++, text: '', belongsTo: ''})        
        },
        handleDeleteTextarea(k){
            // this.deleteTextArea(k)
            this.blog.textareas.splice(k, 1);
        },
        handleAddSectionTitle(){
            this.blog.sectionTitles.push({sectionTId: this.sectionTitleCounter++, title: '', belongsTo: ''})
        },
        handleDeleteSecetionTitle(k){
            this.blog.sectionTitles.splice(k, 1);
        },
        handleAddImage(){
            // this.blog.images.push({imageId: this.imageCounter++, name: '',data:'', belongsTo: '', size: ''})
            this.blog.images.push({})
        },
        handleDeleteImage(k){
            this.blog.images.splice(k, 1);
        },
        handleMoveUp(textarea){
            this.move(textarea, -1);
        },
        handleMoveDown(textarea){
           this.move(textarea, 1);
        },
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
    background: rgba(209, 209, 209, 0.37) !important;
}
.file-inputs {
    text-align: left !important;
}

#blog-section-title{
    /* margin-left: 13px !important; */
    /* width: 67.8%; */
}
/* .section-title-button{
 
    margin-left: 10px;
    padding: 0 0 !important;
} */
.text-area{
    /* width:70% ; */
}
.odd-text-areas{
    background: rgba(128, 128, 128, 0.815);
    padding: 5px 0 10px 20px;
}
.even-text-areas{
    background: rgba(48, 48, 48, 0.781) !important;
    padding: 5px 0 10px 20px;
    color: white;
}

.buttons-up-down{
    margin-right: 0 !important;
}
.delete-button{
    border-radius: 0;
    border: none;
}
.file-inputs input{
    /* width:70%; */
    margin:0 !important;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid  black;
}
</style>