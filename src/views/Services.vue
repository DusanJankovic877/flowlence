<template>
        <div class="services col-lg-7 m-auto">
          <h1>Usluge</h1>
    <div class="row">

          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Osnivanje</h3>
                <p class="card-text">konsalting pre postupka osnivanja, provera rezervisanosti naziva, podnošenje dokumentacije...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 1st-->
          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Knjigovodstvene usluge</h3>
                <p class="card-text">vođenje poslovnih knjiga, Knjiženje dokumentacije,Vođenje analitičke evidencije...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div><!-- 2nd-->
          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Obračun zarada / Kadrovske usluge</h3>
                <p class="card-text">Popunjavanje ugovora o radnom angažovanju, Prijavljivanje I odjavljivanje zaposlenih...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 3rd-->
          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Platni promet (dinarski I devizni)</h3>
                <p class="card-text">Otvaranje tekućih računa, Elektronsko bankarstvo, Priprema naloga za plaćanje...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div><!-- 4th-->
          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Poreski I finansijski konsalting</h3>
                <p class="card-text">Savetovanje klijenta u vezi svih poreskih pitanja, kao I davanje predloga...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 5th-->
          <div class="krug">
            <router-link class="prices-link" to="/price-list/entrepreneur">
              <div class="price-card-body">
              <h3>Izračunavanje finansijskih pokazatelja, izrada biznis planova</h3>
                <p class="card-text">izračunavanje pokazateljima, Izrada biznis plana...</p>
                <p><b>više informacija</b> </p>
              </div>
            </router-link>
          </div> <!-- 6th-->
    </div>
  </div>
</template>
<style>
.krug{
    /* background-color: #FBA922; */
    height: 320px;
    width: 320px;
    border-radius: 25em;
    padding: 0;
    margin:5px auto !important;
}
.prices-link{
  text-decoration: none;
  color: #385663;
}
.prices-link:hover{
  color: white !important;
}
.krug:hover {
  text-decoration: none;
  background-color: #385663;
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