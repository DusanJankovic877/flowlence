<template>

      <div class="price-list col-lg-7 m-auto">
        <h1>Procena cene Usluga</h1>
        <hr>
        <h4 v-if="hide">Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>
        <h4 v-else>Izaberite ponuđene opcije kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>

        <div class="circles">

            <div :class="hide ?'entrepreneur-krug hide' : 'entrepreneur-krug'">
                <button class="entrepreneur-prices-link" @click="handleNewEntrepreneur">
           
                    <div class="entrepreneur-card-body">
                        <h2>Novi preduzetnik</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
               
                </button>
            </div>

            <div :class="hide ?'entrepreneur-krug hide' : 'entrepreneur-krug'">
                <button class="entrepreneur-prices-link" @click="handleAlreadyEntrepreneur">
                    <div class="entrepreneur-card-body">
                        <h2>Već postojeći preduzetnik</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </button>
            </div>
        </div>
           
        <div class="entrepreneur">
            <!-- <Form ref="childComponent" @handle-show-buttons="handleShowButtons" :formData="formData"  :hide="hide" :hideAlready="hideAlready" :hideNew="hideNew" :class=" hideNew || hideAlready ? 'new-entrepreneur' : 'new-entrepreneur hide'"/> -->
        </div>
    </div>
</template>
<script>
import store from '../store'
// import Form from '../components/entrepreneur/Form.vue'
// import Example from '../views/Example.vue'
import { mapGetters} from 'vuex'
export default {
    components:{
        // Form,
        // Example
    },
    data() {
       return{
            hide: false,
            hideNew: false,
   
       } 
    },

    methods:{
        goBackToPriceList(){
            this.$router.push('/price-list')
        },
        handleNewEntrepreneur(){
            this.hideNew = true
            this.$refs.childComponent.setHideNewValue(this.hideNew);
            this.hide = true
        },
        handleAlreadyEntrepreneur(){
            this.hideAlready = true
            this.$refs.childComponent.setHideAlreadyValue(this.hideAlready);
            this.hide = true
        },
        handleShowButtons(){
            if(this.hideNew)this.hideNew = false
            if(this.hideAlready)this.hideAlready = false
            this.hide = false;
        }
    },
    computed:{
        ...mapGetters(['formData'])
    },
        async beforeRouteEnter(from, to, next){
        await store.dispatch('getFormData', {'path' : '/price-list/entrepreneur'})
        next();
    }

}
</script>
<style>
.circles{
    display: flex;
    flex-wrap: wrap !important;
}
</style>