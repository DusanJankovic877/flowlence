<template>
<div class="col-lg-4 m-auto">
<pre>

    <!-- {{formData.services}} -->
</pre>

    <form @submit.prevent>
        <div class="form-services" v-for="service in formData.services" :key="service.id">
            <h5>{{service.question_text}}</h5>
            <div class="input-group form-services"  v-for="option in service.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="service.question_type.type" :id="option.id" :value="option.id" v-model="servicesId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>

        <div class="form-people" v-for="person in formData.people" :key="person.id">
            <h5>{{person.question_text}}</h5>
            <div class="input-group"  v-for="option in person.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="person.question_type.type" :id="option.id" :value="option.id" v-model="personId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>

        <div class="form-income" v-for="income in formData.incomes" :key="income.id">
            <h5>{{income.question_text}}</h5>
            <div class="input-group"  v-for="option in income.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="income.question_type.type" :id="option.id" :value="option.id" v-model="incomeId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <!-- EXTRA INCO)ME -->
        <div class="form-extra-income" v-for="extra_income in formData.extra_incomes" :key="extra_income.id">
            <h5>{{extra_income.question_text}}</h5>
            <div class="input-group"  v-for="option in extra_income.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="extra_income.question_type.type" :id="option.id" :value="option.id" v-model="extraIncomeId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <!-- NED OF EXTRA INCO)ME -->
        <div class="form-pdv" v-for="pdv in formData.pdvs" :key="pdv.id">
            <h5>{{pdv.question_text}}</h5>
            <div class="input-group"  v-for="option in pdv.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="pdv.question_type.type" :id="option.id" :value="option.id" v-model="pdvId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <div class="form-pdv" v-for="payment in formData.payments" :key="payment.id">
            <h5>{{payment.question_text}}</h5>
            <div class="input-group"  v-for="option in payment.question_options" :key="option.id">
                <div class="form-check ">
                <input class="form-check-input" :type="payment.question_type.type" :id="option.id" :value="option.id" v-model="paymentId">
                <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <div class="form-pdv" v-for="client in formData.clients" :key="client.id">
            <h5>{{client.question_text}}</h5>
            <div class="input-group"  v-for="option in client.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="client.question_type.type" :id="option.id" :value="option.id" v-model="clientId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <div class="form-pdv" v-for="cash_register in formData.cash_registers" :key="cash_register.id">
            <h5>{{cash_register.question_text}}</h5>
            <div class="input-group"  v-for="option in cash_register.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="cash_register.question_type.type" :id="option.id" :value="option.id" v-model="cashRegisterId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
                </div>
            </div>
        </div>
        <div class="form-pdv" v-for="e_banking in formData.e_bankings" :key="e_banking.id">
            <h5>{{e_banking.question_text}}</h5>
            <div class="input-group"  v-for="option in e_banking.question_options" :key="option.id">
                <div class="form-check">
                    <input class="form-check-input" :type="e_banking.question_type.type" :id="option.id" :value="option.id" v-model="eBankingId">
                    <label class="form-check-label" :for="option.id">{{option.option_text}}</label>
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
           servicesId: [],
           personId: '',
           incomeId:'',
           extraIncomeId: '',
           pdvId: '',
           paymentId: '',
           clientId: '',
           cashRegisterId: '',
           eBankingId: '',
       } 
    },
    props:{
        formData: Object
    },

}
</script>
<style>
form h5{
    color: #404040 ;
}
form{
    
    text-align: left;
}
.form-people{
    display: block;
}
</style>