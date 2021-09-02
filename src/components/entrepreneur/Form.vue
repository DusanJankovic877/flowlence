<template>
<div class="col-lg-7 m-auto">

      <hr>
        <h1 v-if="hideNew && isEntrepreneur">Novi preduzetnik</h1>
        <h1 v-else-if="isEntrepreneur">Postojeći preduzetnik</h1>
        <h1 v-else-if="hideNew && isEntrepreneur == false">Novi Doo</h1>
        <h1 v-else-if="isEntrepreneur == false">Postojeći Doo</h1>
        <hr>
    
        <form @submit.prevent>
                <h4 v-if="hideNew && isEntrepreneur">Tek planiram da se registrujem kao preduzetnik</h4>
                <h4 v-else-if="isEntrepreneur">Već poslujem u formi preduzetnika</h4>
                <h4 v-if="hideNew && isEntrepreneur == false">Tek planiram da se registrujem kao Doo</h4>
                <h4 v-else-if="isEntrepreneur == false">Već poslujem u formi Doo</h4>
            <hr>
                <div class="form-services"> 
                  
                    <h5 v-if="hideNew">Planirate da se bavite:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Trenutno se bavite:
                    </h5>
                    
                    <div v-for="service in formData.services" :key="service.id" >
                        <input class="form-check-input" type="checkbox" :value="service.id" :id="service.id" v-model="servicesId">
                        <label class="form-check-label" :for="service.id">
                            {{service.option_text}}
                        </label>
                    </div>
                </div><!-- end of form-services -->
            <hr>
                <div class="number-of-people">

                    <h5 v-if="hideNew">Broj lica koji očekujete da zaposlite (uključujući u ovaj broj i Vas kao preduzetnika)<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Broj lica koji zapošljavate (uključujući u ovaj broj i Vas kao preduzetnika)</h5>
                    <div  class="input-group form-people">
                        <div v-for="person in formData.people" :key="person.id" class="form-check">
                            <input class="form-check-input" type="radio"  :value="person.id" :id="person.id" v-model="peopleId" >
                            <label class="form-check-label" :for="person.id">{{person.option_text}}</label>
                        </div>
                    </div>
                </div> <!--end of number-of-people -->
                
            <hr>
            <!-- <div> -->

                <!-- <div v-if="isEntrepreneur == false" class="founders"> -->

                    <h5 v-if="hideNew">Osnivači društva će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Osnivači društva su:</h5>
                    <div  class="input-group form-people">
                        <div v-for="founder in formData.founders" :key="founder.id" class="form-check">
                            <input class="form-check-input" type="radio"  :value="founder.id" :id="founder.id" v-model="founderId" >
                            <label class="form-check-label" :for="founder.id">{{founder.option_text}}</label>
                        </div>
                    </div>
                <!-- </div> end of founders -->
                <hr>
            <!-- </div> -->
                <div class="income">

                    <h5 v-if="hideNew">Prihod koji očekujete da ostvarite u narednih godinu dana (od prodaje proizvoda, usluga...):<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Prihod koje ostvarujete na godišnjem nivou (od prodaje proizvoda, usluga...):</h5>
                    <div v-for="income in formData.incomes" :key="income.id" class="form-check">
                        <input class="form-check-input 150" type="radio" :value="income.id" :id="income.id" v-model="incomeId"  >
                        <label class="form-check-label" :for="income.id">{{income.option_text}}</label>
                    </div>

                    <div v-if="isEntrepreneur && incomeId === 9 || isEntrepreneur && incomeId === 10 || isEntrepreneur && incomeId === 11"> 
                  
                        <h5 v-if="hideNew">Da li želite da budete paušalno oporezovani?</h5>
                        <h5 v-else>Da li ste paušalno oporezovani?</h5>
                        <div v-for="extraIncome in formData.extraIncomes" :key="extraIncome.id" class="form-check">
                            <input class="form-check-input" type="radio" :value="extraIncome.id" :id="extraIncome.id"  v-model="extraIncomeId"  >
                            <label class="form-check-label" :for="extraIncome.id">{{extraIncome.option_text}}</label>
                        </div>
                    </div>  <!-- end of the extra content -->
                </div> <!--end of form-income -->
            <hr>
                <div class="pdv">
