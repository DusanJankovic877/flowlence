<template>
         <div class="price-list col-lg-7 m-auto">
        <!-- <h4 v-if="hide">Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>
        <h4 v-else>Izaberite ponuđene opcije kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4> -->

        <div class="circles">
                <button class="entrepreneur-krug" @click="handleSelectedOption('new assoc')">
                    <div class="entrepreneur-card-body">
                        <h2>Novo udruženje</h2>
                        <p style="padding-top: 30px;" class="entrepreneur-card-text">Tek planiram registraciju Udruženja.</p>
                    </div>
               
                </button>
                <button class="entrepreneur-krug" @click="handleSelectedOption('already assoc')"> 
                    <div class="entrepreneur-card-body">
                        <h2>Već postojeće udruženje</h2>
                        <p class="entrepreneur-card-text">Već postojeće Udruženje.</p>
                    </div>
                </button>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

            assoc: 'assoc'
        }
    },
        methods:{
        handleSelectedOption(val){
          
            this.$emit('handle-selected-option', val)
        }
    }
}
</script>