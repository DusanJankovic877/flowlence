<template>
    <div class="col-lg-7 m-auto create-post-form">
    <form>
      
        <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input name="img" class="form-control" type="file" id="formFile" accept="image/*">
        </div>

    </form>
    </div>
</template>
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