<!-- pdv will be stated as item1 because its different for entrepreneur and doo -->
                    <h5 v-if="hideNew">Da li planirate da budete u sistemu pdv-a: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li ste u sistemu pdv-a:</h5>
                    <div v-for="pdv in formData.item1" :key="pdv.id" class="form-check" >
                            <input class="form-check-input"  type="radio" :value="pdv.id" :id="pdv.id"  v-model="pdvId" >
                            <label class="form-check-label" :for="pdv.id">{{pdv.option_text}}</label>
                    </div>
                </div> <!--end of form-pdv -->
            <hr>
                <div class="payments">
<!-- payments will be stated as item2 because its different for entrepreneur and doo -->
                    <h5 v-if="hideNew">Platni prometi koji ćete obavljati sa Vašim klijentima će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Platni prometi koji obavljate sa Vašim klijentima je:</h5>
                    <div  v-for="payment in formData.item2" :key="payment.id" class="form-check">
                        <input class="form-check-input" type="radio" :value="payment.id" :id="payment.id" v-model="paymentId">
                        <label class="form-check-label" :for="payment.id">{{payment.option_text}}</label>
                    </div>       
                </div> <!--end of form-payments -->
            <hr>
                <div class="clients">
                    
                    <h5 v-if="hideNew">Vaši klijenti će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Vaši klijenti su:</h5>
                    <div v-for="client in formData.clients" :key="client.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="client.id" :id="client.id" v-model="clientId">
                        <label class="form-check-label" :for="client.id">{{client.option_text}}</label>
                    </div>       
                </div> <!--end of form-clients -->
            <hr>
                <div class="cash-register">

                    <h5 v-if="hideNew">Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li posedujete fiskalnu kasu:</h5>
                    <div v-for="cashRegister in formData.cashRegisters" :key="cashRegister.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="cashRegister.id" :id="cashRegister.id" v-model="cashRegisterId">
                        <label class="form-check-label" :for="cashRegister.id">{{cashRegister.option_text}}</label>
                    </div>       
                </div> <!--end of form-cash-register -->   
            <hr>
                <div class="e-banking">
<!-- e-banking will be stated as item3 because its different for entrepreneur and doo -->

                    <h5 v-if="hideNew">Elektronsko bankartvo želite da: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Elektronsko bankarstvo:</h5>
                    <div v-for="eBanking in formData.item3" :key="eBanking.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="eBanking.id" :id="eBanking.id" v-model="eBankingId">
                        <label class="form-check-label" :for="eBanking.id">{{eBanking.option_text}}</label>
                    </div>   
                </div> <!--end of form-cash-e-banking -->   
            <hr>
                <div class="comment">

                    <h5>Dodatni komentar:</h5>
                    <div class="form-group">
                        <textarea v-model="comment" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                        :placeholder=" hideNew ? 'Ovde možete opisati ukratko Vašu delatnost kojom planirate da se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje' : 'Ovde možete opisati ukratko Vašu delatnost kojom se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje:'"
                        ></textarea>
                    </div>
                </div> <!--end of form-comment --> 
            <hr>
                <div class="email">

                    <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu: <span class="red"> *</span></h5>
                    <div class="form-group">
                        <label for="email">Email adresa: </label>
                        <input type="email" v-model="email" name="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>

                </div> <!--end of form-email --> 
                <div :class="hide ? 'showButtons circles ' : 'hide circles '">
                    <button class="go-back-button col-lg-4 btn btn-danger" @click="showButtons">Idi nazad</button>
                    <button class="submit-button col-lg-4 btn btn-success" @click="submitEntrepreneurForm">Pošalji</button>
                </div>
           
        </form>
</div>
</template>
<script>

import { mapActions, mapGetters} from 'vuex'

