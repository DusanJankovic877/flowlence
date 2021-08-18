<template>
<div class="col-lg-7 m-auto">

      <hr>
        <h2 v-if="hideNew">Novi preduzetnik</h2>
        <h1 v-else>Postojeći preduzetnik</h1>
        <hr>
     
        <form @submit.prevent>
                <h4 v-if="hideNew">Tek planiram da se registrujem kao preduzetnik</h4>
                <h4 v-else>Već poslujem u formi preduzetnika</h4>
            <hr>
                <!-- <FormServices :hideNew="hideNew" :checkedServices="entrepreneurForm.checkedServices"/>  -->
                <div class="form-services"> 

                    <h5 v-if="hideNew">Planirate da se bavite:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Trenutno se bavite:
                    </h5>
                    <div v-for="service in services" :key="service.id" class="form-check">
                        <input class="form-check-input" type="checkbox" :value="service.id" :id="service.title" v-model="servicesId">
                        <label class="form-check-label" :for="service.title">
                            {{service.title}}
                        </label>
                    </div>
                </div><!-- end of form-services -->
            <hr>
                <div class="number-of-people">

                    <h5 v-if="hideNew">Broj lica koji očekujete da zaposlite (uključujući u ovaj broj i Vas kao preduzetnika)<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Broj lica koji zapošljavate (uključujući u ovaj broj i Vas kao preduzetnika)</h5>
                    <div  class="input-group form-people">
                        <div v-for="person in people" :key="person.id" class="form-check">
                            <input class="form-check-input" type="radio"  :value="person.id" :id="person.title" v-model="peopleId" >
                            <label class="form-check-label" :for="person.title">{{person.title}}</label>
                        </div>
                    </div>
                </div> <!--end of number-of-people -->
            <hr>
                <div class="income">

                    <h5 v-if="hideNew">Prihod koji očekujete da ostvarite u narednih godinu dana (od prodaje proizvoda, usluga...):<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Prihod koje ostvarujete na godišnjem nivou (od prodaje proizvoda, usluga...):</h5>
                    <div v-for="income in incomes" :key="income.id" class="form-check">
                        <input class="form-check-input 150" type="radio" :value="income.id" :id="income.title" v-model="incomeId"  >
                        <label class="form-check-label" :for="income.title">{{income.title}}</label>
                    </div>
                   
                    <div v-if="incomeId === 0 || incomeId === 1 || incomeId === 2"> 
                  
                        <h5 v-if="hideNew">Da li želite da budete paušalno oporezovani?</h5>
                        <h5 v-else>Da li ste paušalno oporezovani?</h5>
                        <div v-for="extraIncome in extraIncomes" :key="extraIncome.id" class="form-check">
                            <input class="form-check-input" type="radio" :value="extraIncome.id" :id="extraIncome.title"  v-model="extraIncomeId"  >
                            <label class="form-check-label" :for="extraIncome.title">{{extraIncome.title}}</label>
                        </div>
                    </div>  <!-- end of the extra content -->
                </div> <!--end of form-income -->
            <hr>
                <div class="pdv">

                    <h5 v-if="hideNew">Da li planirate da budete u sistemu pdv-a: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li ste u sistemu pdv-a:</h5>
                    <div v-for="pdv in pdvs" :key="pdv.id" class="form-check" >
                            <input class="form-check-input"  type="radio" :value="pdv.id" :id="pdv.title"  v-model="pdvId" >
                            <label class="form-check-label" :for="pdv.title">{{pdv.title}}</label>
                    </div>
                </div> <!--end of form-pdv -->
            <hr>
                <div class="payments">

                    <h5 v-if="hideNew">Platni prometi koji ćete obavljati sa Vašim klijentima će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Platni prometi koji obavljate sa Vašim klijentima je:</h5>
                    <div  v-for="payment in payments" :key="payment.id" class="form-check">
                        <input class="form-check-input" type="radio" :value="payment.id" :id="payment.title" v-model="paymentId">
                        <label class="form-check-label" :for="payment.title">{{payment.title}}</label>
                    </div>       
                </div> <!--end of form-payments -->
            <hr>
                <div class="clients">
                    
                    <h5 v-if="hideNew">Vaši klijenti će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Vaši klijenti su:</h5>
                    <div v-for="client in clients" :key="client.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="client.id" :id="client.title" v-model="clientId">
                        <label class="form-check-label" :for="client.title">{{client.title}}</label>
                    </div>       
                </div> <!--end of form-clients -->
            <hr>
                <div class="cash-register">

                    <h5 v-if="hideNew">Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li posedujete fiskalnu kasu:</h5>
                    <div v-for="cashRegister in cashRegisters" :key="cashRegister.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="cashRegister.id" :id="cashRegister.title" v-model="cashRegisterId">
                        <label class="form-check-label" :for="cashRegister.title">{{cashRegister.title}}</label>
                    </div>       
                </div> <!--end of form-cash-register -->   
            <hr>
                <div class="e-banking">

                    <h5 v-if="hideNew">Elektronsko bankartvo želite da: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Elektronsko bankarstvo:</h5>
                    <div v-for="eBanking in eBankings" :key="eBanking.id" class="form-check">
                        <input class="form-check-input"  type="radio" :value="eBanking.id" :id="eBanking.title" v-model="eBankingId">
                        <label class="form-check-label" :for="eBanking.title">{{eBanking.title}}</label>
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
                <div :class="hide ? 'showButtons row ' : 'hide row '">
                    <button class="go-back-button col-lg-3 btn btn-danger" @click="showButtons">Idi nazad</button>
                    <button class="submit-button col-lg-3 btn btn-success" @click="submitEntrepreneurForm">Pošalji</button>
                </div>
           
        </form>
