<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form @submit.prevent>
                      <input type="text" 
                        v-model="img" 
                       
                        id="imageUrl" 
                        aria-describedby="imageUrl" 
                        placeholder="Enter picture path"
                />
        <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input name="img" @change="previewFiles" class="form-control"  ref="myFiles" type="file" id="1" accept="image/*">
        <input name="img" @change="previewFiles" class="form-control" ref="myFiles" type="file" id="2" accept="image/*">
        <button @submit="handleCreatePost">sadasdsad</button>
        </div>
    </form>
    </div>
</template>
<script>
export default {
    data() {
        return{
            images: [
                {
                id: 1,
                name: ''
                }
            ]
        }
    },
    methods:{
        previewFiles(e){
            e.target.files.forEach(file => {
                this.images.id = +1;
                this.images.name = file.name
                console.log(this.images );

            });
            // console.log(e.target.files[0]);
        },
        submit(){
            
        }
    }
}
</script>
<style >
  .responsive{
    width: 100%;
    height: auto;
  }
.image{
    height: 50vh;
    width: 100%; 
    background-image: url('../../assets/blog/cubes.jpg');
    background-size: cover;
}
.post{
    background-color: rgba(255, 248, 220, 0.479);
}
.post span{
    text-decoration: underline;
}
.post p{
    line-height: 30px;
}
</style>