<template>
        <div class="services col-lg-7 m-auto">
          <h1>Usluge</h1>
    <div class="services-row">
      <div class="card col-lg-3">
        <h1>glyphicon</h1>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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