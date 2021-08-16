<template>
      <div class="price-list col-lg-7 m-auto">
        <h1>Procena cene Usluga</h1>
        <hr>

        <h4 v-if="hide">Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>
        <h4 v-else>Izaberite ponuđene opcije kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h4>

        <div class="row">

            <div :class="hide ?'entrepreneur-krug hide' : 'entrepreneur-krug'">
                <button class="entrepreneur-prices-link" @click="handleNewEntrepreneur">
                <router-link class="entrepreneur-prices-link" to="/price-list/entrepreneur">
                    <div class="entrepreneur-card-body">
                        <h2>Novi preduzetnik</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </router-link>
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
            <Form ref="childComponent" @handle-show-buttons="handleShowButtons"  :hide="hide" :hideAlready="hideAlready" :hideNew="hideNew" :class=" hideNew || hideAlready ? 'new-entrepreneur' : 'new-entrepreneur hide'"/>
        </div>
        <!-- <div :class="hide ? 'showButtons row ' : 'hide row '">
            <button class="go-back-button col-lg-3 btn btn-danger" @click="showButtons">Idi nazad</button>

            <button class="submit-button col-lg-3 btn btn-success" @click="submitEntrepreneurForm">Pošalji</button>
        </div> -->
   
    </div>
</template>
<script>

import Form from '../components/entrepreneur/Form.vue'
export default {
    components:{
        Form
    },
    data() {
       return{
            hide: false,
            hideNew: false,
            hideAlready: false,
       } 
    },

    methods:{
        handleNewEntrepreneur(){
            this.hideNew = true
            this.hide = true
        },
        handleAlreadyEntrepreneur(){
            this.hideAlready = true
            this.$refs.childComponent.setValue(this.hideAlready);
            this.hide = true
        },
        handleShowButtons(){
            if(this.hideNew)this.hideNew = false
            if(this.hideAlready)this.hideAlready = false
            this.hide = false;
        }
    }

}
</script>
<style>
.go-back-button{
    margin: 10px auto;
}
.submit-button{
    margin: 10px auto;

}
.hide{
    display: none !important;
}
</style>