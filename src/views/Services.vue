<template>
<div>

  <img class=" responsive" src="../assets/3.jpg" alt="">
  
        <div class="services col-lg-7 m-auto">
  
          <h1>Usluge</h1>

    <div :class="hide ? 'circles hide' : 'circles'">
          <div class="krug" @click="foundationService">
            <router-link  class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Osnivanje</h3>
                <p class="card-text">konsalting pre postupka osnivanja, provera rezervisanosti naziva, podnošenje dokumentacije...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 1st-->
          <div class="krug" @click="accountingService">
            <router-link class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Knjigovodstvene usluge</h3>
                <p class="card-text">vođenje poslovnih knjiga, Knjiženje dokumentacije,Vođenje analitičke evidencije...</p>
                <p><b>više informacija</b> </p>

              </div>
            </router-link>
          </div><!-- 2nd-->

          <div class="krug" @click="payrollPersonnelService">
            <router-link class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Obračun zarada / Kadrovske usluge</h3>
                <p class="card-text">Popunjavanje ugovora o radnom angažovanju, Prijavljivanje I odjavljivanje zaposlenih...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 3rd-->
          <div class="krug" @click="paymentsService">
            <router-link class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Platni promet (dinarski I devizni)</h3>
                <p class="card-text">Otvaranje tekućih računa, Elektronsko bankarstvo, Priprema naloga za plaćanje...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div><!-- 4th-->
          <div class="krug" @click="taxFinancialConsulting">
            <router-link class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Poreski I finansijski konsalting</h3>
                <p class="card-text">Savetovanje klijenta u vezi svih poreskih pitanja, kao I davanje predloga...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 5th-->
          <div class="krug" @click="calculationFinancialIndicator">
            <router-link class="prices-link" to="/services">
              <div class="price-card-body">
              <h3>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h3>
                <p class="card-text">izračunavanje pokazateljima, Izrada biznis plana...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 6th-->

    </div>
    <Foundation @send-result-values="foundationServiceReset" :class="foundation ? ' ' : 'hide'"/>
    <AccountingServicesComponent @send-result-values="accountingServicesReset" :class="accounting ? ' ' : 'hide'"/>
    <PayrollComponent @send-result-values="payrollReset" :class="payroll ? ' ' : 'hide' "/>
    <PaymentsComponent @send-result-values="paymentsServicesReset" :class="payment ? ' ' : 'hide' "/>
    <TaxFinancialConsultingComponent @send-result-values="taxFinancialConsultingReset" :class="taxFinancial ? ' ' : 'hide' "/>
    <CalculationFinancialIndicatorsComponent @send-result-values="calculationFinancialIndicatorsReset" :class="calculation ? ' ' : 'hide' "/>

  </div>
</div>
</template>
<script>
import AccountingServicesComponent from '../components/servicesComponents/AccountingServicesComponent.vue';
import Foundation from '../components/servicesComponents/FoundationComponent.vue'
import PayrollComponent from '../components/servicesComponents/PayrollComponent.vue';
import PaymentsComponent from '../components/servicesComponents/PaymentsComponent.vue';
import TaxFinancialConsultingComponent from '../components/servicesComponents/TaxFinancialConsultingComponent.vue';
import CalculationFinancialIndicatorsComponent from '../components/servicesComponents/CalculationFinancialIndicatorsComponent.vue';
export default {
  components:{
    Foundation,
    AccountingServicesComponent,
    PayrollComponent,
    PaymentsComponent,
    TaxFinancialConsultingComponent,
    CalculationFinancialIndicatorsComponent



  },


  data() {
    return{
      foundation: false,
      accounting: false,
      payroll: false,
      payment: false,
      taxFinancial: false,
      calculation: false,
      hide:false,
    }
  },
  created(){
    this.hide = this.$route.params.hideAll;
    this.foundation = this.$route.params.showFoundation;
    this.accounting = this.$route.params.showAccounting;
    this.payroll = this.$route.params.showPayroll;
    this.payment = this.$route.params.showPayment;
    this.taxFinancial = this.$route.params.showTax;
    this.calculation = this.$route.params.showCalculation;
  },


  methods: {

    foundationService(){
      this.foundation = true;
      this.hide = true

    },
    foundationServiceReset(value){
      this.foundation = value;
      this.hide = value
    },

    accountingService(){
      this.accounting = true;
      this.hide = true
    },
    accountingServicesReset(value){
      this.accounting = value;
      this.hide = value
    },

    payrollPersonnelService(){
      this.payroll = true;
      this.hide = true
    },
    payrollReset(value){
      this.payroll = value;
      this.hide = value
    },

    paymentsService(){
      this.payment = true;
      this.hide = true
    },
    paymentsServicesReset(value){
      this.payment = value;
      this.hide = value
    },

    taxFinancialConsulting(){
      this.taxFinancial = true;
      this.hide = true
    },
    taxFinancialConsultingReset(value){
      this.taxFinancial = value;
      this.hide = value
    },

    calculationFinancialIndicator(){
      this.calculation = true;
      this.hide = true
    },
    calculationFinancialIndicatorsReset(value){
      this.calculation = value;
      this.hide = value
    }
  }
}
</script>
<style >
.services {
  margin-top: 50px !important;
  padding-bottom: 156px;

}
.text-left p{
  text-align: left;
}
.service-height{
  position: relative;
  z-index: 1;
  min-height:460px !important;
  margin-bottom: 5px !important;
}
.krug{
    background-color: #f2f2f2;
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;
}
.prices-link{
  text-decoration: none;
}

.krug:hover {
  text-decoration: none;
  background-color: #a6a6a6;
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  border-radius: 25em;

}
.price-card-body{
  height: 320px;
  width: 320px;
  border-radius: 25em !important;
  padding: 70px 10px 0 10px;
}


.services-row{
  display: flex;
}
@media only screen and (max-width: 1024px){
  .services{
    margin-bottom: -70px !important; 
}
.services-row{
  display: flex;
}
}
@media only screen and (max-width: 768px){
  .services-row{
  display: flex;
}
@media only screen and (max-width: 600px){
  .services-row{
  display: inline;
}
}
}

</style>