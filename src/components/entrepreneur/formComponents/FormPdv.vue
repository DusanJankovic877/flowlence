<template>
    <div class="pdv">

        <h5 v-if="hideNew">Da li planirate da budete u sistemu pdv-a: <!-- <span class="red"> *</span> --></h5>
        <h5 v-else>Da li ste u sistemu pdv-a:</h5>

        <div class="form-check">
            <input class="form-check-input" v-model="pdv" type="radio" id="pdv-da" name="da" value="pdv-da">
            <label class="form-check-label" for="pdv-da">da 15e</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" v-model="pdv" type="radio" id="pdv-ne" name="ne" value="pdv-ne">
            <label class="form-check-label" for="pdv-ne">ne 0e</label>
        </div>
        <div class="form-check" v-if="hideNew">
            <input class="form-check-input" v-model="pdv" type="radio" id="pdv-da-ne" name="pdv-da-ne" value="nisam siguran/sigurna">
            <label class="form-check-label" for="pdv-da-ne">nisam siguran/sigurna 0e</label>
        </div>
        <div v-else></div>
    </div> <!--end of form-pdv -->
</template>
<script>
export default {
    props: {
        hideNew: Boolean,
        pdv: String
    },
}
</script>