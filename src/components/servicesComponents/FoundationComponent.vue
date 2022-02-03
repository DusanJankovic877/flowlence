<template>
    <div class="col-lg-8 m-auto service">
        <h2>Osnivanje</h2>
            <p class="align-l">
                <b>
                    Prvi korak sa kojim započinjete svoje poslovanje jeste samo osnivanje. Njemu prethodi
                    definisanje velikog broja detalja, a mi Vam možemo pomoći u tome da sagledate koji su
                    najbitniji i na šta treba da obratite posebnu pažnju. Naše usluge obuhvataju:
                </b>
            </p>
        <div class="col-lg-8 ml-auto service-height">
            <ul class="text-left">
                <li>    
                    <p>Konsalting pre postupka osnivanja </p>
                    <ol>
                        <li>
                            <p>
                                Pomoć pri izboru odgovarajuće pravne forme , detaljno informisanje o poreskim
                                obavezama uz poređenje različitih pravnih formi kako bi se izabrala najoptimalnija
                            </p>
                        </li>
                        <li><p>Definisanje pretežne delatnosti</p></li>
                        <li><p>Informisanje o fiksnim troškovima poslovanja</p></li>
                        <li><p>Informisanje o mogućim oblicima zapošljavanja</p></li>
                        <li><p>I slično</p></li>
                    </ol>
                </li>
                <li><p>Provera rezervisanosti naziva</p></li>
                <li><p>Podnošenje dokumentacije u APR-u</p></li>
                <li><p>Otvaranje računa u banci</p></li>
                <li>
                    <p>
                        Podnošenje dokumentacije u poresku upravu (poreske prijave), prijava u PIO fond, overa
                        zdravstvene kartice.
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
<style>

</style>
