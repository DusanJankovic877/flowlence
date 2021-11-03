<template>

    <div class="price-list col-lg-12">
        <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div class="price-info ">
          <div class="price-circle-content col-lg-7 m-auto">
            <h1 class="pl-content-heading">Procena cene usluga</h1>
            <p>Da saznate više o cenama kliknite na dugme više o cenama</p>
            <div class="price-row">
               <div class="krug" @click="handleReRoute('entrepreneur')">
              <router-link class="krug prices-link"  to="">
                <div class="price-card-body">
                <h1>Preduzetnik</h1>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </router-link>
               </div>
               <div class="krug"  @click="handleReRoute('doo')">
              <router-link class="krug prices-link" to="">
                  <div class="price-card-body">
                  <h1>DOO</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p><b>pošaljite upitnik</b></p>
                  </div>
              </router-link>
               </div>
              <div class="krug"  @click="handleReRoute('association')">
              <router-link class="krug prices-link" to="">
                <div class="price-card-body">
                <h1>Udruženje</h1>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </router-link>
              </div>
            </div><!-- end of row -->
          </div><!-- end of col-lg-7-->
        </div> <!-- end of price-info -->
        <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E6E6E6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

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
      console.log('click home');
      this.$router.push({name: 'price-list', params: {hideAll: false, selectedButton: val, from: 'home'}})
    }
    // ...mapActions(['getFormData', 'getSelectedDataOptions']),
  //   async handleHideButtons(val){
  //     this.hideButtons = false
  //     this.selectedButton = val
  //     await this.getFormData({name: this.selectedButton})
  //   },
  //  async handleGetSelectedDataOptions(val){
  //    await this.getSelectedDataOptions(val)
  //   },
  //   handleHideForm(val){
  //     this.hideButtons = val
  //     this.selectedButton = ' '
  //   }
  },
//     computed: {
//       ...mapGetters(['formData']),
//     currentRouteName() {
//         return this.$route.path;
//     }
// },
    // async created(){
    //   if(this.selectedButton === 'entrepreneur'){

        // await store.dispatch('getExampleFormData')
    //   }
    // }
}
</script>
<style scoped>
.price-info{
  background-color: #E6E6E6;
}
.circle{
  z-index: 1;
  position: relative;
}
.pl-content-heading{
  padding-top:50px;
}
.price-row{

  display: flex;
}

 .krug{
   border:none;
    background-color: white;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;
}

.krug:hover {
  text-decoration: none;
  background-color: #8b8b8b;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;

}

.price-card-body{
  height: 320px;
  width: 320px;
  border-radius: 25em !important;
  padding: 93px 10px 0 10px;
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
}
</style>