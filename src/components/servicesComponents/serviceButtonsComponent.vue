<template>
    <div>
    <button class="btn btn-danger" v-if="fromRoute === 'home'" @click="goBackToHome">Nazad na početnu</button>
    <button v-else class="btn btn-danger" @click="goBack">Idi nazad</button>
    </div>
</template>
<script>
export default {
    data() {
    return{}
    },
    props:{
        fromRoute: String
    },
    methods:{
        goBack(){
            this.$emit('send-result-values', false) 
        },
        goBackToHome(){
            this.$emit('go-back-home') 
        }
    }
}
</script>
<style>

</style>