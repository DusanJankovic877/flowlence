<template>
<div class="col-lg-7 m-auto">

      <hr>
        <h2 v-if="hideNew">Novi preduzetnik</h2>
        <h1 v-else>Postojeći preduzetnik</h1>
        <hr>
     
        <form >
            <h4 v-if="hideNew">Tek planiram da se registrujem kao preduzetnik</h4>
            <h4 v-else>Već poslujem u formi preduzetnika</h4>
            <hr>
             <FormServices :hideNew="hideNew" :checkedServices="entrepreneurForm.checkedServices"/> 
            <hr>
            <FormPeople :hideNew="hideNew" :people="entrepreneurForm.people" />
            <hr>
            <FormIncome :hideNew="hideNew" :incomeExtra="entrepreneurForm.incomeExtra" />
            <hr>
            <FormPdv :hideNew="hideNew" :pdv="entrepreneurForm.pdv"/>
            <hr>
            <FormPayments :hideNew="hideNew" :payment="entrepreneurForm.payment"/>
            <hr>
            <FormClients :hideNew="hideNew" :clients="entrepreneurForm.clients"/>
            <hr>
            <FormCashRegister :hideNew="hideNew" :cashRegister="entrepreneurForm.cashRegister"/>
            <hr>
            <FormEBanking :hideNew="hideNew" :eBanking="entrepreneurForm.eBanking"/>
            <hr>
            <FormComment :hideNew="hideNew" :comment="entrepreneurForm.comment"/> 
            <hr>
            <FormEmail :email="entrepreneurForm.email"/>
            
            <button class="btn btn-secondary">Pošalji</button>
        </form>
</div>
</template>
<script>
import FormServices from './formComponents/FormServices.vue'
import FormPeople from './formComponents/FormPeople.vue'
import FormIncome from './formComponents/FormIncome.vue'
import FormPdv from './formComponents/FormPdv.vue'
import FormPayments from './formComponents/FormPayments.vue'
import FormClients from './formComponents/FormClients.vue'
import FormCashRegister from './formComponents/FormCashRegister.vue'
import FormEBanking from './formComponents/FormEBanking.vue'
import FormComment from './formComponents/FormComment.vue'
import FormEmail from './formComponents/FormEmail.vue'
export default {
    components:{
        FormServices,
        FormPeople,
        FormIncome,
        FormPdv,
        FormPayments,
        FormClients,
        FormCashRegister,
        FormEBanking,
        FormComment,
        FormEmail
        
    },
    data() {
        return{
            
            entrepreneurForm:{
                checkedServices: [],
                people: '',
                incomeExtra: '',
                pdv: '',
                payment: '',
                clients: '',
                cashRegister: '',
                eBanking: '',
                comment: '',
                email: ''
            }
        } 
    },
    props: {hideNew: Boolean},

    
    
}
</script>
<style>
.red{
    color: red;
}
form{

    text-align: left;
}
.form-people{
    display: block;
}
</style>