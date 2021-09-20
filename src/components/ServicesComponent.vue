<template>
    <div class="circles col-lg-7 m-auto">
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

          <div class="krug" @click="paymentsServices">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Platni promet (dinarski I devizni)</h3>
                <p class="card-text">Otvaranje tekućih računa, Elektronsko bankarstvo, Priprema naloga za plaćanje...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div><!-- 4th-->
          <div class="krug" @click="taxFinancialConsultings">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Poreski I finansijski konsalting</h3>
                <p class="card-text">Savetovanje klijenta u vezi svih poreskih pitanja, kao I davanje predloga...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 5th-->
          <div class="krug" @click="calculationFinancialIndicators">
            <router-link class="prices-link" to="">
              <div class="price-card-body">
              <h3>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h3>
                <p class="card-text">izračunavanje pokazateljima, Izrada biznis plana...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 6th-->
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