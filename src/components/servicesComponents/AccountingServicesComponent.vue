<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Knjigovodstvene usluge</h2>
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
                Vođenje analitičke evidencije: kupci, dobavljači, osnovna sredstva, roba, material,
                proizvodnja, gotovi proizvodi
            </p>
        </li>
        <li>
            <p>
                Sastavljanje uvoznih kalkulacija, maloprodajnih I veleprodajnih kalkulacija, internih prenosa,
                nivelacija cena
            </p>
        </li>
        <li><p>Obračun I sastavljanje poreske prijave za PDV </p></li>
        <li>
            <p> 
                Sastavljanje finansijskih izveštaja sa izradom poreskih bilansa I poreskih prijava poreza na
                dobit preduzeća odnosno poreza na dohodak građana
            </p>
        </li>
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