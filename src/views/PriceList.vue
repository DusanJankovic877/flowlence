<template>
<div class="price-list">
  <img class="price-list-img responsive" src="../assets/3.jpg" alt="">

    <PriceListComponent class="price-list-component"/>
</div>
</template>
<script>
import PriceListComponent from '../components/PriceListComponent.vue'
export default {
    components:{
        PriceListComponent
    },
  
}
</script>
<style>
.price-list{
    margin-bottom: -311px !important;

}
.price-list-img{
  margin-bottom: -120px;
}
.price-list-component{
    margin-top: -190px;
}
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
    margin:5px auto !important;

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