</div>
</template>
<script>
import { mapActions } from 'vuex'

export default {

    data() {
        return{
                //hard coded data
                services:
                [  
                    {id:0, title: "Uslugama",price: 40},
                    {id:1, title: "Trgovinom",price: 60},
                    {id:2, title: "Proizvodnjom",price: 80},
                ],
                people: [
                    {id:0, title: "do 3",price: 20},
                    {id:1, title: "4-7",price: 30},
                    {id:2, title: "8-10",price: 60},
                    {id:3, title: "11-19",price: 100},
                    {id:4, title: "20 i više",price: 200},
                ],
                incomes:[
                    {id:0, title: "do 1 500 000 rsd",price: 0},
                    {id:1, title: "1 500 000-4 000 000 rsd",price: 5},
                    {id:2, title: "4 000 000-6 000 000 rsd",price: 10},
                    {id:3, title: "6 000 000-10 000 000 rsd",price: 20},
                    {id:4, title: "preko 10 000 000 rsd",price: 50},

                ],
                extraIncomes: [
                    {id:0, title: "da",price: 0},
                    {id:1, title: "ne",price: 0},
                    {id:2, title: "nisam siguran/na",price: 0},                    
                ],
                pdvs: [
                    {id:0, title: "da ",price: 0},
                    {id:1, title: "ne ",price: 0},
                    {id:2, title: "nisam siguran/na ",price: 0},                    
                ],
                payments: [
                    {id:0, title: "samo dinarski",price: 0},
                    {id:1, title: "samo devizni",price: 5},
                    {id:2, title: "i dinarski i devizni",price: 5},                    
                ],
                clients: [
                    {id:0, title: "fizička lica ",price: 0},
                    {id:1, title: "pravna lica",price: 0},
                    {id:2, title: "i fizička i pravna lica",price: 10},                    
                ],
                cashRegisters: [
                    {id:0, title: " da",price: 5},
                    {id:1, title: " ne",price: 0},
                    {id:2, title: " nisam siguran/na",price: 0},                  
                ],
                eBankings: [
                    {id:0, title: "obavljate samostalno",price: 0},
                    {id:1, title: "prepustite knjigovotstvenoj agenciji" ,price: 5},              
                ],
                //DATA TO BE POPULATED
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
            
        } 
    },
    props: {hideNew: Boolean, hide: Boolean, hideAlready: Boolean},
    methods:{
        ...mapActions([
            'getEntrepreneurFormData'
        ]),
        setValue(value){
            if(value){
                this.pdvs.splice(2,1);
            }
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
            if(this.hideAlready){
                this.pdvs.push({id: 2,title: "nisam siguran/na",price: 0})
            }
          this.$emit('handle-show-buttons', this.hideNew, this.hideAlready)
        },
        async submitEntrepreneurForm(){
        if(this.selectedPrice.length !== 0){
            this.selectedPrice = []; this.selectedServices= []; this.servicesSum = 0; this.servicesId=[];
            }
        else{
            //services
          this.servicesId.forEach(serviceId => {
            var service = this.services.find(x => x.id === serviceId)
            this.selectedServices.push(service);
          });
          this.selectedServices.forEach(sService => {
            this.selectedPrice.push(sService.price);
          });
          //people
          this.selectedPeople = this.people.find(x => x.id === this.peopleId)
          //income
          this.selectedIncome = this.incomes.find(x => x.id === this.incomeId)
          //extraIncome

            if(this.incomeId === 0){
                this.selectedExtraIncome = this.extraIncomes.find(x => x.id === this.extraIncomeId)
            }else if(this.incomeId === 1){
                this.selectedExtraIncome = this.extraIncomes.find(x => x.id === this.extraIncomeId)
            }else if(this.incomeId === 2){
                this.selectedExtraIncome = this.extraIncomes.find(x => x.id === this.extraIncomeId)
            }else {
               this.selectedExtraIncome = {title:"ne", price:0}
            }

          //pdv
          this.selectedPdv = this.pdvs.find(x => x.id === this.pdvId)
          //payment
          this.selectedPayment = this.payments.find(x => x.id === this.paymentId)
          //client
          this.selectedClient = this.clients.find(x => x.id === this.clientId)
          //cash register
          this.selectedCashRegister = this.cashRegisters.find(x => x.id === this.cashRegisterId)
          //e banking
          this.selectedEBanking = this.eBankings.find(x => x.id === this.eBankingId)

          //SUMMARy
            //services summ
            this.servicesSum = this.selectedPrice.reduce((a,b) => a + b, 0);
            if(this.servicesSum)this.totalPrice.push(this.servicesSum);
            //others sum
            if(this.selectedPeople)this.totalPrice.push(this.selectedPeople.price);
            if(this.selectedIncome)this.totalPrice.push(this.selectedIncome.price);
            if(this.selectedExtraIncome)this.totalPrice.push(this.selectedExtraIncome.price);
            if(this.selectedPdv)this.totalPrice.push(this.selectedPdv.price)
            if(this.selectedPayment)this.totalPrice.push(this.selectedPayment.price)
            if(this.selectedClient)this.totalPrice.push(this.selectedClient.price)
            if(this.selectedCashRegister)this.totalPrice.push(this.selectedCashRegister.price)
            if(this.selectedEBanking)this.totalPrice.push(this.selectedEBanking.price)

            this.totalSum = this.totalPrice.reduce((a,b) => a + b, 0);
                console.log('total sum',this.totalSum);
            }

           await this.getEntrepreneurFormData(
            this.entrepreneurFormData =  {  
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
        }
    }

}
</script>
<style>
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