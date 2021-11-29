<template>
<div>
      <div class="menu-circles">
        <div class="price-info ">
          <div class="price-circle-content col-lg-7 m-auto">
            <div class="price-row">
             
              <button class="krug prices-link"  @click="handleHideButtons('entrepreneur')">
                <div class="price-card-body">
                <h1>Preduzetnik</h1>
                  <p class="card-text">Upitnik se odnosi na pitanja koja se tiču da li već aktivno poslujete ili tek planirate da se registrujete
kao preduzetnik, da li imate zaposlena lica...</p>
                  <p><b>popunite upitnik</b></p>
                </div>
              </button>
                  
              <button class="krug prices-link" @click="handleHideButtons('doo')">
                  <div class="price-card-body">
                  <h1>DOO</h1>
                    <p class="card-text">Upitnik se bavi pitanjem da li su osnivači domaća ili strana lica, da li ste trenutno ili planirate da
budete u sistemu pdv-a...</p>
                    <p><b>popunite upitnik</b></p>

                  </div>
              </button>
       
              <button class="krug prices-link" @click="handleHideButtons('association')">
                <div class="price-card-body">
                <h1>Udruženje</h1>
                  <p class="card-text">Upitnik se odnosi na pitanja da li su osnivači udruženja fizička ili pravna lica, da li je udruženje
registrovano za obavljanje privredne aktivnosti...</p>
                  <p><b>popunite upitnik</b></p>

                </div>
              </button>
       
            </div><!-- end of row -->
          </div><!-- end of col-lg-7-->
        </div> <!-- end of price-info -->
      </div> <!-- end of menu circles--> 
</div>
</template>
<script>
export default {

    data() {
        return{

        }
    },
    props:{
        hideButtons: Boolean,
        selectedButton: String,
        currentRouteName: String
    },
    methods:{
        handleHideButtons(val){
            this.$emit('handle-hide-buttons', val, true)
        }
    }

}
</script>
<style>
/* .{
  color: #404040 !important;
} */
.price-row{
  display: inline-flex !important;
  flex-wrap: wrap;
}
@media (max-width:540px){
  .price-row{
  display: none;
}
}
</style>