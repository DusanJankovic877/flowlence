<template>
    <div class="payments">

            <h5 v-if="hideNew">Platni prometi koji ćete obavljati sa Vašim klijentima će biti:<!-- <span class="red"> *</span> --></h5>
            <h5 v-else>Platni prometi koji obavljate sa Vašim klijentima je:</h5>

            <div class="form-check">
                <input class="form-check-input" v-model="payment" type="radio" id="din" name="din" value="samo dinarski">
                <label class="form-check-label" for="din">samo dinarski 0e</label>
            </div>       
            <div class="form-check">
                <input class="form-check-input" v-model="payment" type="radio" id="deviz" name="deviz" value="samo devizni">
                <label class="form-check-label" for="deviz">samo devizni 5e</label>
            </div>   
            <div class="form-check">
                <input class="form-check-input" v-model="payment" type="radio" id="din-deviz" name="div-deviz" value="i dinarski i devizni">
                <label class="form-check-label" for="din-deviz">i dinarski i devizni 5e</label>
            </div>                  
        </div> <!--end of form-payments -->
</template>
<script>
export default {
    props: {
        hideNew: Boolean,
        payment: String
    },
}
</script>