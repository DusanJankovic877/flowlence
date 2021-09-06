<template>
<div class="col-lg-4 m-auto service-height"> 
    <h2>Obračun zarada / Kadrovske usluge</h2>
    <ul class="text-left">
        <li><p>Popunjavanje ugovora o radnom angažovanju</p></li>
        <li><p>Prijavljivanje I odjavljivanje zaposlenih na Centralni registar obaveznog socijanog osiguranja</p></li>
        <li><p>Obračun zarada, poreza I doprinosa na zarade</p></li>
        <li><p>Kontakt sa fondovima socijalnih osiguranja</p></li>
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