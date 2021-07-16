<template>
    <div class="cash-register">
        <h5 v-if="hideNew">Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>
        <h5 v-else>Da li posedujete fiskalnu kasu:</h5>
        <div class="form-check">
            <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-da" name="f-kasa-da" value="da">
            <label class="form-check-label" for="f-kasa-da">da 5e</label>
        </div>       
        <div class="form-check">
            <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-ne" name="f-kasa-ne" value="ne">
            <label class="form-check-label" for="f-kasa-ne">ne 0e</label>
        </div>   
        <div class="form-check">
            <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-da-ne" name="f-kasa-da-ne" value="nisam siguran/sigurna">
            <label class="form-check-label" for="f-kasa-da-ne">nisam siguran/sigurna 0e</label>
        </div>   
        </div> <!--end of form-cash-register -->   
</template>
<script>
export default {
    props: {
        hideNew: Boolean,
        cashRegister: String
    },
}
</script>