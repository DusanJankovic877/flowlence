<template>

    <div class="price-list col-lg-12">
        <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135"><path fill="#dabebf" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div class="price-info ">
          <div class="price-circle-content col-lg-7 m-auto">
            <h1 class="pl-content-heading">Procena cene usluga</h1>
            <p class="pl-content-paragraph">Da saznate više o cenama popunite upitnik</p>
            <div class="price-row">
              <button  class="prices-link krug" @click="handleReRoute('entrepreneur')">
                <div class="price-card-body">
                  <h1>Preduzetnik</h1>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </button><!-- 1st -->
              <button  class="prices-link krug" @click="handleReRoute('doo')">
                <div class="price-card-body">
                  <h1>DOO</h1>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </button><!-- 2nd -->
              <button  class="prices-link krug" @click="handleReRoute('association')">
                <div class="price-card-body">
                  <h1>Udruženje</h1>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </button><!-- 3rd -->
            </div><!-- end of row -->
          </div><!-- end of col-lg-7-->
        </div> <!-- end of price-info -->
        <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135"><path fill="#dabebf" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

    </div> <!-- end of price list -->

</template>
<script>
export default{

  data() {
    return {
      hideButtons: true,
      selectedButton: ''
    }
  },

  methods:{
    handleReRoute(val){
      this.$router.push({name: 'price-list', params: {hideButtons: true, selectedButton: val, from: 'home'}})
      
    }
  }
}
</script>
<style scoped>
.down{
 
}
  .price-info{
    background-color: #dabebf;
  }
  .circle{
    z-index: 1;
    position: relative;
  }

  .pl-content-heading, .pl-content-paragraph{
    color: #404040;
  }
  .price-row{
    display: flex;
  }

 /* .krug{
   border:none;
    background-color: #f2f2f2 ;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;
  }  */

 /* .krug:hover {
  text-decoration: none;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;
  color: white;

  } */
  .price-card-body h1{
    margin-bottom: 70px;
  }
  .price-list a, .contact a{
    border-radius: 0;
  }
@media only screen and (max-width: 1280px){
  .price-circle-content{
    width: 100%;
  }
    .price-card-body{

  padding: 75px 10px 0 10px;
  }
  .price-row{
  display: flex;
  }
  .price-info{
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 768px){
  .price-card-body{

  padding: 65px 10px 0 10px;
  }
    .price-list{
    margin-bottom: -125px !important;
  }
      .price-row{
  display: inherit;
  }
    .price-info h1{
    font-size: 20px;
  }
  .price-info p{
    font-size:14px;
  }
}
@media (max-width:540px){

  .price-info h1{
    font-size: 20px;
  }
  .price-info p{
    font-size:14px;
  }
  .price-list{
  margin-bottom: -90px !important;
  }
  .price-card-body h1{
    font-size: 18px;
  }
    .price-card-body p{
    font-size: 14px;
  }
  .krug{
    /* background-color: #f2f2f2;
    height: 280px;
    width: 280px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important; */
}
.price-card-body {
    height: 280px;
    width: 280px;
}
}
</style>