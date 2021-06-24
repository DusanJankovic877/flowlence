<template>
<div class="about"> 
  <!-- <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317">
  <path fill="#3EB2A2" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
  </svg> -->
  <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3EB2A2" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

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
  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3EB2A2" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  <!-- <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317"><path fill="#3EB2A2" fill-opacity="1" d="M0,32L120,26.7C240,21,480,11,720,58.7C960,107,1200,213,1320,266.7L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0584A" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,96C960,128,1200,224,1320,272L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
 <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3EB2A2" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,149.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->
  <!-- <svg class="down col-lg-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317"><path fill="#3EB2A2" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg> -->
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
  background-color: #3EB2A2;
  color: #fff;
  padding-bottom: 1px;
}
.about-us h1{
  color: #385663;
}
.about-us p {
  color: #385663;
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
