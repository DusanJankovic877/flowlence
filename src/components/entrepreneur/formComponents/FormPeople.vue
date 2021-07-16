<template>
      <div class="number-of-people">

                <h5 v-if="hideNew">Broj lica koji očekujete da zaposlite (uključujući u ovaj broj i Vas kao preduzetnika)<!-- <span class="red"> *</span> --></h5>
                <h5 v-else>Broj lica koji zapošljavate (uključujući u ovaj broj i Vas kao preduzetnika)</h5>

                <div class="input-group form-people">
                    <div class="form-check">
                        <input class="form-check-input" v-model="people" type="radio" id="pepople-3" name="pepople-3" value="do 3">
                        <label class="form-check-label" for="pepople-3">do 3 20e</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="people" type="radio" id="pepople-4-7" name="pepople-4-7" value="4-7">
                        <label class="form-check-label" for="pepople-4-7">4-7 30e</label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" v-model="people" type="radio" id="pepople-8-10" name="pepople-8-10" value="8-10">
                        <label class="form-check-label" for="pepople-8-10">8-10 60e</label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" v-model="people" type="radio" id="pepople-11-19" name="pepople-11-19" value="11-19">
                        <label class="form-check-label" for="pepople-11-19">11-19 100e</label>
                     </div>
                     <div class="form-check">
                        <input class="form-check-input" v-model="people" type="radio" id="pepople-20" name="pepople-20" value="20 i više">
                        <label class="form-check-label" for="pepople-20">20 i više 200e</label>
                     </div>
                </div>
            </div> <!--end of number-of-people -->
</template>
<script>
export default {
    props:{
        people: String,
        hideNew: Boolean
    }
}
</script>