<template>
<div class="col-lg-8 m-auto">
        <h2>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h2>
    <div class="col-lg-9 m-auto service-height">
        <p>
            Finansijski izveštaji ne služe samo da bi se na osnovu njih utvrdile poreske obaveze, kako se
            često misli. Na osnovu njih se mogu izračunati brojni finansijski pokazatelji koji Vam mogu
            pomoći da donesete ispravne poslovne odluke.
        </p>
        <p>
            Smatramo da je bitno da svaki vlasnik privatnog biznisa danas razume logiku bilansa i da zna
            u osnovi šta finansijski izveštaji predstavljaju i kako se čitaju.
        </p>
        <p>
            Iz tog razloga pružamo našim klijentima konsultacije i edukaciju iz ove oblasti kako bi bolje
            razumeli svoje poslovanje u finansijskom smislu. Pored toga bavimo se i izračunavanjem
            pokazatelja finansijske uspešnosti poslovanja preduzeća uvažavajući specifičnosti u cilju
            redovnog praćenja finansijskog stanja preduzeća.
        </p>
        <p>
            Izrada biznis planova takođe spada u delokrug naših usluga.
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