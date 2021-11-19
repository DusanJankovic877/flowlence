<template>
    <div class="col-lg-8 m-auto">

        <h2>Platni promet (dinarski I devizni)</h2>
        <p class="align-l">
            <b>
                Danas je elektronsko bankarstvo deo naše svakodnevnice, koje omogućava da na brz i
                efikasan način realizujete novčane transkacije. Klijentima dajemo mogućnost da na osnovu
                ovlašćenja koje nam dodele obavljamo transakcije u njihovo ime i za njihov račun ili u
                slučaju da žele samostalno da obavljaju elektronsko bankarstvo stojimo na raspolaganju za
                sva pitanja i podršku.
            </b>
        </p>
        <div class="col-lg-8 ml-auto service-height service-height">
            <ul class="text-left">
                <li><p>Pomoć prilikom otvaranje tekućih računa kod domaćih banaka</p></li>
                <li><p>Elektronsko bankarstvo</p></li>
                <li><p>Priprema naloga za plaćanje, elektronska plaćanja i transferi u skadu sa instrukcijama klijenta</p></li>
                <li><p>Raspored deviznih priliva</p></li>
                <li><p>Kupoprodaja deviza</p></li>
                <li><p>Komuniciranje sa bankom</p></li>
                <li><p>Drugi poslovi iz domena kontrole tokova gotovine</p></li>
            </ul>
        </div>
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