<template>
  <div class="price-list-view col-lg-12">
    <img class="price-list-img responsive" src="../assets/3.jpg" alt="">
    <pre>

<!-- {{formData.data}} -->
    </pre>
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
      <FormComponent :class="showForm ? '' : 'hide'" :formData="formData" :formValues="formValues" :questionNine="questionNine" :selectedButton="selectedButton" :selectedFormOption="selectedFormOption"/>
      
      <div class="col-lg-7 m-auto">
      <re-captcha :class="showForm ? 'right-button' : 'hide '" :siteKey="siteKey" @validate="validate"/>
      <button v-if="fromRoute === 'home'" class="col-lg-2 btn btn-danger" @click="goToHome(false)">Idi na početnu</button>
      <button v-else class="col-lg-2 left-button btn btn-danger" @click="handleHideForm(false)">idi nazad</button>
      <button :class="showForm ? 'col-lg-2 right-button btn btn-success' : 'hide'" @click="handleSubmitForm">Pošalji</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PriceListComponentThreeButtons from '../components/PriceListComponentThreeButtons.vue'
import EntrepreneurComponent from '../components/EntrepreneurComponent.vue'
import DooComponent from '../components/DooComponent.vue'
import AssociationComponent from '../components/AssociationComponent.vue'
import FormComponent from '../components/FormComponent.vue'
import ReCaptcha from '../components/ReCaptcha.vue'


