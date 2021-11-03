<template>
<div>
      <div v-if="hideButtons" class="menu-circles">
        <svg v-if="currentRouteName === '/'" class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6e6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div class="price-info ">
          <div class="price-circle-content col-lg-7 m-auto">
            <h1 class="pl-content-heading">Procena cene usluga</h1>
            <p>Da saznate više o cenama kliknite na dugme više o cenama</p>
            <div class="price-row">
               <div class="krug" @click="handleHideButtons('entrepreneur')">
              <router-link class="krug prices-link"  to="/price-list">
                <div class="price-card-body">
                <h1>Preduzetnik</h1>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p><b>pošaljite upitnik</b></p>
                </div>
              </router-link>
               </div>
               <div class="krug"  @click="handleHideButtons('doo')">
              <router-link class="krug prices-link" to="/price-list">
                  <div class="price-card-body">
                  <h1>DOO</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p><b>pošaljite upitnik</b></p>
                  </div>
              </router-link>
               </div>
              <div class="krug"  @click="handleHideButtons('association')">
              <router-link class="krug prices-link" to="/price-list">
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
        <svg v-if="currentRouteName === '/'" class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E6E6E6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div v-else></div>
      </div> <!-- end of menu circles--> 
      <div v-else>
        <h1>forma</h1>
        <price-list-components-selected-buttons :selectedButton="selectedButton"/>
        <!-- <example :formData="formData"/> -->
        <button class="btn btn-danger" @click="handleHideForm(true)">idi nazad</button>
      </div>
</div>
</template>
<script>
import PriceListComponentsSelectedButtons from './PriceListComponentsSelectedButtons.vue'
export default {
  components: { PriceListComponentsSelectedButtons },
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
            this.$emit('hadnle-get-selected-data-options', val)
            this.$emit('handle-hide-buttons', val)
        },
        handleHideForm(val){
            this.$emit('handle-hide-form', val)
        }
    }

}
</script>
<style>
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