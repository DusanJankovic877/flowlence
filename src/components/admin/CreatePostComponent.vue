<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form @submit.prevent>
        <div class="mb-3 file-inputs">
            <label for="formFileOne" class="form-label"><p>Prva slika</p></label>
            <input name="img" @change="previewFiles" class="form-control" type="file" id="formFileOne" accept="image/*">
        </div>
        <div class="mb-3 file-inputs">
            <label for="formFileTwo" class="form-label">Druga slika</label>
            <input name="img" @change="previewFiles" class="form-control" type="file" id="formFileTwo" accept="image/*">
        </div>
        <div class="mb-3" v-for="(textarea, k) in blog.textareas" :key="k">
            <label for="exampleFormControlTextarea1" class="form-label">Textarea{{k}}</label>
            <textarea v-model="blog.textareas[k].text" class="form-control col-lg-3" id="exampleFormControlTextarea1" rows="3"></textarea>
            <div v-if="textarea.id !== 0">
            <button @click="handleDeleteTextarea(k)">Obrisi text areu</button>
            </div>
            <div v-else></div>
        </div>
   {{blog}}
            <button @click="handleAddTextarea(blog.textareas.length)">Dodaj novu text areu</button>
        <button @submit="handleCreatePost">Pošalji</button>
    </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return{
            counter: 1,
            blog:{
                images: [
                    {
                        id: 1,
                        name: ''
                    },
                    {
                        id:2,
                        name:''
                    }
                ],
                textareas: [
                    {
                        id:0,
                        text: ''
                    }
                ]

            }
        }
    },
    computed:{
        // ...mapGetters({blog: 'BlogModule/blog'})
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
        handleAddTextarea(length){
            console.log('click', length);
         
            // this.addNewTextArea(length)
            this.blog.textareas.push({id: this.counter++, text: ''})
        },
        handleDeleteTextarea(k){
            // this.deleteTextArea(k)
            this.blog.textareas.splice(k, 1);
        },
        handleCreatePost(){
            
        }
    }
}
</script>
<style >
.file-inputs{
    text-align: left;
}
.file-inputs input{
    border: none;
    border-radius: 0;
    border-bottom: 1px solid  black;
}
</style>