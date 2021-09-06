<template>
<div class="col-lg-4 m-auto service-height service-height">
    <h2>Platni promet (dinarski I devizni)</h2>
    <ul class="text-left">
        <li><p>Otvaranje tekućih računa kod domaćih banaka</p></li>
        <li><p>Elektronsko bankarstvo</p></li>
        <li><p>Priprema naloga za plaćanje, elektronska plaćanja i transferi u skadu sa instrukcijama klijenta</p></li>
        <li><p>Preuzimanje izvoda iz banke</p></li>
        <li><p>Komuniciranje sa bankom</p></li>
        <li><p>drugi poslovi iz domena kontrole tokova gotovine</p></li>
    </ul>
    <button class="btn btn-danger" @click="goBack">idi nazad</button>
</div>
</template>
<script>
export default {
    data() {
       return{

       } 
    },
    methods:{
        goBack(){
            this.$emit('send-result-values', false) 
        }
    },
}
</script>