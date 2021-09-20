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

    <button class="btn btn-danger" v-if="fromRoute === 'home'" @click="goBackToHome">Nazad na početnu</button>
    <button v-else class="btn btn-danger" @click="goBack">Idi nazad</button>
</div>
</template>
<script>
export default {
    data() {
       return{

       } 
    },
      computed: {
    fromRoute() {
        return this.$route.params.from;
    }
},
    methods:{
        goBack(){
            this.$emit('send-result-values', false) 
        },
        goBackToHome(){
            this.$router.push('/')
        }
    },
}
</script>