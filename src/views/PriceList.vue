<template>
  <div class="price-list-view">
    <img class="price-list-img responsive" src="../assets/3.jpg" alt="">
    <price-list-component-three-buttons
      :class="hideButtons ? 'hide' : '' " 
      :hideButtons="hideButtons" 
      :selectedButton="selectedButton" 
      :currentRouteName="currentRouteName" 
      :formData="formData"
      @handle-hide-buttons="handleHideButtons" 
      @handle-hide-form="handleHideForm"
      @hadnle-get-selected-data-options="handleGetSelectedDataOptions"
    />
    <div :class="hideButtons ? '' : 'hide'">
      <h1>forma</h1>
      <div class="selected-buttons">
        <div v-if="selectedButton === 'entrepreneur'"><EntrepreneurComponent/></div>
        <div v-else-if="selectedButton === 'doo'"><DooComponent/></div>
        <div v-else-if="selectedButton === 'association'"><AssociationComponent/></div>
      </div>
      <!-- <price-list-components-selected-buttons :selectedButton="selectedButton"/> -->
      <!-- <example :formData="formData"/> -->
      <button v-if="fromRoute === 'home'" class="btn btn-danger" @click="goToHome">Idi na početnu</button>
      <button v-else class="btn btn-danger" @click="handleHideForm(false)">idi nazad</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PriceListComponentThreeButtons from '../components/PriceListComponentThreeButtons.vue'
import EntrepreneurComponent from '../components/EntrepreneurComponent.vue'
import DooComponent from '../components/DooComponent.vue'
import AssociationComponent from '../components/AssociationComponent.vue'
export default {
  components:{
    PriceListComponentThreeButtons,
    EntrepreneurComponent,
    DooComponent,
    AssociationComponent,
  },
  data() {
    return {
      hideButtons: false,
      selectedButton: ''
    }
  },
  computed: {
    ...mapGetters(['formData']),
    currentRouteName() {
      return this.$route.path;
    },
    fromRoute() {
      return this.$route.params.from;
    }
  },

  methods:{
    ...mapActions(['getFormData', 'getSelectedDataOptions']),
    async handleHideButtons(val, bool){
      this.hideButtons = bool
      this.selectedButton = val
      this.formData = await this.getFormData({name: this.selectedButton})
    },
    async handleGetSelectedDataOptions(val){
      await this.getSelectedDataOptions(val)
    },

    handleHideForm(val){
      this.hideButtons = val
      this.selectedButton = ' '
    },
    goToHome(){
      this.$router.push('/')
    }

  },
  created(){
    if(this.$route.params.from === 'home'){
    this.selectedButton = this.$route.params.selectedButton
    this.hideButtons = true;
    }
  }

  
}
</script>
<style>

.price-list-img{
  margin-bottom: 0px;
}
.price-list-component{
    margin-top: 0px;
}

.entrepreneur-prices-link{
  text-decoration: none;
  color: #385663;
  border-radius: 25em;
  border: none;
  background-color: #FBA922;
}
.entrepreneur-prices-link:hover{
  color: white !important;
  background-color: #385663 ;
}
.krug{border: none;}
.entrepreneur-krug{
    background-color: #FBA922;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;

}
.entrepreneur-krug:hover {

  text-decoration: none;
  background-color: #385663 ;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;
} 
.entrepreneur-card-body{
  height: 320px;
  width: 320px;
  border-radius: 25em !important;
  padding: 93px 10px 0 10px;
}
.hide{
    display: none !important;
}
@media only screen and (max-width: 1280px){

.price-list-img{
  margin-bottom: -19px;
}
}
@media only screen and (max-width: 768px){

.price-list-img{
  margin-bottom: 64px;
}
}
@media only screen and (max-width: 540px){
  .price-list-img{
  margin-bottom: 101px;
}
}
@media only screen and (max-width: 414px){
  .price-list-img{
  margin-bottom: 122px;
}
}
@media only screen and (max-width: 375px){
.price-list-img{
  margin-bottom: 128px;
}
}
@media only screen and (max-width: 360px){
.price-list-img{
  margin-bottom: 131px;
}
}
@media only screen and (max-width: 320px){
  .price-list-img{
  margin-bottom: 137px;

}

}
</style>