export default {
  components:{
    PriceListComponentThreeButtons,
    EntrepreneurComponent,
    DooComponent,
    AssociationComponent,
    FormComponent,
    ReCaptcha
  },
  data(){
    return {
      siteKey: process.env.VUE_APP_RECAPTCHA_PUBLIC_KEY,
      hideButtons: false,
      selectedButton: '',
      selectedFormOption: '',
      hideSelectedButtons: false,
      showForm: false,
      formValues:{
        firstQuestion:[],
        secondQuestion: '',
        fourthQuestion: '',
        fifthQuestion: '',
        sixthQuestion: '',
        seventhQuestion: '',
        eighthQuestion: '',
        thirdQuestion:'',
        ninthQuestion: '',
        email: '',
        comment: ''
      },
      questionNine: {},
      removedQuestionOption: {},
      removedPdv:{},
      removedCashRegister:{},
      //selected data for summing
        selectedFirstQuestions:[], 
        selectedSecondQuestion: {},
        selectedThirdQuestion: {},
        selectedFourthQuestion:{},
        selectedFifthQuestion: {},
        selectedSixthQuestion: {},
        selectedSeventhQuestion: {},
        selectedEighthQuestion: {},
        selectedNinthQuestion: {},
    }
  },
  computed: {
    ...mapGetters(['formData','validateReCaptcha']),
    currentRouteName() {
      return this.$route.path;
    },
    fromRoute() {
      return this.$route.params.from;
    }
  },
  methods:{
    ...mapActions(['getFormData', 'setEmptyFormData','getCaptchaValidate', 'setMailFormData']),
    async handleHideButtons(val, bool){
      //val is a string
      this.hideButtons = bool;
      this.selectedButton = val;
    },
    goToHome(val){
      // val is boolean
      this.hideButtons = val;
      this.$router.push('/');
    },
     validate(response){
        this.getCaptchaValidate(response);
    },
    async handleSelectedOption(val){
      // val is string
      await this.getFormData({name: val});
      this.selectedFormOption = val;
      //ENTREPRENEUR
      if(this.selectedButton === 'entrepreneur') {
        const income = this.formData.data.splice(2, 1);
        this.formData.data.push(income[0]);
        const lupmS = this.formData.data.splice(7, 1);
        this.questionNine = lupmS[0];
      }
      //ASSOCIATION
      else if(this.selectedButton === 'association'){
        const income = this.formData.data.splice(3, 1);
        this.questionNine = income[0];
        const economicActivity = this.formData.data.splice(2, 1);
        this.formData.data.push(economicActivity[0]);
      }
      //ALREADY ENTREPRENEUR
      if(val === 'alreadyEntrepreneur'){
        this.removedQuestionOption = this.questionNine.question_options.pop();
        const pdvs = this.formData.data.find(x => x.q_id === 8);
        this.removedPdv = pdvs.question_options.pop();
        const cashRegister = this.formData.data.find(x => x.q_id === 14);
        this.removedCashRegister = cashRegister.question_options.pop();
      }
      //ALREADY DOO
      else if(val === 'alreadyDoo'){
        const pdvs = this.formData.data.find(x => x.q_id === 28);
        this.removedPdv = pdvs.question_options.pop();
        const cashRegister = this.formData.data.find(x => x.q_id === 34);
        this.removedCashRegister = cashRegister.question_options.pop();
      }
      //ALREADY ASSOCIATION
      else if(val === 'alreadyAssociation'){
        const pdvs = this.formData.data.find(x => x.q_id === 48);
        this.removedPdv = pdvs.question_options.pop();
        const cashRegister = this.formData.data.find(x => x.q_id === 52);
        this.removedCashRegister = cashRegister.question_options.pop();
      }
     
      
      this.hideSelectedButtons = true;
      this.showForm = true;
    },
    async handleHideForm(val){
      //val is boolean
      await this.setEmptyFormData();
      this.hideButtons = val;
      this.hideSelectedButtons = val;
      this.showForm = val;
      this.selectedButton = ' ';
      this.removedQuestionOption = {};
      this.questionNine = {};
      this.selectedFirstQuestions = [];
      this.selectedSecondQuestion = {};
      this.selectedThirdQuestion = {};
      this.selectedFourthQuestion = {};
      this.selectedFifthQuestion = {};
      this.selectedSixthQuestion = {};
      this.selectedSeventhQuestion = {};
      this.selectedEighthQuestion = {};
      this.selectedNinthQuestion = {};

      //emtying formValues 
      for (var key in this.formValues) {
        if(key === 'firstQuestion')this.formValues[key] = [];
        else this.formValues[key] = '';
      }
    },
    async handleSubmitForm(){
      // if (this.validateReCaptcha) {
      //   await this.setMailFormData()
      // }
      //FIRST QUESTION
      if (this.selectedButton === 'entrepreneur' || this.selectedButton === 'doo') {
        const firstQuestion = this.formData.data.find(x=> x.name === 'firstQuestion');
        this.formValues.firstQuestion.forEach(question => {
          firstQuestion.question_options.forEach(option => {
            if (question === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = firstQuestion.question_text;
            this.selectedFirstQuestions.push(newOption);
            }
          });
        });
      }else if(this.selectedButton === 'association'){
        const firstQuestion = this.formData.data.find(x=> x.name === 'firstQuestion');
        firstQuestion.question_options.forEach(option => {
              if (this.formValues.firstQuestion === option.id) {
                const newOption = {};
                newOption.option_text = option.option_text;
                newOption.price = option.price;
                newOption.question_text = firstQuestion.question_text;
                this.selectedFirstQuestions.push(newOption);
              }
        });
      }
      //SECOND QUESTION
        const secondQuestion = this.formData.data.find(x=> x.name === 'secondQuestion');
        secondQuestion.question_options.forEach(option => {
          if (this.formValues.secondQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = secondQuestion.question_text;
            this.selectedSecondQuestion = newOption;
        } 
        });
        //THIRD QUESTION but it is 4th because i have removed 3rd question at the end of array
        const fourthQuestion = this.formData.data.find(x=> x.name === 'fourthQuestion');
        fourthQuestion.question_options.forEach(option => {
          if (this.formValues.fourthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = fourthQuestion.question_text;
            this.selectedThirdQuestion = newOption;
          }
        });
        //FOURTH QUESTION
        const fifthQuestion = this.formData.data.find(x => x.name === 'fifthQuestion');
        fifthQuestion.question_options.forEach(option => {
          if (this.formValues.fifthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = fifthQuestion.question_text;
            this.selectedFourthQuestion = newOption;
          }
        });
        //FIFTH QUESTION
        const sixthQuestion = this.formData.data.find(x => x.name === 'sixthQuestion');
        sixthQuestion.question_options.forEach(option => {
          if (this.formValues.sixthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = sixthQuestion.question_text;
            this.selectedFifthQuestion = newOption;
          }
        });
        //SIXTH QUESTION
        const seventhQuestion = this.formData.data.find(x => x.name === 'seventhQuestion');
        seventhQuestion.question_options.forEach(option => {
          if (this.formValues.seventhQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = seventhQuestion.question_text;
            this.selectedSixthQuestion = newOption;
          }
        });
        //SEVENTH QUESTION
        const eighthQuestion = this.formData.data.find(x => x.name === 'eighthQuestion');
        eighthQuestion.question_options.forEach(option => {
          if (this.formValues.eighthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = eighthQuestion.question_text;
            this.selectedSeventhQuestion = newOption;
          }
        });
        //EIGHTH QUESTION
        const thirdQuestion = this.formData.data.find(x => x.name === 'thirdQuestion');
        thirdQuestion.question_options.forEach(option => {
          if (this.formValues.thirdQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = thirdQuestion.question_text;
            this.selectedEighthQuestion = newOption;
          }
        });
        //NINTH QEUSTION
        console.log(this.questionNine);
        this.questionNine.question_options.forEach(option => {
          if (this.formValues.ninthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.questionNine.question_text;
            this.selectedNinthQuestion = newOption;
          }
        });       
        // console.log(this.selectedNinthQuestion);


     

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
.right-button{margin-left:22% !important;}
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