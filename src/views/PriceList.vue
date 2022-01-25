<template>
  <div class="price-list-view col-lg-12">

    <div class="image-p-list-cover" v-if="currentRouteName !== '/'">
      <div class="image-p-list-cover-text col-lg-7">
        <h1>Procena cene usluga</h1>
        <p v-if="!hideButtons">
          Da saznate više o cenama popunite upitnik.
        </p>
          <p v-else-if="selectedButton">
            Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati
            potrebama Vašeg poslovanja.
          </p>
      </div>
      <img class=" responsive"  src="../assets/hands.jpg" alt="" style="visibility: hidden;">
    </div>
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
      <FormComponent :class="showForm ? '' : 'hide'" @handle-inputs="handleInputs" :errors="errors" :formData="formData" :formValues="formValues" :selectedButton="selectedButton" :selectedFormOption="selectedFormOption"/>
      <div class="col-lg-7 m-auto">
        <div v-if="emailFormMessage" class="error-message m-auto">
          {{emailFormMessage}}
        </div>
        <div v-else></div>
      <re-captcha :class="showForm ? 'right-button captcha' : 'hide captcha'" :siteKey="siteKey" @validate="validate" ref="ReCaptcha"/>
      <button v-if="fromRoute === 'home'" class="col-lg-2 btn btn-danger" @click="goToHome(false)">Idi na početnu</button>
      <button v-else class="col-lg-2 left-button btn btn-danger" @click="handleHideForm(false)">idi nazad</button>
      <button :disabled="isActive" :class="showForm ? 'col-lg-2 right-button btn btn-success' : 'hide'" @click="handleSubmitForm">Pošalji</button>
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
// import store from '../store'

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
      defaultValue: {option_text: '/', price: 0, question_text: ''},
      defaultFQ: [ {option_text: '/', price: 0, question_text: ''}],
      siteKey: process.env.VUE_APP_RECAPTCHA_PUBLIC_KEY,
      hideButtons: this.$route.params.from === 'home' ? this.$route.params.hideButtons : false,
      selectedButton: this.$route.params.from === 'home' ? this.$route.params.selectedButton : '',
      selectedFormOption: '',
      hideSelectedButtons: false,
      showForm: false,
      isActive: false,
      timeout: null,
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
      totalPrice:[],
      realTotalPrice:'',
      firstQSum: '',
      questionsForQNine: {},
      removedQuestionOption: {},
      removedPdv:{},
      removedCashRegister:{},
      removedflatRateOption: {},
      ternaryStatement: '',
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
        //selecter options
        selectedFirstOption: [],
        selectedSecondOption: {},
        selectedThirdOption: {},
        selectedFourthOption: {},
        selectedFifthOption: {},
        selectedSixthOption: {},
        selectedSeventhOption: {},
        selectedEighthOption: {},
        selectedNinthOption: {},
    }
  },
  computed: {
    ...mapGetters(['formData','validateReCaptcha', 'emailFormMessage', 'errors']),
    currentRouteName() {
      return this.$route.path;
    },
    routeParams(){
      return this.$route.params
    },
    fromRoute() {
      return this.$route.params.from;
    }
    

   
 
  },


  methods:{
    resetCaptcha(){
      this.$refs.ReCaptcha.reCaptchaReset()
      
    },
    ...mapActions(['getFormData', 'setEmptyFormData','getCaptchaValidate', 'setMailFormData', 'setEmptyEmailFormMessage','getStuff', 'deleteErrors', 'deleteEmailFormMessage']),
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
      await this.getFormData({businessTypeParam: val});
      this.selectedFormOption = val;
      //HANDLING FORM DATA SO THEY CAN PROPERLY DISPLAYED
      //ENTREPRENEUR
      // if(this.selectedButton === 'entrepreneur') {

      //   console.log('this.questionsForQNine ' );
      // }
      //ALREADY ENTREPRENEUR
      if(val === 'already ent'){
        // this.removedQuestionOption = this.questionsForQNine.question_options.pop();
        const flatRateTaxed = this.formData.data.find(x => x.q_id === 24);
        this.removedflatRateOption = flatRateTaxed.question_options.pop();
        const pdvs = this.formData.data.find(x => x.q_id === 26);
        this.removedPdv = pdvs.question_options.pop();
        const cashRegister = this.formData.data.find(x => x.q_id === 32);
        this.removedCashRegister = cashRegister.question_options.pop();
      }
      //ALREADY DOO
      else if(val === 'already doo'){
        const pdvs = this.formData.data.find(x => x.q_id === 44);
        this.removedPdv = pdvs.question_options.pop();
        const cashRegister = this.formData.data.find(x => x.q_id === 50);
        this.removedCashRegister = cashRegister.question_options.pop();
      }
        //ASSOCIATION
      if(this.selectedButton === 'association'){
          if(this.selectedFormOption === 'new assoc'){
            const PersonNumForEmploy = this.formData.data.find(x => x.q_id === 61)
            PersonNumForEmploy.question_options.splice(1,1);
          }else if(this.selectedFormOption === 'already assoc'){
            const PersonNumForEmploy = this.formData.data.find(x => x.q_id === 62)
            PersonNumForEmploy.question_options.shift();
            const pdvs = this.formData.data.find(x => x.q_id === 64)
            this.removedPdv = pdvs.question_options.pop();
            const cashReg = this.formData.data.find(x => x.q_id === 68)
            this.removedCashRegister = cashReg.question_options.pop();
          }
      }
      this.hideSelectedButtons = true;
      this.showForm = true;
    },
    async handleHideForm(val){
      // await this.getStuff()
      //val is boolean
      await this.setEmptyFormData();
      await this.setEmptyEmailFormMessage()
      this.hideButtons = val;
      this.hideSelectedButtons = val;
      this.showForm = val;
      this.selectedButton = ' ';
      this.removedQuestionOption = {};
      //selected questions
      this.selectedFirstQuestions = [];
      this.selectedSecondQuestion = {};
      this.selectedThirdQuestion = {};
      this.selectedFourthQuestion = {};
      this.selectedFifthQuestion = {};
      this.selectedSixthQuestion = {};
      this.selectedSeventhQuestion = {};
      this.selectedEighthQuestion = {};
      this.selectedNinthQuestion = {};
      //selected options
      this.selectedQuestionsOptionsArray =[],
      this.selectedFirstOption= [],
      this.selectedSecondOption= {},
      this.selectedThirdOption= {},
      this.selectedFourthOption= {},
      this.selectedFifthOption= {},
      this.selectedSixthOption= {},
      this.selectedSeventhOption= {},
      this.selectedEighthOption= {},
      this.selectedNinthOption= {},
      this.ternaryStatement= '';
      this.firstQSum= '';
      this.totalPrice = [];
      this.realTotalPrice = '';
      this.isActive = false;
      this.$refs.ReCaptcha.reCaptchaReset();
      //emtying formValues 
      for (var key in this.formValues) {
        if(key === 'firstQuestion')this.formValues[key] = [];
        else this.formValues[key] = '';
      }
      this.deleteErrors();
      this.deleteEmailFormMessage()
    },
    async handleSubmitForm(){
      this.deleteErrors();
      this.timeout = setTimeout(() => Object.keys(this.errors).length === 0 ?  this.isActive = true : this.isActive = false, 2000)
      //FINDING SELECTED DATA AND ASSIGNING IT TO PROPERTIES
      //FIRST QUESTION

      if(this.validateReCaptcha === true){
        this.isActive = true;
      }
      if (this.selectedButton === 'entrepreneur' || this.selectedButton === 'doo') {
     
        const firstQuestion = this.formData.data.find(x=> x.name === 'firstQuestion');

        this.formValues.firstQuestion.forEach(question => {
          firstQuestion.question_options.forEach(option => {
            if (question === option.id) {
              const newOption = {};
              newOption.option_text = option.option_text;
              newOption.price = option.price;
              newOption.question_text = firstQuestion.question_text;
              this.selectedFirstOption.push(newOption);
            }
          });
        });
      }
      else if(this.selectedButton === 'association'){
       
        const firstQuestion = this.formData.data.find(x=> x.name === 'firstQuestion');
        firstQuestion.question_options.forEach(option => {
          const newOption = {};
          if (this.formValues.firstQuestion === option.id) {
            newOption.question_text = firstQuestion.question_text;
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            this.selectedFirstOption = newOption
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
            this.selectedSecondOption = newOption;
        } 
        });
        // THIRD QUESTION
        this.selectedThirdQuestion = this.formData.data.find(x=> x.name === 'thirdQuestion');
        this.selectedThirdQuestion.question_options.forEach(option => {
          if (this.formValues.thirdQuestion === option.id) {
            const newOption = {};
            newOption.id = option.id
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.selectedThirdQuestion.question_text;
            this.selectedThirdOption = newOption;
          }
        });
        //FOURTH QUESTION
          const fourthQuestion = this.formData.data.find(x=> x.name === 'fourthQuestion');
          fourthQuestion.question_options.forEach(option => {
              if(this.selectedButton === 'entrepreneur' || this.selectedButton === 'association'){
                if(this.formValues.thirdQuestion === 36 || this.formValues.thirdQuestion === 37 || this.formValues.thirdQuestion === 38 || this.formValues.thirdQuestion === 92){
                  const newOption = {};
                  newOption.option_text = option.option_text;
                  newOption.price = option.price;
                  newOption.question_text = this.selectedFourthQuestion.question_text;
                  this.selectedFourthOption = newOption;
                 }
              }
          else if(this.selectedButton === 'doo'){
                  const newOption = {};
                  newOption.option_text = option.option_text;
                  newOption.price = option.price;
                  newOption.question_text = this.selectedFourthQuestion.question_text;
                  this.selectedFourthOption = newOption;
              }     
          });   
        //FIFTH QUESTION
        this.selectedFifthQuestion = this.formData.data.find(x=> x.name === 'fifthQuestion');
          this.selectedFifthQuestion.question_options.forEach (option => {
          if (this.formValues.fifthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.selectedFifthQuestion.question_text;
            this.selectedFifthOption = newOption;
          }
        });
        //SIXTH QUESTION
        this.selectedSixthQuestion = this.formData.data.find(x=> x.name === 'sixthQuestion');
        this.selectedSixthQuestion.question_options.forEach(option => {
          if (this.formValues.sixthQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.selectedSixthQuestion.question_text;
            this.selectedSixthOption = newOption;
          }
        });
        //SEVENTH QUESTION
        this.selectedSeventhQuestion = this.formData.data.find(x=> x.name === 'seventhQuestion');
        this.selectedSeventhQuestion.question_options.forEach(option => {
          if (this.formValues.seventhQuestion === option.id) {
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.selectedSeventhQuestion.question_text;
            this.selectedSeventhOption = newOption;
          }
        });
        //EIGHTH QUESTION
        this.selectedEighthQuestion = this.formData.data.find(x=> x.name === 'eighthQuestion');
        this.selectedEighthQuestion.question_options.forEach(option => {
          if (this.formValues.eighthQuestion === option.id){
            const newOption = {};
            newOption.option_text = option.option_text;
            newOption.price = option.price;
            newOption.question_text = this.selectedEighthQuestion.question_text;
            this.selectedEighthOption = newOption;
          } 
        });
        this.selectedNinthQuestion = this.formData.data.find(x=> x.name === 'ninthQuestion');
        this.selectedNinthQuestion.question_options.forEach(option => {
          if (this.formValues.ninthQuestion === option.id){
              const newOption = {};
              newOption.option_text = option.option_text;
              newOption.price = option.price;
              newOption.question_text = this.selectedNinthQuestion.question_text;
              this.selectedNinthOption = newOption;
          }
        });
        //NINTH QEUSTION is fourth in ASSOC in ENTREPRENEUR eight doo is ninth formValues
        // this.selectedNinthQuestion = this.selectedButton === 'entrepreneur' || this.selectedButton === 'association' ? this.formData.data.find(x => x.name === 'eighthQuestion') : this.formData.data.find(x => x.name === 'ninthQuestion') ;
        // this.selectedNinthQuestion.question_options.forEach(option => {
        //   const ternaryStatement = this.selectedButton === 'entrepreneur' || this.selectedButton === 'association' ? this.formValues.eighthQuestion : this.formValues.ninthQuestion;
        //   if (ternaryStatement === option.id) {
        //       const newOption = {};
        //       newOption.option_text = option.option_text;
        //       newOption.price = option.price;
        //       newOption.question_text = this.selectedNinthQuestion.question_text;
        //       this.selectedNinthOption = newOption;
        //   }
        //   });
          //SUMMING SELECTED FORM DATA
          //first question
          if(Object.keys(this.selectedFirstOption).length == 0){
            const firsthQ = this.formData.data.find(x => x.name = 'firstQestion');
            this.defaultFQ.forEach(element => {
              element.question_text = firsthQ.question_text;

            });
            // this.defaultFQ.question_text = 
            this.selectedFirstOption = this.defaultFQ
            this.firstQSum = 0;
            this.totalPrice.push(this.firstQSum);
            }else{ 
              const selectedPrice = [];
              if(this.selectedButton === 'association'){
                selectedPrice.push(this.selectedFirstOption.price)
                }else if(this.selectedButton === 'doo' || this.selectedButton === 'entrepreneur'){
                this.selectedFirstOption.forEach(option => {
                  selectedPrice.push(option.price);
                });
              this.firstQSum = selectedPrice.reduce((a,b) => a + b, 0);
              this.totalPrice.push(this.firstQSum)
              }
            }
          //second question
          if (Object.keys(this.selectedSecondOption).length == 0) {
            const fourthQ = this.formData.data.find(x => x.name = 'secondQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedSecondOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedSecondOption.price);
          }
          //third uqestion
          if (Object.keys(this.selectedThirdOption).length == 0) {
            const fourthQ = this.formData.data.find(x => x.name = 'thirdQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedThirdOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedThirdOption.price);
          }
          //fourth question
          if(Object.keys(this.selectedFourthOption).length === 0){
            const fourthQ = this.formData.data.find(x => x.name = 'fourthQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedFourthOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedFourthOption.price);
          }
          //fifth question
          if(Object.keys(this.selectedFifthOption).length === 0){
            const fifthQ = this.formData.data.find(x => x.name = 'fifthQestion');
            this.defaultValue.question_text = fifthQ.question_text;
            this.selectedFifthOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedFifthOption.price);
          }
          //sixth question
          if(Object.keys(this.selectedSixthOption).length === 0){
            const sixthQ = this.formData.data.find(x => x.name = 'sixthQestion');
            this.defaultValue.question_text = sixthQ.question_text;
            this.selectedSixthOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedSixthOption.price);
          }
          //seventh question
          if(Object.keys(this.selectedSeventhOption).length === 0){
            const fourthQ = this.formData.data.find(x => x.name = 'seventhQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedSeventhOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedSeventhOption.price);
          }
          //eighth question
          if(Object.keys(this.selectedEighthOption).length === 0){
            const fourthQ = this.formData.data.find(x => x.name = 'eighthQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedEighthOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedEighthOption.price);
          }
          //ninth question
          if(Object.keys(this.selectedNinthOption).length === 0){ 
            const fourthQ = this.formData.data.find(x => x.name = 'ninthQestion');
            this.defaultValue.question_text = fourthQ.question_text;
            this.selectedNinthOption = this.defaultValue
            this.totalPrice.push(this.defaultValue.price);
          }else{
            this.totalPrice.push(this.selectedNinthOption.price);
          }
          this.realTotalPrice = this.totalPrice.reduce((a,b) => a + b, 0);
        if (this.validateReCaptcha) {
          const submittedFormData = {
            typeOfFrom: this.selectedFormOption,
            firstQuestion: this.selectedFirstOption,
            secondQuestion: this.selectedSecondOption,
            thirdQuestion: this.selectedThirdOption,
            fourthQuestion: this.selectedFourthOption,
            fifthQuestion: this.selectedFifthOption,
            sixthQuestion: this.selectedSixthOption,
            seventhQuestion: this.selectedSeventhOption,
            eighthQuestion: this.selectedEighthOption,
            ninthQuestion: this.selectedNinthOption,
            email: this.formValues.email,
            comment: this.formValues.comment === '' ? '/' : this.formValues.comment,
            totalPrice: this.realTotalPrice,
            firstQSum: this.firstQSum
          }
          await this.setMailFormData(submittedFormData)
        }
    },
    handleInputs(val){
      if(val){
        this.deleteErrors();
        this.deleteEmailFormMessage()
      }
      else if(this.isActive === false){
        this.isActive = true
      }
    }
  },
  created(){
    if(this.$route.params.selectedOption){
      this.selectedButton = this.$route.params.selectedOption
      this.hideButtons = true
    }
    if(this.$route.params.from === 'home'){
    this.selectedButton = this.$route.params.selectedButton
    }
  },
  beforeDestroy(){
    this.deleteErrors();
    this.deleteEmailFormMessage()
    if(this.$route.params.selectedOption){
      this.selectedButton = ''
      this.hideButtons = false
    }
  }
}
</script>
<style>
  .image-p-list-cover{
    background: url('../assets/hands.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.384);
    position:relative;
  }
  .image-p-list-cover-text{
    color: white;
    position: absolute;
    z-index: 10;
    margin:  4% 0% 0% 21%!important;
  }
.title{
  color: #404040;
}
.price-list-img{
  margin-bottom: 0px;
}
.price-list-component{
    margin-top: 0px;
}
.krug{border: none;color:#404040; border-radius: 10em !important; text-decoration: none;}
.entrepreneur-krug{
    color: #404040;
    border: none;
    background-color: #FBA922;
    height: 320px;
    width: 320px;
    border-radius: 10em !important;
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
.error-message{
  width: 56%;
  background-color: #00A86B;
  color: #053A28
}

@media only screen and (max-width: 1280px){
  .price-list-img{
    margin-bottom: -19px;
  }
  .captcha{
    margin-left: 25% !important;
  }
  .image-p-list-cover-text{
    margin:  2% 0% 0% 20%!important;
  }
}
@media only screen and (max-width: 768px){
  .price-list-img{
    margin-bottom: 64px;
  }
  .captcha{
    margin-left: 30% !important;
  }
  .image-p-list-cover-text{
    margin:  4% 0% 0% 28%!important;
  }
  .image-p-list-cover-text h1{
    font-size: 23px;
  }
  .image-p-list-cover-text p {
    font-size: 16px;
  }
}
@media only screen and (max-width: 540px){
  .price-list-img{
    margin-bottom: 101px;
  }
  .captcha{
    margin-left: 22% !important;
  }
  .image-p-list-cover-text{
    margin:  4% 0% 0% 22%!important;
  }
}

@media only screen and (max-width: 414px){
  .price-list-img{
    margin-bottom: 122px;
  }
  .error-message{
  width: 100%;
  }
  .captcha{
    margin-left: 13% !important;
  }
  .image-p-list-cover-text{
    margin:  4% 0% 0% 21%!important;
  }
  .image-p-list-cover-text h1{
    font-size: 19px;
  }
  .image-p-list-cover-text p {
    font-size: 12px;
  }
}
@media only screen and (max-width: 375px){
  .price-list-img{
    margin-bottom: 128px;
  }
  .captcha{
    margin-left: 8% !important;
  }
  .image-p-list-cover-text{
    margin:  4% 0% 0% 18%!important;
  }
}
@media only screen and (max-width: 360px){
  .price-list-img{
    margin-bottom: 131px;
  }
  .image-p-list-cover-text h1{
    font-size: 17px;
  }
  .image-p-list-cover-text p {
    font-size: 10px;
  }
}
@media only screen and (max-width: 320px){
  .price-list-img{
    margin-bottom: 137px;
  }
  .captcha{
  margin-left: 3% !important;
  }

}
@media only screen and (max-width: 280px){
  .captcha{
    margin-left: 0% !important;
    transform:scale(0.925);
    transform-origin:0 0;
  }
  .image-p-list-cover-text{
    margin:  4% 0% 0% 1%!important;
  }
  .image-p-list-cover-text h1{
    font-size: 15px;
  }
  .image-p-list-cover-text p {
    font-size: 8px;
  }
  .entrepreneur-krug{
    height: 280px;
    width: 280px;
  }
  .entrepreneur-card-body{
    height: 280px;
    width: 280px;
  }

}
</style>