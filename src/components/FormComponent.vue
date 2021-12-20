<template>
    <div class="col-lg-4 m-auto form-div">
        {{errors}}
        <p v-if="selectedFormOption === 'new ent'">Tek planiram da se registrujem kao preduzetnik</p>
        <p v-else-if="selectedFormOption === 'already ent'">Već poslujem u formi preduzetnika</p>
        <p v-else-if="selectedFormOption === 'new doo'">Tek planiram da se registrujem kao doo</p>
        <p v-else-if="selectedFormOption === 'already doo'">Već poslujem u formi doo</p>
        <p v-else-if="selectedFormOption === 'new assoc'">Tek planiram registraciju Udruženja</p>
        <p v-else-if="selectedFormOption === 'already assoc'">Već postojeće Udruženje</p>
        <form @submit.prevent class="form-sections">
            <div v-for="data in formData.data" :key="data.id">
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

                <!-- EXTRA FIELD  WILL SHOW IF YOU SELECT CERTAIN OPTION -->
                <div  v-if="data.q_id === 42 || data.q_id === 41 || data.q_id === 5 || data.q_id === 6 ">
                    <div  v-if="formValues.thirdQuestion === 65 || formValues.thirdQuestion === 9 || formValues.thirdQuestion === 10 || formValues.thirdQuestion === 11">
                        <h5>{{questionsForQNine.question_text}}</h5>
                        <div class="input-group" v-for="option in questionsForQNine.question_options" :key="option.id">
                            <div class="form-check">
                                <input class="form-check-input"
                                    type="radio"
                                    :value="option.id"
                                    :id="option.id"
                                    v-model="formValues.ninthQuestion"
                                    name="questionNine"
                                />
                                <label  class="form-check-label"  :key="option.id" :for="option.id">{{option.option_text}}</label>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div v-else></div>
            </div>
            <div class="comment">
                <h5>Dodatni komentar:</h5>
                <div class="form-group">
                    <textarea v-model="formValues.comment" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    :placeholder=" selectedFormOption === 'newEntrepreneur' ? 'Ovde možete opisati ukratko Vašu delatnost kojom planirate da se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje' : 'Ovde možete opisati ukratko Vašu delatnost kojom se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje:'"
                    ></textarea>
                </div>
            </div>  <!-- end of form-comment --> 
            <hr>
            <div class="email">
                <h5>Vaša mail adresa na koju želite da Vam pošaljemo <span class="red">*</span> ponudu:</h5>
                <div class="form-group">
                    <label for="email">Email adresa: </label>
                    <input type="email" v-model="formValues.email" name="email" class="form-control" id="email" placeholder="name@example.com" required @input="handleInputs(formValues.email)">
                </div>
                
                <div class="alert alert-danger col-lg-12" role="alert" v-if="errors[0]">
                    {{errors[0].email[0]}}
                </div>
                <div v-else></div>
            </div>  <!-- end of form-email --> 
        </form>
    </div>
</template>
<script>
export default {
    props:{
        formData: Object,
        formValues: Object,
        selectedButton: String,
        selectedFormOption: String,
        questionsForQNine: Object,
        errors:Array
    },
    methods:{
        handleInputs(val){
            this.$emit('handle-inputs', val)
        }
    }

}
</script>
<style>
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