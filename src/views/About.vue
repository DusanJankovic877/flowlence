<template>
<div class="about"> 
  <!-- <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317">
  <path fill="#3EB2A2" fill-opacity="1" d="M0,192L360,256L720,288L1080,288L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
  </svg> -->
  <!-- <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> -->
  <img class=" responsive" v-if="currentRouteName !== '/'" src="../assets/3.jpg" alt="">
  <div class="about-content col-lg-12">
    <div class="about-us col-lg-7 m-auto">
      <h1>O nama</h1>
      {{currentRouteName}}
      <p>
        Individualni pristup svakom klijentu, posvećenost, pouzdanost i kvalitet usluge su osnovni
        principi na kojima se zasniva naše poslovanje.
      </p>
      <p>
        Želimo da omogućimo našim klijentima kapacitet za uspešan razvoj biznisa, da budemo
        podrška iz oblasti kojom se bavimo i oslonac za bezbedno poslovanje i pridržavanje
        zakonskih propisa.
      </p>
      <p>
        Smatramo da je naš posao izuzetno odgovoran i veliku pažnju posvećujemo informisanju
        klijenata o aktuelnim promenama zakonskih propisa koji se njih odnose kao I davanju saveta
        iz naše oblasti. U našoj sferi poslovanja od izuzetnog je značaja da redovno pratimo propise,
        posećujemo seminare I edukujemo se o raznim promenama zakonskih regulativa koje mogu
        imati direktan uticaj na biznis klijenata. Stalna edukacija i usavršavanje je prioritet pogotovo
        u našoj zemlji, koju karakterišu izuzetno česte izmene postojećih I stalno donošenje novih
        zakonskih akata.
      </p>
      <p>
        Imajući u vidu da je današnje poslovanje sve više usmereno na internet, pružamo klijentima 
        mogućnost da budu u kontaktu sa name putem digitalne komunikacije, sa minimalnim ličnim kontaktom.
      </p>



    </div> <!--end of about-us div -->
  </div>  <!--end of about-content div -->
  <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
</div><!--end of about div -->

</template>
<script>
export default{
  data() {
    return {

    }
  },
    computed: {
    currentRouteName() {
        return this.$route.path;
    }
},
}
</script>

<style>
  body{
    box-sizing: border-box !important;
  }
  .about{
    position: relative;

    margin-bottom: -210px;
  }
  .about-content  {
    padding-top: 100px;
    /* background-color: #e6e6e6; */
    background-color: black;
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
@media only screen and (max-width: 1280px){
    .about-content h1{
    font-size: 35px;
  }
  .about-content p{
    font-size: 25px;
  }
  .about-us{
    margin: 0  auto!important;
    padding-bottom: 50px;
    width: 90%;
  }
}
@media only screen and (max-width: 768px){
  .about-content{
    padding: 30px 20px;
  }
}
@media (max-width:540px){
  .about{
    /* margin-bottom:-270px !important; */
  }
  .about-content{padding: 20px 10px !important;}
  .about-content h1{
    font-size: 16px;
  }
  .about-content p{
    font-size: 12px;
  }
}
</style>
