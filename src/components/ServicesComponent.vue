<template>
<div class="contet-circles col-lg-7 m-auto">
      <h1>Usluge</h1>
    <div class="circles">
      <div class="krug" @click="foundationServices">
        <router-link  class="prices-link" to="">
          <div class="price-card-body">
          <h3>Osnivanje</h3>
            <p class="card-text">konsalting pre postupka osnivanja, provera rezervisanosti naziva, podnošenje dokumentacije...</p>
            <p><b>više informacija</b> </p>
          </div>
        </router-link>
      </div> <!-- 1st -->

      <div class="krug" @click="accountingServices">
        <router-link class="prices-link" to="">
          <div class="price-card-body">
          <h3>Knjigovodstvene usluge</h3>
            <p class="card-text">vođenje poslovnih knjiga, Knjiženje dokumentacije,Vođenje analitičke evidencije...</p>
            <p><b>više informacija</b> </p>

          </div>
        </router-link>
      </div><!-- 2nd-->
      <div class="krug" @click="payrollPersonnelServices">
        <router-link class="prices-link" to="">
          <div class="price-card-body">
          <h3>Obračun zarada / Kadrovske usluge</h3>
            <p class="card-text">Popunjavanje ugovora o radnom angažovanju, Prijavljivanje I odjavljivanje zaposlenih...</p>
            <p><b>više informacija</b> </p>
          </div>
        </router-link>
      </div> <!-- 3rd-->

          <div class="krug fourth-circle" @click="paymentsServices">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Platni promet (dinarski I devizni)</h3>
                <p class="card-text">Otvaranje tekućih računa, Elektronsko bankarstvo, Priprema naloga za plaćanje...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div><!-- 4th-->
          <div class="krug fifth-circle" @click="taxFinancialConsultings">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Poreski I finansijski konsalting</h3>
                <p class="card-text">Savetovanje klijenta u vezi svih poreskih pitanja, kao I davanje predloga...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 5th-->
          <div class="krug sixth-circle" @click="calculationFinancialIndicators">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h3>
                <p class="card-text">izračunavanje pokazateljima, Izrada biznis plana...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 6th-->
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