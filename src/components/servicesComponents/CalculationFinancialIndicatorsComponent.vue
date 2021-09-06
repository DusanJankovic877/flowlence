<template>
<div class="col-lg-4 m-auto service-height">
    <h2>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h2>
    <ul class="text-left">
        <li>
            <p>
                izračunavanje pokazateljima finansijske uspešnosti poslovanja preduzeća u cilju redovnog
                praćenja finansijskog stanja preduzeća
            </p>
        </li>
        <li><p>Izrada biznis plana</p></li>
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