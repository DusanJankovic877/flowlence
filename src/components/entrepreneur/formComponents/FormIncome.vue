<template>
                <div class="income">
                    <h5 v-if="hideNew">Prihod koji očekujete da ostvarite u narednih godinu dana (od prodaje proizvoda, usluga...):<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Prihod koje ostvarujete na godišnjem nivou (od prodaje proizvoda, usluga...):</h5>

                    <div class="form-check">
                        <input class="form-check-input 150" v-model="income" type="radio" id="150" name="150" value="do 1500000 rsd">
                        <label class="form-check-label" for="150">do 1500000 rsd 0e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="income" type="radio" id="150-400" name="150-400" value="1500000-4000000 rsd">
                        <label class="form-check-label" for="150-400">1500000-4000000 rsd 5e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="income" type="radio" id="400-600" name="400-600" value="4000000-6000000 rsd">
                        <label class="form-check-label" for="400-600">4000000-6000000 rsd 10e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="income" type="radio" id="600-1000" name="600-1000" value="6000000-10000000 rsd">
                        <label class="form-check-label" for="600-1000">6000000-10000000 rsd 20e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="income" type="radio" id="1000" name="1000" value="preko 10000000 rsd">
                        <label class="form-check-label" for="1000">preko 10000000 rsd 50e</label>
                    </div>
                    <FormIncomeExtra :incomeExtra="incomeExtra" :income="income" :hideNew="hideNew"/>
                </div> <!--end of form-income -->
</template>
<script>
import FormIncomeExtra from './FormIncomeExtra.vue'
export default {
    components:{
        FormIncomeExtra
    },
    props:{
        income:String,
        hideNew: Boolean,
        incomeExtra: String
    },
}
</script>