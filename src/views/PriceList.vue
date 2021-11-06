<template>
  <div class="price-list-view">
    <img class="price-list-img responsive" src="../assets/3.jpg" alt="">
    <price-list-component-three-buttons
      :class="hideButtons ? 'hide' : '' " 
      :hideButtons="hideButtons" 
      :selectedButton="selectedButton" 
      :currentRouteName="currentRouteName" 
      @handle-hide-buttons="handleHideButtons" 
      @handle-hide-form="handleHideForm"
    />
    <div :class="hideButtons ? '' : 'hide'">
      <div :class="hideSelectedButtons ? 'hide selected-buttons' : 'selected-buttons'">
        <div v-if="selectedButton === 'entrepreneur'"><EntrepreneurComponent @handle-selected-option="handleSelectedOption"/></div>
        <div v-else-if="selectedButton === 'doo'"><DooComponent @handle-selected-option="handleSelectedOption"/></div>
        <div v-else-if="selectedButton === 'association'"><AssociationComponent @handle-selected-option="handleSelectedOption"/></div>
      </div>
      <FormComponent :class="showForm ? '' : 'hide'" :formData="formData" :formValues="formValues" :lumpSums="lumpSums"/>
      <button v-if="fromRoute === 'home'" class="btn btn-danger" @click="goToHome(false)">Idi na početnu</button>
      <button v-else class="btn btn-danger" @click="handleHideForm(false)">idi nazad</button>
    </div>
  </div>
</template>
<script>
import { mapActions, 
mapGetters, 
mapMutations
} from 'vuex'
import PriceListComponentThreeButtons from '../components/PriceListComponentThreeButtons.vue'
import EntrepreneurComponent from '../components/EntrepreneurComponent.vue'
import DooComponent from '../components/DooComponent.vue'
import AssociationComponent from '../components/AssociationComponent.vue'
import FormComponent from '../components/FormComponent.vue'
export default {
  components:{
    PriceListComponentThreeButtons,
    EntrepreneurComponent,
    DooComponent,
    AssociationComponent,
    FormComponent
  },
  data() {
    return {
      hideButtons: false,
      selectedButton: '',
      hideSelectedButtons: false,
      showForm: false,
      formValues:{
        firstQuestion:[],
        secondQuestion: '',
        thirdQuestion:'',
        fourthQuestion: '',
        fifthQuestion: '',
        sixthQuestion: '',
        seventhQuestion: '',
        eighthQuestion: '',
        ninthQuestion: '',
      },
      lumpSums: {},
      removedQuestionOption: {}
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
    ...mapMutations(['setEmptyFormData']),
    ...mapActions(['getFormData']),
    async handleHideButtons(val, bool){
      this.hideButtons = bool
      this.selectedButton = val
       
    },
    goToHome(val){
      // val is boolean
      this.hideButtons = val;
      this.$router.push('/')
    },
    async handleSelectedOption(val){
      // val is string
      await this.getFormData({name: val})
      const income = this.formData.data.splice(2, 1);
      this.formData.data.push(income[0]);
      const lupmS = this.formData.data.splice(7, 1);
        this.lumpSums = lupmS[0]
     
      if(val === 'alreadyEntrepreneur'){

        this.removedQuestionOption = this.lumpSums.question_options.pop();
    

      }
      this.hideSelectedButtons = true;
      this.showForm = true;
    },

    async handleHideForm(val){
      //val is boolean
      await this.setEmptyFormData();
      this.hideButtons = val
      this.hideSelectedButtons = val;
      this.showForm = val
      this.selectedButton = ' '
      
      if(this.lumpSum.question_options.length){
        this.lumpSum.question_options.push(this.removedQuestionOption);
        this.removedQuestionOption = {}
        }
      
    },

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
.title{
  color: #404040;
}
.price-list-img{
  margin-bottom: 0px;
}
.price-list-component{
    margin-top: 0px;
}
.krug{border: none;color:#404040;}
.entrepreneur-krug{
    color: #404040;
    border: none;
    background-color: #FBA922;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;

}

.entrepreneur-krug:hover{
  color: white;
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