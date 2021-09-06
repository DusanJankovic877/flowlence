<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Osnivanje</h2>
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