<template>
    <div v-if="income === 'do 1500000 rsd' || income === '1500000-4000000 rsd' || income === '4000000-6000000 rsd'"> 
    <h5 v-if="hideNew">Da li želite da budete paušalno oporezovani?</h5>
    <h5 v-else>Da li ste paušalno oporezovani?</h5>
    <div class="form-check">
        <input class="form-check-input" v-model="incomeExtra" type="radio" id="da" name="prihod da" value="da">
        <label class="form-check-label" for="da">da</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" v-model="incomeExtra" type="radio" id="ne" name="prihod ne" value="ne">
        <label class="form-check-label" for="ne">ne</label>
    </div>
    <div class="form-check" v-if="hideNew">
        <input class="form-check-input" v-model="incomeExtra" type="radio" id="nisam-siguran/na" name="nisam siguran" value="nisam-siguran/na">
        <label class="form-check-label" for="nisam siguran">nisam siguran/na</label>
    </div>
</div> <!--end of the extra content -->
</template>
<script>
export default {
    props:{
        incomeExtra: String,
        income: String,
        hideNew: Boolean
    },
}
</script>