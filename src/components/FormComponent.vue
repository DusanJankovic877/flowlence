<template>
    <div class="col-lg-4 m-auto form-div">
        <div style="margin-bottom: 50px;">
            <h3 v-if="selectedFormOption === 'new ent'">Tek planiram da se registrujem kao preduzetnik</h3>
            <h3 v-else-if="selectedFormOption === 'already ent'">Već poslujem u formi preduzetnika</h3>
            <h3 v-else-if="selectedFormOption === 'new doo'">Tek planiram da se registrujem kao doo</h3>
            <h3 v-else-if="selectedFormOption === 'already doo'">Već poslujem u formi doo</h3>
            <h3 v-else-if="selectedFormOption === 'new assoc'">Tek planiram registraciju Udruženja</h3>
            <h3 v-else-if="selectedFormOption === 'already assoc'">Već postojeće Udruženje</h3>
        </div>
        <form @submit.prevent class="form-sections">
            <div v-for="data in formData.data" :key="data.id">
                <div v-if="selectedButton === 'doo' ? true : data.name !== 'fourthQuestion' ">
                    <h5>{{data.question_text}}</h5>
                    <div class="input-group" v-for="question_o in data.question_options" :key="question_o.id">
                        <!-- adding click to first 3 options in 3rd question -->
                            <div class="form-check" v-if="question_o.id === 36 || question_o.id === 37 || question_o.id === 38 || question_o.id === 92">
                                <input class="form-check-input" 
                                    @click="show=true"
                                    :type="data.question_type.type" 
                                    :value="question_o.id" 
                                    :id="question_o.id" 
                                    v-model="formValues[data.name]"
                                    :name="data.name"
                                    >
                                <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                            </div>
                            <div class="form-check" v-else-if="question_o.id === 39 || question_o.id === 40 || question_o.id === 93">
                                <input class="form-check-input" 
                                    @click="show=false"
                                    :type="data.question_type.type" 
                                    :value="question_o.id" 
                                    :id="question_o.id" 
                                    v-model="formValues[data.name]"
                                    :name="data.name"
                                    >
                                <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                            </div>
                            <!-- all other options for all other questions -->
                            <div class="form-check" v-else>
                                <input class="form-check-input"  
                                    :type="data.question_type.type" 
                                    :value="question_o.id" 
                                    :id="question_o.id" 
                                    v-model="formValues[data.name]"
                                    :name="data.name"
                                    >
                                <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                            </div>
                    </div>
                    <hr>
                </div>
                <transition name="slide-question">
                <div 
                    v-if="
                        data.q_id === 23 ||
                        data.q_id === 24 ||
                        data.q_id === 59 ||
                        data.q_id === 60" 
                    v-show="show"
                >
                    <div v-if="formValues.thirdQuestion === 36 || formValues.thirdQuestion === 37 || formValues.thirdQuestion === 38 || formValues.thirdQuestion === 92">
                        <h5>{{data.question_text}}</h5>
                        <div class="input-group" v-for="question_o in data.question_options" :key="question_o.id">
                                <div class="form-check">
                                    <input class="form-check-input" 
                                        :type="data.question_type.type" 
                                        :value="question_o.id" 
                                        :id="question_o.id" 
                                        v-model="formValues[data.name]"
                                        :name="data.name"
                                        >
                                    <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                                </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <!-- <div v-else></div> -->
                </transition>
            </div>
           <div class="comment">
                <h5>Dodatni komentar:</h5>
                <div class="form-group">
                    <textarea v-model="formValues.comment" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    :placeholder=" selectedFormOption === 'newEntrepreneur' ? 'Ovde možete opisati ukratko Vašu delatnost kojom planirate da se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje' : 'Ovde možete opisati ukratko Vašu delatnost kojom se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje:'"
                    ></textarea>
                </div>
            </div> 
            <!-- end of form-comment --> 
            <br>
            <div class="email">
                <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu:&nbsp;<span class="red">*</span></h5>
                <div class="form-group">
                    <label for="email">Email adresa: </label>
                    <input type="email" v-model="formValues.email" name="email" class="form-control" id="email" placeholder="name@example.com" required @input="handleInputs(formValues.email)">
                </div>
                
                <div class="alert alert-danger col-lg-12" role="alert" v-if="errors[0]">
                    {{errors[0].email[0]}}
                </div>
                <div v-else></div>
            </div>   
            <!-- end of form-email --> 
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: false,
            oldStyle:{
                backgroundColor: 'white'
            },
            newStyle:{
                backgroundColor: 'gray'
            },
          
        }
    },
    props:{
        formData: Object,
        formValues: Object,
        selectedButton: String,
        selectedFormOption: String,
        questionsForQNine: Object,
        errors:Array,
    },
    methods:{
        handleInputs(val){
            this.$emit('handle-inputs', val)
        },
        resetCaptcha(){
            this.$refs.ReCaptcha.reCaptchaReset()
        }
    }

}
</script>
<style>
.slide-question-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-question-leave-active {
    transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-question-enter, .slide-question-leave-to {
    background-color: rgb(253, 0, 0) !important;
    transform: translateY(-100px);
    opacity: 0;
}
.form-div{
    margin-top:50px !important;
    padding: 10px;
}
.form-sections h5{
    color: #404040 ;
    text-align: left;
}
.form-people{
    display: block;
}
.red{
    color: red;
}
@media only screen and (max-width: 1280px){
    .form-div{
    margin-top:10px !important;}
}
</style>