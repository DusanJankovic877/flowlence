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
<!-- {{pdvs}} -->
                    <!-- <div class="form-check">
                        <input class="form-check-input" v-model="pdv" type="radio" id="pdv-da" name="da" value="pdv-da">
                        <label class="form-check-label" for="pdv-da">da 15e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="pdv" type="radio" id="pdv-ne" name="ne" value="pdv-ne">
                        <label class="form-check-label" for="pdv-ne">ne 0e</label>
                    </div> -->
               
                    <div v-for="pdv in pdvs" :key="pdv.id" class="form-check" >
                        <div>
                            <input class="form-check-input"  type="radio" :value="pdv.id" :id="pdv.title"  v-model="pdvId" >
                            <label class="form-check-label" :for="pdv.title">{{pdv.title}}</label>

                        </div>
                        
                    </div>
                </div> <!--end of form-pdv -->
            <hr>
                <div class="payments">

                    <h5 v-if="hideNew">Platni prometi koji ćete obavljati sa Vašim klijentima će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Platni prometi koji obavljate sa Vašim klijentima je:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="payment" type="radio" id="din" name="din" value="samo dinarski">
                        <label class="form-check-label" for="din">samo dinarski 0e</label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="payment" type="radio" id="deviz" name="deviz" value="samo devizni">
                        <label class="form-check-label" for="deviz">samo devizni 5e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="payment" type="radio" id="din-deviz" name="div-deviz" value="i dinarski i devizni">
                        <label class="form-check-label" for="din-deviz">i dinarski i devizni 5e</label>
                    </div>                  
                </div> <!--end of form-payments -->
            <hr>
                <div class="clients">
                    <h5 v-if="hideNew">Vaši klijenti će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Vaši klijenti su:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="clients" type="radio" id="fiz" name="fiz" value="fizicka lica">
                        <label class="form-check-label" for="fiz">fizicka lica 10e </label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="clients" type="radio" id="prav" name="prav" value="pravna lica">
                        <label class="form-check-label" for="prav">pravna lica 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="clients" type="radio" id="fiz-prav" name="fiz-prav" value="i fizicka i pravna">
                        <label class="form-check-label" for="fiz-prav">i fizicka i pravna 10e</label>
                    </div>   
                </div> <!--end of form-clients -->
            <hr>
                <div class="cash-register">
                    <h5 v-if="hideNew">Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li posedujete fiskalnu kasu:</h5>
                    <div class="form-check">
                        <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-da" name="f-kasa-da" value="da">
                        <label class="form-check-label" for="f-kasa-da">da 5e</label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-ne" name="f-kasa-ne" value="ne">
                        <label class="form-check-label" for="f-kasa-ne">ne 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="cashRegister" type="radio" id="f-kasa-da-ne" name="f-kasa-da-ne" value="nisam siguran/sigurna">
                        <label class="form-check-label" for="f-kasa-da-ne">nisam siguran/sigurna 0e</label>
                    </div>   
                </div> <!--end of form-cash-register -->   
            <hr>
                <div class="e-banking">
                    <h5 v-if="hideNew">Elektronsko bankartvo želite da: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Elektronsko bankarstvo:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="eBanking" type="radio" id="e-bank-solo" name="e-bank-solo" value="obavljate samostalno">
                        <label class="form-check-label" for="e-bank-solo">obavljate samostalno 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="eBanking" type="radio" id="e-bank-accountant" name="e-bank-accountant" value="prepustite knjigovotstvenoj agenciji">
                        <label class="form-check-label" for="e-bank-accountant">prepustite knjigovotstvenoj agenciji 5e</label>
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
                    <!-- <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu: <span class="red"> *</span></h5>
                    <div class="form-group">
                        <label for="email">Email adresa: </label>
                        <input type="email" v-model="email" name="email" class="form-control" id="email" placeholder="name@example.com">
                    </div> -->

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
                    {id:0, title: "da",price: 0},
                    {id:1, title: "ne",price: 0},
                    {id:2, title: "nisam siguran/na",price: 0},                    
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
                payment: '',
                clients: '',
                cashRegister: '',
                eBanking: '',
                comment: '',
                email: '',
                entrepreneurFormData: {}
            
        } 
    },
    props: {hideNew: Boolean, hide: Boolean, hideAlready: Boolean},
    methods:{
        ...mapActions([
            'getEntrepreneurFormData'
        ]),
        showButtons(){
            this.servicesId = []
            this.peopleId= ''
            this.incomeId = ''
            this.extraIncomeId = '',
            this.pdv = ''
            this.payment = ' '
            this.clients = ''
            this.cashRegister = ''
            this.eBanking = ''
            this.comment = ''
            this.email = '',
            

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
          this.selectedExtraIncome = this.extraIncomes.find(x => x.id === this.extraIncomeId)
          //pdv

          

          this.servicesSum = this.selectedPrice.reduce((a,b) => a + b, 0);
            if(this.servicesSum)this.totalPrice.push(this.servicesSum);
            if(this.selectedPeople)this.totalPrice.push(this.selectedPeople.price);
            if(this.selectedIncome)this.totalPrice.push(this.selectedIncome.price);
            if(this.selectedExtraIncome)this.totalPrice.push(this.selectedExtraIncome.price);

       
          
          
          this.totalSum = this.totalPrice.reduce((a,b) => a + b, 0);
            console.log(this.totalSum);
        }
        
        //    console.log('form view ',this.entrepreneurForm);
        //     if(this.income !== 'do 1500000 rsd' || this.income !== '1500000-4000000 rsd' || this.income !== '4000000-6000000 rsd'){this.incomeExtra = "ne"}
        //    await this.getEntrepreneurFormData(
        //     this.entrepreneurFormData =  {  
        //         checkedServices : this.checkedServices,
        //         people: this.people,
        //         income:  this.income,
        //         incomeExtra:  this.incomeExtra,
        //         pdv:  this.pdv,
        //         payment: this.payment,
        //         clients: this.clients,
        //         cashRegister: this.cashRegister,
        //         eBanking: this.eBanking,
        //         comment: this.comment,
        //         email: this.email 
        //     }).then(response => console.log(response)).catch(err => console.log(err.response.data));
        }
    },
    
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