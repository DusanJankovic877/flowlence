<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Poreski I finansijski konsalting</h2>
    <ul class="text-left">
        <li>
            <p>
                Savetovanje klijenta u vezi svih poreskih pitanja kao I davanje predloga za postizanje
                optimalnog rešenja u skladu sa zakonskim propisima
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