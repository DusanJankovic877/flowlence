<template>
        <div class="services col-lg-7 m-auto">
          <h1>Usluge</h1>
    <div class="services-row">
      <div class="card col-lg-3">
        <!-- <h1>glyphicon</h1> -->
        <!-- <div class="card-header"> -->
          <h1>Osnivanje</h1>
        <!-- </div> -->
        <div class="card-body">
          <ul>
            <li>konsalting pre postupka osnivanja (izbor odgovarajuće pravne forme, definisanje pretežne
delatnosti, informisanje o fiksnim troškovima poslovanja, mogućim oblicima zapošljavanja I
sl.)</li>
            <li>provera rezervisanosti naziva, podnošenje dokumentacije u APR-u, overa OP obrasca, izrada
pečata, otvaranje računa u banci, podnošenje dokumentacije u poresku upravu, prijava u PIO
fond, overa zdravstvene kartice.</li>
          </ul>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </div>
      </div>
      <div class="card col-lg-3 m-auto" >
        <h1>glyphicon</h1>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card col-lg-3">
        <h1>glyphicon</h1>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card{
  padding: 50px 10px !important;
}

.services{
    margin-bottom: -100px !important; 
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