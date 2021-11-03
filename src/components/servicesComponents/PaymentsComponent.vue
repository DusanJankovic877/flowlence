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