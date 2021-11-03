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