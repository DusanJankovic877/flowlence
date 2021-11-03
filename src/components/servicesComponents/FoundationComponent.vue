<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Osnivanje</h2>
    {{fromRoute}}
    <ul class="text-left">
        <li>    
            <p>konsalting pre postupka osnivanja (izbor odgovarajuće pravne forme, definisanje pretežne
                delatnosti, informisanje o fiksnim troškovima poslovanja, mogućim oblicima zapošljavanja I sl.)
            </p>
        </li>
        <li>
            <p>provera rezervisanosti naziva, podnošenje dokumentacije u APR-u, overa OP obrasca, izrada
                pečata, otvaranje računa u banci, podnošenje dokumentacije u poresku upravu, prijava u PIO
                fond, overa zdravstvene kartice.
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