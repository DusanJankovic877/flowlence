<template>
<div class="about"> 
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317">
  <path fill="#8e44ad" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
  </svg>
  <div class="about-content col-lg-12">
    <div class="about-us col-lg-7 m-auto">
      <h1>O nama</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro impedit nam, amet laborum vero dolorem eligendi voluptate, 
        aliquam ullam asperiores libero maxime laboriosam sequi nesciunt ratione sint perferendis excepturi quia!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, 
        inventore expedita harum eveniet commodi maiores debitis enim magni est totam exercitationem voluptatem suscipit hic necessitatibus, 
        voluptas rerum, culpa architecto consectetur.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo ipsa? Voluptas error, alias eligendi, quae sit sequi delectus autem nemo inventore 
        obcaecati cum eius laboriosam quibusdam harum rem quidem.
      </p>

    </div> <!--end of about-us div -->
  </div>  <!--end of about-content div -->
  <svg class="down col-lg-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317"><path fill="#8e44ad" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
</div><!--end of about div -->

</template>
<style>
body{
  box-sizing: border-box !important;
}
.about{
  margin-top: -251px !important;
}
.about-content  {
  background-color: #8e44ad;
  color: #fff;
  padding-bottom: 115px;
}
.about-us h1{
  padding-top: 50px;
}
.about svg{
  display: flex !important;
}
.up{
  margin-bottom: -2px;
}
.down{
  margin-top: -2px;
  transform: rotateX(180deg) rotateY(180deg);
}
@media only screen and (max-width: 768){
  .about{
  margin-top: -100px !important;
}
}
@media only screen and (max-width: 1024px){
  .about{
  margin-top: -132px !important;
}
}

</style>
