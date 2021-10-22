<template>
    <div class="price-list col-lg-12">
      <price-list-component-three-buttons 
        :hideButtons="hideButtons" 
        :selectedButton="selectedButton" 
        :currentRouteName="currentRouteName" 
        :formData="formData" 
        @handle-hide-buttons="handleHideButtons" 
        @handle-hide-form="handleHideForm"
        @hadnle-get-selected-data-options="handleGetSelectedDataOptions"
        />

    </div> <!-- end of price list -->
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
// import store from '../store'
// import Example from '../views/Example.vue'
import PriceListComponentThreeButtons from './PriceListComponentThreeButtons.vue'
export default{
  components: { 
    // Example, 
  PriceListComponentThreeButtons },
  data() {
    return {
      hideButtons: true,
      selectedButton: ''
    }
  },
  methods:{
    ...mapActions(['getFormData', 'getSelectedDataOptions']),
    async handleHideButtons(val){
      this.hideButtons = false
      this.selectedButton = val
      await this.getFormData({name: this.selectedButton})
    },
   async handleGetSelectedDataOptions(val){
     await this.getSelectedDataOptions(val)
    },
    handleHideForm(val){
      this.hideButtons = val
      this.selectedButton = ' '
    }
  },
    computed: {
      ...mapGetters(['formData']),
    currentRouteName() {
        return this.$route.path;
    }
},
    async created(){
      if(this.selectedButton === 'entrepreneur'){

        // await store.dispatch('getExampleFormData')
      }
    }
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