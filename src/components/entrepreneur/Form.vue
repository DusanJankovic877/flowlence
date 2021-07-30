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

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="services" id="services" v-model="entrepreneurForm.checkedServices">
                    <label class="form-check-label" for="services">
                        Uslugama  40e
                    </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="trading" id="trading" v-model="entrepreneurForm.checkedServices">
                        <label class="form-check-label" for="trading">
                            Trgovinom  60e
                        </label>
                    </div>
    
                    <div class=" form-check">
                        <input class="form-check-input" type="checkbox" value="production" id="production" v-model="entrepreneurForm.checkedServices">
                        <label class="form-check-label" for="production">
                            Proizvodnjom  80e
                        </label>
                    </div>
                </div><!-- end of form-services -->
            <hr>
                <div class="number-of-people">

                    <h5 v-if="hideNew">Broj lica koji očekujete da zaposlite (uključujući u ovaj broj i Vas kao preduzetnika)<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Broj lica koji zapošljavate (uključujući u ovaj broj i Vas kao preduzetnika)</h5>

                    <div class="input-group form-people">
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.people" type="radio" id="pepople-3" name="pepople-3" value="do 3">
                            <label class="form-check-label" for="pepople-3">do 3 20e</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.people" type="radio" id="pepople-4-7" name="pepople-4-7" value="4-7">
                            <label class="form-check-label" for="pepople-4-7">4-7 30e</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.people" type="radio" id="pepople-8-10" name="pepople-8-10" value="8-10">
                            <label class="form-check-label" for="pepople-8-10">8-10 60e</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.people" type="radio" id="pepople-11-19" name="pepople-11-19" value="11-19">
                            <label class="form-check-label" for="pepople-11-19">11-19 100e</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.people" type="radio" id="pepople-20" name="pepople-20" value="20 i više">
                            <label class="form-check-label" for="pepople-20">20 i više 200e</label>
                        </div>
                    </div>
                </div> <!--end of number-of-people -->
            <hr>
                <div class="income">
                    <h5 v-if="hideNew">Prihod koji očekujete da ostvarite u narednih godinu dana (od prodaje proizvoda, usluga...):<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Prihod koje ostvarujete na godišnjem nivou (od prodaje proizvoda, usluga...):</h5>

                    <div class="form-check">
                        <input class="form-check-input 150" v-model="entrepreneurForm.income" type="radio" id="150" name="150" value="do 1500000 rsd">
                        <label class="form-check-label" for="150">do 1500000 rsd 0e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.income" type="radio" id="150-400" name="150-400" value="1500000-4000000 rsd">
                        <label class="form-check-label" for="150-400">1500000-4000000 rsd 5e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.income" type="radio" id="400-600" name="400-600" value="4000000-6000000 rsd">
                        <label class="form-check-label" for="400-600">4000000-6000000 rsd 10e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.income" type="radio" id="600-1000" name="600-1000" value="6000000-10000000 rsd">
                        <label class="form-check-label" for="600-1000">6000000-10000000 rsd 20e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.income" type="radio" id="1000" name="1000" value="preko 10000000 rsd">
                        <label class="form-check-label" for="1000">preko 10000000 rsd 50e</label>
                    </div>
                    
                    <div v-if="entrepreneurForm.income === 'do 1500000 rsd' || entrepreneurForm.income === '1500000-4000000 rsd' || entrepreneurForm.income === '4000000-6000000 rsd'"> 
                        <h5 v-if="hideNew">Da li želite da budete paušalno oporezovani?</h5>
                        <h5 v-else>Da li ste paušalno oporezovani?</h5>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.incomeExtra" type="radio" id="da" name="prihod da" value="da">
                            <label class="form-check-label" for="da">da</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" v-model="entrepreneurForm.incomeExtra" type="radio" id="ne" name="prihod ne" value="ne">
                            <label class="form-check-label" for="ne">ne</label>
                        </div>
                        <div class="form-check" v-if="hideNew">
                            <input class="form-check-input" v-model="entrepreneurForm.incomeExtra" type="radio" id="nisam-siguran/na" name="nisam siguran" value="nisam-siguran/na">
                            <label class="form-check-label" for="nisam-siguran/na">nisam siguran/na</label>
                        </div>
                    </div> <!--end of the extra content -->
                </div> <!--end of form-income -->
            <hr>
                <div class="pdv">

                    <h5 v-if="hideNew">Da li planirate da budete u sistemu pdv-a: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li ste u sistemu pdv-a:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.pdv" type="radio" id="pdv-da" name="da" value="pdv-da">
                        <label class="form-check-label" for="pdv-da">da 15e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.pdv" type="radio" id="pdv-ne" name="ne" value="pdv-ne">
                        <label class="form-check-label" for="pdv-ne">ne 0e</label>
                    </div>
                    <div class="form-check" v-if="hideNew">
                        <input class="form-check-input" v-model="entrepreneurForm.pdv" type="radio" id="pdv-da-ne" name="pdv-da-ne" value="nisam siguran/sigurna">
                        <label class="form-check-label" for="pdv-da-ne">nisam siguran/sigurna 0e</label>
                    </div>
                    <div v-else></div>
                </div> <!--end of form-pdv -->
            <hr>
                <div class="payments">

                    <h5 v-if="hideNew">Platni prometi koji ćete obavljati sa Vašim klijentima će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Platni prometi koji obavljate sa Vašim klijentima je:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.payment" type="radio" id="din" name="din" value="samo dinarski">
                        <label class="form-check-label" for="din">samo dinarski 0e</label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.payment" type="radio" id="deviz" name="deviz" value="samo devizni">
                        <label class="form-check-label" for="deviz">samo devizni 5e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.payment" type="radio" id="din-deviz" name="div-deviz" value="i dinarski i devizni">
                        <label class="form-check-label" for="din-deviz">i dinarski i devizni 5e</label>
                    </div>                  
                </div> <!--end of form-payments -->
            <hr>
                <div class="clients">
                    <h5 v-if="hideNew">Vaši klijenti će biti:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Vaši klijenti su:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.clients" type="radio" id="fiz" name="fiz" value="fizicka lica">
                        <label class="form-check-label" for="fiz">fizicka lica 10e </label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.clients" type="radio" id="prav" name="prav" value="pravna lica">
                        <label class="form-check-label" for="prav">pravna lica 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.clients" type="radio" id="fiz-prav" name="fiz-prav" value="i fizicka i pravna">
                        <label class="form-check-label" for="fiz-prav">i fizicka i pravna 10e</label>
                    </div>   
                </div> <!--end of form-clients -->
            <hr>
                <div class="cash-register">
                    <h5 v-if="hideNew">Da li ste u obavezi da posedujete fiskalnu kasu:<!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Da li posedujete fiskalnu kasu:</h5>
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.cashRegister" type="radio" id="f-kasa-da" name="f-kasa-da" value="da">
                        <label class="form-check-label" for="f-kasa-da">da 5e</label>
                    </div>       
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.cashRegister" type="radio" id="f-kasa-ne" name="f-kasa-ne" value="ne">
                        <label class="form-check-label" for="f-kasa-ne">ne 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.cashRegister" type="radio" id="f-kasa-da-ne" name="f-kasa-da-ne" value="nisam siguran/sigurna">
                        <label class="form-check-label" for="f-kasa-da-ne">nisam siguran/sigurna 0e</label>
                    </div>   
                </div> <!--end of form-cash-register -->   
            <hr>
                <div class="e-banking">
                    <h5 v-if="hideNew">Elektronsko bankartvo želite da: <!-- <span class="red"> *</span> --></h5>
                    <h5 v-else>Elektronsko bankarstvo:</h5>

                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.eBanking" type="radio" id="e-bank-solo" name="e-bank-solo" value="obavljate samostalno">
                        <label class="form-check-label" for="e-bank-solo">obavljate samostalno 0e</label>
                    </div>   
                    <div class="form-check">
                        <input class="form-check-input" v-model="entrepreneurForm.eBanking" type="radio" id="e-bank-accountant" name="e-bank-accountant" value="prepustite knjigovotstvenoj agenciji">
                        <label class="form-check-label" for="e-bank-accountant">prepustite knjigovotstvenoj agenciji 5e</label>
                    </div>   
                </div> <!--end of form-cash-e-banking -->   
            <hr>
                <div class="comment">
                    <h5>Dodatni komentar:</h5>
                    <div class="form-group">
                        <textarea v-model="entrepreneurForm.comment" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                        :placeholder=" hideNew ? 'Ovde možete opisati ukratko Vašu delatnost kojom planirate da se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje' : 'Ovde možete opisati ukratko Vašu delatnost kojom se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje:'"
                        ></textarea>
                    </div>
                </div> <!--end of form-comment --> 
            <hr>
                <div class="email">
                    <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu: <span class="red"> *</span></h5>
                    <div class="form-group">
                        <label for="email">Email adresa: </label>
                        <input type="email" v-model="entrepreneurForm.email" name="email" class="form-control" id="email" placeholder="name@example.com">
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
            entrepreneurForm:{
                checkedServices: [],
                people: '',
                income: '',
                incomeExtra: '',
                pdv: '',
                payment: '',
                clients: '',
                cashRegister: '',
                eBanking: '',
                comment: '',
                email: ''
            }
        } 
    },
    props: {hideNew: Boolean, hide: Boolean, hideAlready: Boolean},
    methods:{
        ...mapActions([
            'getEntrepreneurFormData'
        ]),
        showButtons(){
            this.entrepreneurForm.checkedServices = []
            this.entrepreneurForm.people = ''
            this.entrepreneurForm.income = ''
            this.entrepreneurForm.incomeExtra = ''
            this.entrepreneurForm.pdv = ''
            this.entrepreneurForm.payment = ''
            this.entrepreneurForm.clients = ''
            this.entrepreneurForm.cashRegister = ''
            this.entrepreneurForm.eBanking = ''
            this.entrepreneurForm.comment = ''
            this.entrepreneurForm.email = ''

          this.$emit('handle-show-buttons', this.hideNew, this.hideAlready)
        },
        async submitEntrepreneurForm(){
        //    console.log(this.entrepreneurForm);
           await this.getEntrepreneurFormData(this.entrepreneurForm);
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