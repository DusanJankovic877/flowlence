<template>
    <div class="col-lg-8 m-auto service">
            <h2>Obračun zarada / Kadrovske usluge</h2>
            <p class="align-l">
                <b>
                    Ukoliko imate zaposlene ili tek planirate zapošljavanje od izuzetnog je značaja da se
                    upoznate sa svim pravima i obavezama koje proizilaze iz radnih odnosa. Bilo da imate svoju
                    HR službu ili ne, mi Vam stojimo na raspolaganju za usluge iz ove oblasti:
                </b>
            </p>
        
        <div class="col-lg-8 ml-auto service-height"> 
            <ul class="text-left">
                <li><p>Informisanje o troškovima poreza i doprinosa za različite oblike zapošljavanja</p></li>
                <li><p>Popunjavanje ugovora o radnom angažovanju</p></li>
                <li><p>Prijavljivanje I odjavljivanje zaposlenih na Centralni registar obaveznog socijanog osiguranja</p></li>
                <li><p>Promena / ažuriranje podataka u Centralnom registru obaveznog socijalnog osiguranja</p></li>
                <li><p>Prijava osiguranih lica (supružnika, dece...)</p></li>
                <li><p>Obračun zarada, poreza I doprinosa na zarade</p></li>
                <li><p>Kontakt sa fondovima socijalnih osiguranja</p></li>
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