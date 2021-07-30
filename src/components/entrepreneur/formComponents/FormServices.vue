<template>
      <div class="form-services">

                <h5 v-if="hideNew">Planirate da se bavite:<!-- <span class="red"> *</span> --></h5>
                <h5 v-else>
                    Trenutno se bavite:
                </h5>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="services" id="services" v-model="checkedServices">
                <label class="form-check-label" for="services">
                    Uslugama  40e
                </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="trading" id="trading" v-model="checkedServices">
                    <label class="form-check-label" for="trading">
                        Trgovinom  60e
                    </label>
                </div>
 
                <div class=" form-check">
                    <input class="form-check-input" type="checkbox" value="production" id="production" v-model="checkedServices">
                    <label class="form-check-label" for="production">
                        Proizvodnjom  80e
                    </label>
                </div>
            </div> <!-- end of form-services -->
</template>
<script>
export default {
    data() {
       return{
          
       } 
    },
    props:{checkedServices:Array, hideNew:Boolean},

    }
}
</script>