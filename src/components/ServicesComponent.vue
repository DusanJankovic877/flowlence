<template>
<div class="contet-circles col-lg-7 m-auto">
      <h1>Usluge</h1>
    <div class="circles">

      <button  class="prices-link krug" @click="foundationServices">
        <div class="price-card-body">
        <h3>Osnivanje</h3>
          <p class="card-text">
            Prvi korak sa kojim započinjete svoje poslovanje jeste samo osnivanje. Njemu prethodi
            definisanje velikog broja detalja....
          </p>
          <p><b>više informacija</b> </p>
        </div>
      </button><!-- 1st -->

      <button class="prices-link krug" @click="accountingServices">
        <div class="price-card-body">
        <h3>Knjigovodstvene usluge</h3>
          <p class="card-text">Pružamo kompeltne knjigovodstvene usluge za sve vrste delatnosti. Obuhvataju sledeće:</p>
          <p><b>više informacija</b> </p>

        </div>
      </button><!-- 2nd-->

      <button class="prices-link krug" @click="payrollPersonnelServices">
        <div class="price-card-body">
        <h3>Obračun zarada / Kadrovske usluge</h3>
          <p class="card-text">            
            Ukoliko imate zaposlene ili tek planirate zapošljavanje od izuzetnog je značaja da se
            upoznate sa svim...
          </p>
          <p><b>više informacija</b> </p>
        </div>
      </button><!-- 3rd-->


      <button class="prices-link krug" @click="paymentsServices">
        <div class="price-card-body">
        <h3>Platni promet (dinarski I devizni)</h3>
          <p class="card-text">
            Danas je elektronsko bankarstvo deo naše svakodnevnice, koje omogućava da na brz i
            efikasan način...
          </p>
          <p><b>više informacija</b> </p>
        </div>
      </button><!-- 4th-->

      <button class="prices-link krug" @click="taxFinancialConsultings">
        <div class="price-card-body">
        <h3>Poreski I finansijski konsalting</h3>
          <p class="card-text">
            Rizik od pogrešne primene poreskih propisa je izuzetno visok u okruženju koje karakteriše
            stalne...
          </p>
          <p><b>više informacija</b> </p>
        </div>
      </button><!-- 5th-->

      <button class="prices-link krug" @click="calculationFinancialIndicators">
        <div class="price-card-body">
        <h3>Izračunavanje finansijskih pokazatelja</h3>
          <p class="card-text">
            Finansijski izveštaji ne služe samo da bi se na osnovu njih utvrdile poreske obaveze, kako se
            često misli...
          </p>
          <p><b>više informacija</b> </p>
        </div>
      </button> <!-- 6th-->
    </div>
</div>
</template>
<script>
export default {
    data() {
        return{

        }  
    },
      methods:{
    foundationServices(){
      this.$router.push({name: 'services', params: {hideAll: true, showFoundation: true, from: 'home'}})
    },
    accountingServices(){
      this.$router.push({name: 'services', params: {hideAll: true, showAccounting: true, from: 'home'}})
    },
    payrollPersonnelServices(){
      this.$router.push({name: 'services', params: {hideAll: true, showPayroll: true, from: 'home'}})
    },
    paymentsServices(){
      this.$router.push({name: 'services', params: {hideAll: true, showPayment: true, from: 'home'}})

    },
    taxFinancialConsultings(){
      this.$router.push({name: 'services', params: {hideAll: true, showTax: true, from: 'home'}})

    },
    calculationFinancialIndicators(){
      this.$router.push({name: 'services', params: {hideAll: true, showCalculation: true, from: 'home'}})

    }


  }
}
</script>
<style>
  .services-margin{
    position: relative;
    z-index: 1;
    ;
  }
   .services-margin h1{
     color: #404040;
   }
@media only screen and (max-width: 1280px){
    .services-margin{
    margin-top: 150px;
    margin-bottom: -40px !important; 
  }
  .contet-circles{
    width: 100%;
  }
}
@media (max-width:768px){
  .krug{
    padding-top: 25px !important;
  }
  .services-margin{
    margin-top: 170px !important;
    margin-bottom: -40px !important; 
  }
  .fourth-circle{
    padding-top: 40px !important;
  }  
  .fifth-circle{
    padding-top: 40px !important;
  }
  .sixth-circle{
    padding-top: 30px !important;
  }
  .services-margin h1{
    font-size: 20px;
  }
  .price-card-body h3{
    font-size: 18px;
  }
  .price-card-body p{
    font-size: 14px;
  }

}
</style>