export default {

    data() {
        return{
            //DATA TO BE POPULATED
            removedPdv: '',
            removedExtraIncome: '',
            entrepreneur: '',
            doo: '',
                    totalPrice: [],
                    totalSum: 0,
                //services
                    selectedServices:[],
                    servicesId:[],
                    selectedPrice : [],
                    servicesSum:0,
                //people
                    selectedPeople: {},
                    peopleId:'',
                //founders
                    selectedFounder: {},
                    founderId: '',
                //income
                    selectedIncome: {},
                    incomeId:'',
                //extraIncome
                    selectedExtraIncome: {},
                    extraIncomeId: '',
                //pdv
                    selectedPdv: {},
                    pdvId: '',
                //payment
                    selectedPayment: {},
                    paymentId: '',
                //client
                    selectedClient: {},
                    clientId: '',
                //cash register
                    selectedCashRegister: {},
                    cashRegisterId: '',
                //e banking
                    selectedEBanking: {},
                    eBankingId: '',

                comment: '',
                email: '',
                entrepreneurFormData: {},
                dooFormData: {},
            
        } 
    },
    props: {hideNew: Boolean, hide: Boolean, hideAlready: Boolean, formData: Object},
    methods:{
        ...mapActions([
            'getEntrepreneurFormData','setEntrepreneurFormData', 'getDooFormData'
        ]),
        
        setHideNewValue(value){
            if(this.isEntrepreneur){
                if(value && this.formData.extraIncomes.length == 2)this.formData.extraIncomes.push(this.removedExtraIncome);
            }
            if(value && this.formData.item1.length == 2)this.formData.item1.push(this.removedPdv);       
        },
        setHideAlreadyValue(value){
            if(value && this.formData.item1.length === 3) this.removedPdv = this.formData.item1.splice(2,1).pop();
            if(this.isEntrepreneur){
            if(value && this.formData.extraIncomes.length === 3) this.removedExtraIncome = this.formData.extraIncomes.splice(2,1).pop();}
        },
        showButtons(){
            this.servicesId = []
            this.peopleId= ''
            this.incomeId = ''
            this.extraIncomeId = ''
            this.pdvId = ''
            this.paymentId = ' '
            this.clientId = ''
            this.cashRegisterId = ''
            this.eBankingId = ''
            this.comment = ''
            this.email = ''
            this.founders = ''
      

          this.$emit('handle-show-buttons', this.hideNew, this.hideAlready)
        },
        async submitEntrepreneurForm(){
            if(this.totalPrice !== 0 )this.totalSum = 0; this.totalPrice = []
            if(this.hideNew && this.$route.path == "/price-list/entrepreneur") this.entrepreneur = 'Novi preduzetnik';
            else if(this.hideNew && this.$route.path == "/price-list/doo")this.doo = 'Novi Doo';
            else if(this.hideAlready && this.$route.path == "/price-list/entrepreneur")this.entrepreneur = 'Postojeći preduzetnik'
            else if(this.hideAlready && this.$route.path == "/price-list/doo")this.doo = 'Postojeći Doo'

        if(this.selectedPrice.length !== 0){
            this.selectedPrice = []; this.selectedServices= []; this.servicesSum = 0; this.servicesId=[];
            }
        else{
            //services
          this.servicesId.forEach(serviceId => {
            var service = this.formData.services.find(x => x.id === serviceId)
            this.selectedServices.push(service);

          });
          this.selectedServices.forEach(sService => {
              this.selectedPrice.push(sService.price);
          });
          //people
          this.selectedPeople = this.formData.people.find(x => x.id === this.peopleId)

          //founders
          if(this.formData.founders)this.selectedFounder = this.formData.founders.find(x => x.id == this.founderId)
          //income
          this.selectedIncome = this.formData.incomes.find(x => x.id === this.incomeId)
          //extraIncome
            console.log('extra income', this.extraIncomeId);
            if(this.formData.extraIncomes){
                if(this.extraIncomeId === 14){
                    this.selectedExtraIncome = this.formData.extraIncomes.find(x => x.id === this.extraIncomeId)
                }else if(this.extraIncomeId === 15){
                    this.selectedExtraIncome = this.formData.extraIncomes.find(x => x.id === this.extraIncomeId)
                }else if(this.extraIncomeId === 16){
                    this.selectedExtraIncome = this.formData.extraIncomes.find(x => x.id === this.extraIncomeId)
                }else {
                   this.selectedExtraIncome = {option_text:"ne", price:0}
                }
            }

          //pdv
          this.selectedPdv = this.formData.item1.find(x => x.id === this.pdvId)
          //payment
          this.selectedPayment = this.formData.item2.find(x => x.id === this.paymentId)
          //client
          this.selectedClient = this.formData.clients.find(x => x.id === this.clientId)
          //cash register
          this.selectedCashRegister = this.formData.cashRegisters.find(x => x.id === this.cashRegisterId)
          //e banking
          this.selectedEBanking = this.formData.item3.find(x => x.id === this.eBankingId)

          //SUMMARy
            //services summ
            this.servicesSum = this.selectedPrice.reduce((a,b) => a + b, 0);
            if(this.servicesSum)this.totalPrice.push(this.servicesSum);
            //others sum
            if(this.selectedPeople)this.totalPrice.push(this.selectedPeople.price);
            if(this.selectedFounder == true)this.totalPrice.push(this.selectedFounder.price)
            if(this.selectedIncome)this.totalPrice.push(this.selectedIncome.price);
            if(this.selectedExtraIncome == true)this.totalPrice.push(this.selectedExtraIncome.price);
            if(this.selectedPdv)this.totalPrice.push(this.selectedPdv.price)
            if(this.selectedPayment)this.totalPrice.push(this.selectedPayment.price)
            if(this.selectedClient)this.totalPrice.push(this.selectedClient.price)
            if(this.selectedCashRegister)this.totalPrice.push(this.selectedCashRegister.price)
            if(this.selectedEBanking)this.totalPrice.push(this.selectedEBanking.price)

            this.totalSum = this.totalPrice.reduce((a,b) => a + b, 0);
      
            }
            if(this.$route.path == "/price-list/entrepreneur"){
               
                await this.getEntrepreneurFormData(
                 this.entrepreneurFormData =  {  
                     entrepreneur: this.entrepreneur,
                     checkedServices : this.selectedServices,
                     people: this.selectedPeople,
                     income:  this.selectedIncome,
                     incomeExtra:  this.selectedExtraIncome,
                     pdv:  this.selectedPdv,
                     payment: this.selectedPayment,
                     client: this.selectedClient,
                     cashRegister: this.selectedCashRegister,
                     eBanking: this.selectedEBanking,
                     comment: this.comment,
                     email: this.email,
                     totalSum: this.totalSum,
                     checkedServicesSum: this.servicesSum
                 }).then(response => console.log(response)).catch(err => console.log(err.response.data));
            }else if(this.$route.path == "/price-list/doo"){
                await this.getDooFormData(
                    this.dooFormData = {
                        doo: this.doo,
                        checkedServices : this.selectedServices,
                        people: this.selectedPeople,
                        founders: this.selectedFounder,
                        income:  this.selectedIncome,
                        pdv:  this.selectedPdv,
                        payment: this.selectedPayment,
                        client: this.selectedClient,
                        cashRegister: this.selectedCashRegister,
                        eBanking: this.selectedEBanking,
                        comment: this.comment,
                        email: this.email,
                        totalSum: this.totalSum,
                        checkedServicesSum: this.servicesSum
                    } 
                );
            }

        }
    },
    computed:{
        ...mapGetters['formData'],
        isEntrepreneur(){
            return this.$route.path == '/price-list/entrepreneur';
        }

        
    }


}
</script>
<style>
.go-back-button{margin-left: 0;}
.submit-button{margin-left: auto;}
.red{
    color: red;
}
form{

    text-align: left;
}
.form-people{
    display: block;
}
</style>