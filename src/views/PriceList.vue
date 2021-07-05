<template>
    <div class="price-list col-lg-7 m-auto">

        <h1>Procena cene Usluga</h1>
        <hr>

        <h2 v-if="hide">Potrebno je popuniti anketu u nastavku kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h2>
        <h2 v-else>Izaberite ponuđene opcije kako bi definisali ponudu koja će najviše odgovarati potrebama Vašeg poslovanja.</h2>

        <div class="row">

            <div :class="hide ?'entrepreneur-krug left hide' : 'entrepreneur-krug left'">
                <button class="entrepreneur-prices-link" @click="handleNewEntrepreneur">
                <router-link class="entrepreneur-prices-link" to="/price-list/entrepreneur">
                    <div class="entrepreneur-card-body">
                        <h2>Novi preduzetnik</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </router-link>
                </button>
            </div>

            <div :class="hide ?'entrepreneur-krug right hide' : 'entrepreneur-krug right'">
                <button class="entrepreneur-prices-link" @click="handleAlreadyEntrepreneur">
                    <div class="entrepreneur-card-body">
                        <h2>Već preduzetnik</h2>
                        <p class="entrepreneur-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </button>
            </div>
        </div>

        <div class="entrepreneur">
            <Entrepreneur :hideNew="hideNew" :class=" hideNew || hideAlready ? 'new-entrepreneur' : 'new-entrepreneur hide'" />
        </div>
        <div :class="hide ? 'showButtons' : 'hide'">
            <button class="btn btn-secondary" @click="ShowButtons">Pokaži opcije</button>
        </div>
    </div>
</template>
<script>
import Entrepreneur from '../components/entrepreneur/Entrepreneur.vue'

export default {
    components:{
        Entrepreneur

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
            this.hide = true;
            this.hideNew = true;
           
        },
        handleAlreadyEntrepreneur(){
            this.hide = true;
            this.hideAlready = true;

        },
        ShowButtons(){
            console.log(this.hideNew, this.hideAlready);
            if(this.hideNew)this.hideNew = false
            if(this.hideAlready)this.hideAlready = false
            this.hide = false;
        }

    }
}
</script>
<style>

.entrepreneur-prices-link{
  text-decoration: none;
  color: #385663;
  border-radius: 25em;
  border: none;
  background-color: #FBA922;
}
.entrepreneur-prices-link:hover{
  color: white !important;
  background-color: #385663 ;
}

.entrepreneur-krug{
    background-color: #FBA922;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px 5% !important;

}
.left{
    margin-left: auto !important;
}
.right{
    margin-right: auto !important;
}


.entrepreneur-krug:hover {
  text-decoration: none;
  background-color: #385663 ;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;
} 
.entrepreneur-card-body{
  height: 320px;
  width: 320px;
  border-radius: 25em !important;
  padding: 93px 10px 0 10px;
 
}
.hide{
    display: none !important;
}

</style>