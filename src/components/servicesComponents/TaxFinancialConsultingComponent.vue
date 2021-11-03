<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Poreski I finansijski konsalting</h2>
    <ul class="text-left">
        <li>
            <p>
                Savetovanje klijenta u vezi svih poreskih pitanja kao I davanje predloga za postizanje
                optimalnog rešenja u skladu sa zakonskim propisima
            </p>
        </li>
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