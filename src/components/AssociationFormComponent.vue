<template>
    <div class="doo-form col-lg-7 m-auto">
        <h1 v-if="hideNew">Novo udruženje</h1>
        <h1 v-else>Postojeće udruženje</h1>
        <form @submit.prevent>
                <h4 v-if="hideNew">Tek planiram registraciju Udruženja</h4>
                <h4 v-else>Već postojeće Udruženje</h4>
            <hr>
                <div class="assoc-founders"> 
                
                    <h5 v-if="hideNew">Osnivači Udruženja će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Osnivači Udruženja su
                    </h5>
                    
                    <div v-for="assocFounder in formData.assocFounders" :key="assocFounder.id" >
                        <input class="form-check-input" type="radio" :value="assocFounder.id" :id="assocFounder.id" v-model="assocFounderId">
                        <label class="form-check-label" :for="assocFounder.id">
                            {{assocFounder.option_text}}
                        </label>
                    </div>
                </div><!-- end of assoc-founders -->
            <hr>
                <div class="assoc-founders2"> 
                
                    <h5 v-if="hideNew">Osnivači Udruženja će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Osnivači Udruženja su
                    </h5>
                    
                    <div v-for="assocFounder2 in formData.assocFounders2" :key="assocFounder2.id" >
                        <input class="form-check-input" type="radio" :value="assocFounder2.id" :id="assocFounder2.id" v-model="assocFounder2Id">
                        <label class="form-check-label" :for="assocFounder2.id">
                            {{assocFounder2.option_text}}
                        </label>
                    </div>
                </div><!-- end of assoc-founders2 -->
            <hr>
                <div class="reg-assoc"> 
                
                    <h5 v-if="hideNew">Da li će Udruženje biti registrovano za privrednu delatnost (ostvarivanje Prihoda na tržištu, izdavanje faktura):<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Da li je Udruženje registrovano za privrednu delatnost (ostvarivanje Prihoda na tržištu, izdavanje faktura):
                    </h5>
                    
                    <div v-for="registration in formData.regAssoc" :key="registration.id" >
                        <input class="form-check-input" type="radio" :value="registration.id" :id="registration.id" v-model="registrationId">
                        <label class="form-check-label" :for="registration.id">
                            {{registration.option_text}}
                        </label>
                    </div>
                    <!-- //extra content -->
                    <div v-if="registrationId === 46"> 
                        <div class="incomes"> 
                        
                            <h5 v-if="hideNew">Prihod koji očekujete da ostvarite u narednih godinu dana od obavljanja privredne aktivnosti:<!-- <span class="red"> *</span> --></h5>
                            <h5 v-else>
                               Prihod koje ostvarujete na godišnjem nivou od obavljanja privredne aktivnosti:
                            </h5>
                            
                            <div v-for="income in formData.incomes" :key="income.id" >
                                <input class="form-check-input" type="radio" :value="income.id" :id="income.id" v-model="incomeId">
                                <label class="form-check-label" :for="income.id">
                                    {{income.option_text}}
                                </label>
                            </div> 
                        </div><!-- end of incomes -->
                    </div>
                </div><!-- end of reg-assoc -->
            <hr>
                <div class="people"> 
                
                    <h5 v-if="hideNew">Broj lica koji očekujete da zaposlite:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Broj lica koji Udruženje zapošljava:
                    </h5>
                    
                    <div v-for="person in formData.people" :key="person.id" >
                        <input class="form-check-input" type="radio" :value="person.id" :id="person.id" v-model="personId">
                        <label class="form-check-label" :for="person.id">
                            {{person.option_text}}
                        </label>
                    </div>
                </div><!-- end of people -->
            <hr>
                <div class="pdvs"> 
                
                    <h5 v-if="hideNew">Da li planirate da budete u sistemu pdv-a:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Da li ste u sistemu pdv-a:
                    </h5>
                    
                    <div v-for="pdv in formData.pdvs" :key="pdv.id" >
                        <input class="form-check-input" type="radio" :value="pdv.id" :id="pdv.id" v-model="pdvId">
                        <label class="form-check-label" :for="pdv.id">
                            {{pdv.option_text}}
                        </label>
                    </div>
                </div><!-- end of pdvs -->
            <hr>
                <div class="payments"> 
                
                    <h5 v-if="hideNew">Platni promete koji ćete obavljati će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>
                        Platni promete koji obavljate je:
                    </h5>
                    
                    <div v-for="payment in formData.payments" :key="payment.id" >
                        <input class="form-check-input" type="radio" :value="payment.id" :id="payment.id" v-model="paymentId">
                        <label class="form-check-label" :for="payment.id">
                            {{payment.option_text}}
                        </label>
                    </div>
                </div><!-- end of payments -->
            <hr>
                <div class="cash-registers"> 
                
                    <h5>Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>

                    <div v-for="cashRegister in formData.cashRegisters" :key="cashRegister.id" >
                        <input class="form-check-input" type="radio" :value="cashRegister.id" :id="cashRegister.id" v-model="cashRegisterId">
                        <label class="form-check-label" :for="cashRegister.id">
                            {{cashRegister.option_text}}
                        </label>
                    </div>
                </div><!-- end of cash registers -->
            <hr>
                <div class="cash-registers"> 
                
                    <h5>Elektronsko bankarstvo želite da:<!-- <span class="red"> *</span> --></h5>

                    <div v-for="eBanking in formData.eBankings" :key="eBanking.id" >
                        <input class="form-check-input" type="radio" :value="eBanking.id" :id="eBanking.id" v-model="eBankingId">
                        <label class="form-check-label" :for="eBanking.id">
                            {{eBanking.option_text}}
                        </label>
                    </div>
                </div><!-- end of cash registers -->
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
                
        </form>
        
        <div :class="hide ? 'showButtons circles ' : 'hide circles '">
            <button class="go-back-button col-lg-4 btn btn-danger" @click="showButtons">Idi nazad</button>
            <button class="submit-button col-lg-4 btn btn-success" @click="submitEntrepreneurForm">Pošalji</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
      return{
        association: '',
        associationMailData:{},
        assocFounderId: '',
        selectedAssocFounder: {},
        assocFounder2Id: '',
        selectedAssocFounder2: {},
        registrationId: '',
        selectedRegistration: {},
        incomeId: '',
        selectedIncome: {},
        personId: '',
        selectedPerson: {},
        pdvId: '',
        selectedPdv: {},
        paymentId: '',
        selectedPayment: {},
        cashRegisterId: '',
        selectedCashRegister: {},
        eBankingId: '',
        selectedEbanking: {},
        totalPrice: [],
        totalSum: 0,
        comment: '',
        email: ''
      }  
    },
    props: {hideNew: Boolean, hide: Boolean, hideAlready: Boolean, formData: Object},
    methods:{
                ...mapActions([
             'getAssociationMailData'
        ]),
        setHideNewValue(value){
            console.log(value);
            // if(this.isEntrepreneur){
            //     if(value && this.formData.extraIncomes.length == 2)this.formData.extraIncomes.push(this.removedExtraIncome);
            // }
            // if(value && this.formData.pdvs.length == 2)this.formData.item1.push(this.removedPdv);       
        },
        setHideAlreadyValue(value){
            console.log(value);

            // if(value && this.formData.pdvs.length === 3) this.removedPdv = this.formData.item1.splice(2,1).pop();
            // if(this.isEntrepreneur){
            // if(value && this.formData.extraIncomes.length === 3) this.removedExtraIncome = this.formData.extraIncomes.splice(2,1).pop();}
        },
        showButtons(){
            this.assocFounderId = ''
            this.assocFounder2Id= ''
            this.registrationId = ''
            this.incomeId = ''
            this.personId = ''
            this.pdvId = ' '
            this.paymentId = ''
            this.cashRegisterId = ''
            this.eBankingId = ''
            this.comment = ''
            this.email = ''
      
      

          this.$emit('handle-show-buttons', this.hideNew, this.hideAlready)
        },
        async submitEntrepreneurForm(){
            if(this.totalPrice !== 0 )this.totalSum = 0; this.totalPrice = []
            if(this.hideNew) this.association = 'Novo udruženje';
            else this.association = 'Već postojeće udruženje';
            //SELECTION OF DATA
            //first assoc
            this.selectedAssocFounder = this.formData.assocFounders.find(x => x.id === this.assocFounderId)
            //second assoc
            this.selectedAssocFounder2 = this.formData.assocFounders2.find(x => x.id === this.assocFounder2Id)
            //regAssoc
            this.selectedRegistration = this.formData.regAssoc.find(x => x.id === this.registrationId)
            //income
            if(this.registrationId == 46)this.selectedIncome = this.formData.incomes.find(x => x.id === this.incomeId)
            //person
            this.selectedPerson = this.formData.people.find(x => x.id === this.personId)
            //pdv
            this.selectedPdv = this.formData.pdvs.find(x => x.id === this.pdvId)
            //payment
            this.selectedPayment = this.formData.payments.find(x => x.id === this.paymentId)
            //cash register
            this.selectedCashRegister = this.formData.cashRegisters.find(x => x.id === this.cashRegisterId)
            //ebanking
            this.selectedEbanking = this.formData.eBankings.find(x => x.id === this.eBankingId)




    // console.log('person',this.selectedPerson);


            //SUMM
            if(this.selectedAssocFounder)this.totalPrice.push(this.selectedAssocFounder.price);
            if(this.selectedAssocFounder2)this.totalPrice.push(this.selectedAssocFounder2.price);
            if(this.selectedRegistration)this.totalPrice.push(this.selectedRegistration.price);
            if(this.registrationId == 46)this.totalPrice.push(this.selectedIncome.price);
            if(this.selectedPerson)this.totalPrice.push(this.selectedPerson.price);
            if(this.selectedPdv)this.totalPrice.push(this.selectedPdv.price);
            if(this.selectedPayment)this.totalPrice.push(this.selectedPayment.price);
            if(this.selectedCashRegister)this.totalPrice.push(this.selectedCashRegister.price);
            if(this.selectedEbanking)this.totalPrice.push(this.selectedEbanking.price);

            this.totalSum = this.totalPrice.reduce((a,b) => a + b, 0);
            console.log('price',this.totalPrice.length);
            console.log(this.totalSum);

            await this.getAssociationMailData(
                this.associationMailData = {
                    association: this.association,
                    assocFounder: this.selectedAssocFounder,
                    assocFounder2: this.selectedAssocFounder2,
                    registration: this.selectedRegistration,
                    income: this.selectedIncome,
                    person: this.selectedPerson,
                    pdv: this.selectedPdv,
                    payment: this.selectedPayment,
                    cashRegister: this.selectedPayment,
                    eBanking: this.selectedEbanking,
                    comment: this.comment,
                    email: this.email,
                    totalSum: this.totalSum


                }
            )
    

            
        }
    }
}
</script>