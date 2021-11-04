<template>
<div>
      <div class="menu-circles">
        <div class="price-info ">
          <div class="price-circle-content col-lg-7 m-auto">
            <h1 class="title">Procena cene usluga</h1>
            <p>Da saznate više o cenama popunite upitnik</p>
            <div class="price-row">
             
              <button class="krug prices-link"  @click="handleHideButtons('entrepreneur')">
                <div class="price-card-body">
                <h1>Preduzetnik</h1>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </button>
                  
              <button class="krug prices-link" @click="handleHideButtons('doo')">
                  <div class="price-card-body">
                  <h1>DOO</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p><b>pošaljite upitnik</b></p>
                  </div>
              </button>
       
              <button class="krug prices-link" @click="handleHideButtons('association')">
                <div class="price-card-body">
                <h1>Udruženje</h1>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </button>
       
            </div><!-- end of row -->
          </div><!-- end of col-lg-7-->
        </div> <!-- end of price-info -->
      </div> <!-- end of menu circles--> 
</div>
</template>
<script>
export default {

    data() {
        return{

        }
    },
    props:{
        hideButtons: Boolean,
        selectedButton: String,
        currentRouteName: String
    },
    methods:{
        handleHideButtons(val){
            this.$emit('handle-hide-buttons', val, true)
        }
    }

}
</script>
<style>
/* .{
  color: #404040 !important;
} */
.price-row{
  display: inline-flex !important;
  flex-wrap: wrap;
}
@media (max-width:540px){
  .price-row{
  display: none;
}
}
</style>