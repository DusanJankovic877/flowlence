<template>
<div class="col-lg-4 m-auto service-height"> 
    <h2>Obračun zarada / Kadrovske usluge</h2>
    <ul class="text-left">
        <li><p>Popunjavanje ugovora o radnom angažovanju</p></li>
        <li><p>Prijavljivanje I odjavljivanje zaposlenih na Centralni registar obaveznog socijanog osiguranja</p></li>
        <li><p>Obračun zarada, poreza I doprinosa na zarade</p></li>
        <li><p>Kontakt sa fondovima socijalnih osiguranja</p></li>
    </ul>
       <serviceButtonsComponent @send-result-values="goBackTo" @go-back-home="goBackToHome" :fromRoute="fromRoute"/>

</div>
</template>
<script>
import serviceButtonsComponent from './serviceButtonsComponent.vue'
export default {
    components:{
        serviceButtonsComponent
    },
    props: {
        fromRoute: String
    },
    methods:{
        goBackTo(val){
            this.$emit('send-result-values-to-parent', val) 
        },
        goBackToHome(){
            this.$emit('go-back-home-to-parent') 
        }
    },
}
</script>