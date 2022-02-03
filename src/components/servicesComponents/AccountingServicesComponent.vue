<template>
    <div class="col-lg-8 m-auto service">
        <h2>Knjigovodstvene usluge</h2>
        <p class="align-l">
            <b>
                Pružamo kompeltne knjigovodstvene usluge za sve vrste delatnosti. Obuhvataju sledeće:
            </b>
        </p>
        <div class="col-lg-8 ml-auto service-height">
            <ul class="text-left">
                <li>
                    <p>
                        vođenje poslovnih knjiga : dnevnika, glavne knjige, knjige glavne blagajne, knjige ulaznih
                        računa i knjige izlaznih računa
                    </p>
                </li>
                <li>
                    <p>
                        Knjiženje dokumentacije u zakonski propisanim evidencijama u skladu sa odredbama Zakona
                        o računovodstvu i reviziji
                    </p>
                </li>
                <li>
                    <p>
                        Knjiženje dokumentacije u zakonski propisanim evidencijama u skladu sa odredbama Zakona
                        o računovodstvu i reviziji
                    </p>
                </li>
                <li>
                    <p>
                        Vođenje analitičke evidencije: kupci, dobavljači, osnovna sredstva, roba, materijal,
                        proizvodnja, gotovi proizvodi
                    </p>
                </li>
                <li>
                    <p>
                        Sastavljanje uvoznih kalkulacija, maloprodajnih I veleprodajnih kalkulacija, internih prenosa,
                        nivelacija cena
                    </p>
                </li>
                <li>
                    <p> 
                        Obračun I sastavljanje poreske prijave za PDV
                    </p>
                </li>
                <li>
                    <p>
                        Sastavljanje finansijskih izveštaja sa izradom poreskih bilansa I poreskih prijava poreza na
                        dobit preduzeća odnosno poreza na dohodak građana
                    </p>
                </li>
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
<style >

</style>