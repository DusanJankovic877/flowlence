<template>
      <div class="price-list col-lg-7 m-auto">
        <h1>Procena cene Usluga</h1>
        <hr>
 
        <!-- <h4 v-if="hide">Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>
        <h4 v-else>Izaberite ponuđene opcije kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4> -->

        <div class="circles">

                <button class="entrepreneur-krug" @click="handleSelectedOption('new doo')">
           
                    <div class="entrepreneur-card-body">
                        <h2>Novi DOO</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
       
                </button>

                <button class="entrepreneur-krug" @click="handleSelectedOption('already doo')">
                    <div class="entrepreneur-card-body">
                        <h2>Već postojeći DOO</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </button>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        handleSelectedOption(val){
            this.$emit('handle-selected-option', val)
        }
    }
}
</script>
