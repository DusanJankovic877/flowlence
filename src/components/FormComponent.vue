<template>
<div class="col-lg-4 m-auto form-div">

    <form @submit.prevent class="form-sections">
        <div v-for="data in formData.data" :key="data.id">
            <h5>{{data.question_text}}</h5>
            <div class="input-group" v-for="question_o in data.question_options" :key="question_o.id">
                 <div class="form-check">
                    <input class="form-check-input" 
                        :type="data.question_type.type" 
                        :value="question_o.id" 
                        :id="question_o.id" 
                        v-model="formValues[data.name]">
                    <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                </div>
            </div>
              <hr>
        </div>
       
        <!--EXTRA FIELD -->
        <!-- ENTREPRENEUR -->
        <div v-if="formValues.thirdQuestion === 9 || formValues.thirdQuestion === 10 || formValues.thirdQuestion === 11 && selectedButton === 'entrepreneur'">
            <h5>{{questionNine.question_text}}</h5>
            <div class="input-group" v-for="lumpSum in questionNine.question_options" :key="lumpSum.id">
                <div class="form-check">
                    <input class="form-check-input" 
                        type="radio" 
                        :value="lumpSum.id" 
                        :id="lumpSum.id" 
                        v-model="formValues.ninthQuestion"
                    >
                    <label  class="form-check-label" :for="lumpSum.id">{{lumpSum.option_text}}</label>
                </div>
            </div> 
            <hr>
        </div>
      
        <!-- ASSOCIATION -->
        <div v-if="formValues.thirdQuestion === 65 && selectedButton === 'association'">
            <div class="input-group" v-for="income in questionNine.question_options" :key="income.id">
                <div class="form-check">
                    <input class="form-check-input"
                            type="radio"
                            :value="income.id"
                            :id="income.id"
                            v-model="formValues.ninthQuestion"
                    >
                    <label class="form-check-label" :for="income.id">{{income.option_text}}</label>

                </div>
            </div>
            <hr>
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

            <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu: <span class="red"> *</span></h5>
            <div class="form-group">
                <label for="email">Email adresa: </label>
                <input type="email" v-model="formValues.email" name="email" class="form-control" id="email" placeholder="name@example.com" required>
            </div>

        </div>  <!-- end of form-email --> 
           
    </form>
<!-- trebs dodati error messages -->
 


</div>

</template>
<script>
export default {
    props:{
        formData: Object,
        formValues: Object,
        questionNine: Object,
        selectedButton: String,
        selectedFormOption: String
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