<template>

<div>

            <h2 style="margin-bottom: 50px;">Poreski I finansijski konsalting</h2>
        <div class="col-lg-5 m-auto service-height">
            <p>
                Rizik od pogrešne primene poreskih propisa je izuzetno visok u okruženju koje karakteriše
                stalne promene propisa, kao što je slučaj u našoj zemlji. Kompleksan poreski sistem zahteva
                stalno praćenje donošenja novih i izmene postojećih propisa i kontinuiranu edukaciju.
            </p>
            <p>
                Pored toga, često se propisuju brojni podsticaji i olakšice čijim se korišćenjem mogu stvoriti
                poreske uštede ukoliko ispunjavate propisane uslove. 
            </p>
            <p>
                Iz gore navedenih razloga smatramo da jedan od najvažnjih aspekta našeg poslovanja je
                savetovanje klijenta u vezi svih poreskih pitanja kao I davanje predloga za postizanje
                optimalnog rešenja u skladu sa zakonskim propisima. 
            </p>

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