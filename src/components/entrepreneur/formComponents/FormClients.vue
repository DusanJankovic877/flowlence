<template>
    <div class="clients">
    <h5 v-if="hideNew">Vaši klijenti će biti:<!-- <span class="red"> *</span> --></h5>
    <h5 v-else>Vaši klijenti su:</h5>

    <div class="form-check">
        <input class="form-check-input" v-model="clients" type="radio" id="fiz" name="fiz" value="fizicka lica">
        <label class="form-check-label" for="fiz">fizicka lica 10e </label>
    </div>       
    <div class="form-check">
        <input class="form-check-input" v-model="clients" type="radio" id="prav" name="prav" value="pravna lica">
        <label class="form-check-label" for="prav">pravna lica 0e</label>
    </div>   
    <div class="form-check">
        <input class="form-check-input" v-model="clients" type="radio" id="fiz-prav" name="fiz-prav" value="i fizicka i pravna">
        <label class="form-check-label" for="fiz-prav">i fizicka i pravna 10e</label>
    </div>   
</div> <!--end of form-clients -->
</template>
<script>
export default {
    props: {
        hideNew: Boolean,
        clients: String
    },
}
</script>