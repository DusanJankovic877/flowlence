<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form @submit.prevent>
        <div class="mb-3 file-inputs">
            <label for="blog-title" class="form-label">Naslov posta</label>
            <input type="text" class="form-control" id="blog-title">
        </div>
        <div class="mb-3 file-inputs">
            <label for="formFileOne" class="form-label"><p>Prva slika</p></label>
            <input name="img" @change="previewFiles" class="form-control" type="file" id="formFileOne" accept="image/*">i slike treba vezati za naslove sekcija
        </div>
        <div class="mb-3 file-inputs">
            <label for="formFileTwo" class="form-label">Druga slika</label>
            <input name="img" @change="previewFiles" class="form-control" type="file" id="formFileTwo" accept="image/*">
        </div>
        <!-- section title -->
        <div class="mb-3 file-inputs row" v-for="(sectionTitle, k) in blog.sectionTitles" :key="k">
            <label for="blog-section-title" class="form-label col-lg-9">Naslov sekcije posta koji treba dinamicki generisati i  povezati sa text reonima koji mu pripadaju</label>
            <input type="text" class="form-control" id="blog-section-title">


            <div v-if="blog.sectionTitles.length === k+1"  class="section-title-button col-lg-2">
                <button @click="handleAddSectionTitle(blog.sectionTitles.length)" class="btn btn-success col-lg-12">
                    Dodaj nov naslov
                </button>
            </div>
            <div v-else class="col-lg-2">Naslov sekcije {{sectionTitle.id}}</div>
            <div class=" col-lg-1" v-if="k !== 0">
                <button class="btn btn-danger col-lg-12" @click="handleDeleteSecetionTitle(k)">Obrisi</button>
            </div>
            <div v-else class="col-lg-1">
                <div v-if="blog.sectionTitles.length === 1">
                    Naslov sekcije {{sectionTitle.id}}
                </div>
            </div>
         

        </div>
        <!-- text area -->
        <div :class="textarea.id % 2 === 0? 'mb-3  odd-text-areas' : 'mb-3  even-text-areas'" v-for="(textarea, k) in blog.textareas" :key="k">
            <div class="row">
                <label for="exampleFormControlTextarea1" class="form-label col-lg-8">Textarea{{textarea.id}}</label>
            </div>
            <div class="div-text col-lg-12 row">
            <textarea v-model="blog.textareas[k].text" class="form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div class="col-lg-2 buttons-up-down">
                    <div class="col-lg-5" v-if="k !== 0">
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
                    <div class="col-lg-5" v-if="blog.textareas.length !== k+1">
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
                    <div v-if="blog.textareas.length === k+1">
                        <button class="btn btn-success" @click="handleAddTextarea(blog.textareas.length)">Dodaj novu text areu</button>
                    </div>
                    <div v-else></div>
                </div>
                <div class="delete-button  col-lg-1" v-if="k !== 0">
                    <button class="btn btn-danger" @click="handleDeleteTextarea(k)">Obrisi</button>
                </div>
                <div v-else></div>
            </div>
        </div>
        <button @submit="handleCreatePost">Pošalji</button>
    </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return{
            //napraviti generisanje slika i generisanje naslova za odredjenu sekciju posta, i povezati text reone sa ti naslovom
            counter: 1,
            sectionTitleCounter: 1,
            blog:{
                blogTitle: '',
                sectionTitles:[
                    {
                        id: 0,//duplicate key here 
                        title: ''    
                    },
                    
                ],
                images: [
                    {
                        id: 0,//duplicate key here 
                        name: ''
                    }

                ],
                textareas: [
                    {
                        id:0,//duplicate key here 
                        text: ''
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

    },
    methods:{
        ...mapActions({addNewTextArea: 'BlogModule/addNewTextArea',deleteTextArea: 'BlogModule/deleteTextArea', }),
        previewFiles(e){
            e.target.files.forEach(file => {
                this.images.forEach(image => {
                    if(image.id === 1 && image.name === ''){
                        image.name = file.name
                    }else if(image.id === 2){
                        image.name = file.name
                    }
                });
            });
        },
        handleAddTextarea(){
            this.blog.textareas.push({id: this.counter++, text: ''})
            
        },
        handleDeleteTextarea(k){
            // this.deleteTextArea(k)
            this.blog.textareas.splice(k, 1);
        },
        handleAddSectionTitle(){
            this.blog.sectionTitles.push({id: this.sectionTitleCounter++, title: ''})
        },
        handleDeleteSecetionTitle(k){
            this.blog.sectionTitles.splice(k, 1);
        },
        handleMoveUp(textarea){
           this.move(textarea, -1);
        },
        handleMoveDown(textarea){
           this.move(textarea, 1);
        },
        handleCreatePost(){
            
        }
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
    margin-left: 13px !important;
    width: 67.8%;
}
/* .section-title-button{
 
    margin-left: 10px;
    padding: 0 0 !important;
} */
.text-area{
    width:70% ;
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
    margin: 0 !important;
}
.delete-button{
    border-radius: 0;
    border: none;
}
.file-inputs input{
    width:70%;
    margin:0 !important;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid  black;
}
</style>