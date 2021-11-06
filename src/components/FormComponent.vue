<template>
<div class="col-lg-4 m-auto form-div">


    <form @submit.prevent>

        <div  class="form-sections" v-for="data in formData.data" :key="data.id">
            <h5>{{data.question_text}}</h5>
            <div class="input-group" v-for="question_o in data.question_options" :key="question_o.id">
                 <div class="form-check">
                    <input class="form-check-input" 
                        :type="data.question_type.type" 
                        :value="question_o.id" 
                        :id="question_o.id" 
                        v-model="formValue[data.name]">
                    <label  class="form-check-label"  :key="question_o.id" :for="question_o.id">{{question_o.option_text}}</label>
                </div>
            </div>
        </div>

    </form>

 


</div>

</template>
<script>
export default {
    data() {
       return{
           formValue:{

               firstQuestion:[],
               secondQuestion: '',
               thirdQuestion:'',
               fourthQuestion: '',
               fifthQuestion: '',
               sixthQuestion: '',
               seventhQuestion: '',
               eighthQuestion: '',
               ninthQuestion: '',
           }
            
               
       } 
    },
    props:{
        formData: Object
    },

}
</script>
<style>
.form-div{
    margin-top:50px !important;
   
}
.form-sections h5{
    color: #404040 ;
    text-align: left;
}
.form-people{
    display: block;
}
</style>