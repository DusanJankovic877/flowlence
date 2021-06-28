<template>
<div class="about"> 
  <!-- <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317">
  <path fill="#3EB2A2" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
  </svg> -->
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2B5877" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

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


    </div> <!--end of about-us div -->
  </div>  <!--end of about-content div -->
  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2B5877" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
</div><!--end of about div -->

</template>
<style>
body{
  box-sizing: border-box !important;
}
.about{
  margin-top: -151px !important;
}
.about-content  {
  background-color: #2B5877;
  color: #fff;
  padding-bottom: 1px;
}
.about-us h1{
  color: white;
}
.about-us p {
  color: white;
  font-size: 19px;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
}
.about svg{
  display: flex !important;
}
.up{
  margin-bottom: -2px;
   transform: rotateX(180deg) rotateY(180deg);
}
.down{
  margin-top: -2px;
  /* transform: rotateX(180deg) rotateY(180deg); */
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
