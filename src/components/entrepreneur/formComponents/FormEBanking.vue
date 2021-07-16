<template>
    <div class="e-banking">
        <h5 v-if="hideNew">Elektronsko bankartvo želite da: <!-- <span class="red"> *</span> --></h5>
        <h5 v-else>Elektronsko bankarstvo:</h5>

        <div class="form-check">
            <input class="form-check-input" v-model="eBanking" type="radio" id="e-bank-solo" name="e-bank-solo" value="obavljate samostalno">
            <label class="form-check-label" for="e-bank-solo">obavljate samostalno 0e</label>
        </div>   
        <div class="form-check">
            <input class="form-check-input" v-model="eBanking" type="radio" id="e-bank-accountant" name="e-bank-accountant" value="prepustite knjigovotstvenoj agenciji">
            <label class="form-check-label" for="e-bank-accountant">prepustite knjigovotstvenoj agenciji 5e</label>
        </div>   
    </div> <!--end of form-cash-e-banking -->   
</template>
<script>
export default {
    props: {
        hideNew: Boolean,
        eBanking: String
    },
}
</script>