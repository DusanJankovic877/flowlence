<template>
    <div class="footer col-lg-12">
        <div class="footer-content col-lg-12">
            <div class="m-auto col-lg-3 footer-logo"></div>
            <h5>Agencija za računovodstvene usluge i konsalting</h5>
            <p>Tihomira Ostojića 10</p>
            <div class="footer-links">

            <a href="tel:+38163466371">
                <img  src="../../assets/svg/telephone.svg" alt="envelope" style=" height:25px;"> 
                <p>+38163466371</p>
            </a>
            <a href="mailto:flowlence@gmail.com">
                <img src="../../assets/svg/envelope.svg" alt="phone" style="height:25px;">
                <p>flowlence@gmail.com</p>
            </a>
            </div>
        </div>
    </div>
</template>
<style>
.footer-links{

}
.footer-content{
    
    text-align: center !important;
    height: 410px;
    padding-top: 55px !important;
    background-color: #314247;
    color: #d9d9d9;
}
.footer-logo{
    width:370px;
    height:150px;
    background-image: url('../../assets/svg/Flowlence-w-1.svg');
    background-repeat: no-repeat;
}
.footer-content a{
color: #d9d9d9 !important;
text-decoration: none;
}
@media only screen and (max-width: 1024px){
    .footer-links{
        margin-left:1%;
    }
}
@media only screen and (max-width: 768px){
  .footer-logo{
        width:220px;
        height:80px;
    }  
    .footer-content{
        height: 350px;
    }
    .footer-content h5{
        font-size: 15px;;
    }
    .footer-content p{
        font-size: 12px;;
    }
}
@media only screen and (max-width: 414px){
    .footer-links{
        margin-left:0;
    }

}

</style>