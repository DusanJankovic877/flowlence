<template>
  <Unlogged v-if="!loggedUser" />
  <Logged v-else :loggedUser="loggedUser" @get-logout="logout"/>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import Unlogged from './Unlogged.vue';
import Logged from './Logged.vue';
export default {
  components: { Logged, Unlogged },
  data() {
      return{
         
      }
  },
  computed:{
            ...mapGetters({token: 'AdminModule/token',isLogged: 'AdminModule/isLogged', loggedUser: 'AdminModule/loggedUser'})
  },
  methods:{
    ...mapActions({getLogout: 'AdminModule/getLogout'}),
      logout(){
        
        this.getLogout().then(() => {
          if(this.$route.name !== 'jolanda'){
            this.$router.replace({
              name: 'jolanda'
            })

          }
        });

      }
    }
  }

</script>
<style>
.drop-down-link{
  color:#404040;
}
.drop-down-link:hover{
  color: white;
}
.phone-mail, .phone-mail li a, .right-links, .container .logo{
  padding: 0!important;
}

.active{
    text-decoration: underline;
}
nav {
  display: block !important;
  background-color: #bfbfbf !important;

}
.nav-links, .navbar-brand{
  padding-bottom: 20px;
}

.info-row{
  margin-right: 0;
}
.info-row p{
  margin-left: 2px;
  margin-bottom: 0;
  display: flex;
}
.info-mail, .info-phone{
 text-align: left;
 margin-right: 20px ;
}
.links-container{
  padding: 0;
}
.nav-links{
  margin-left: auto;
}
.navbar-toggler{
    border: none;
    box-shadow: none !important;
}
.navbar-toggler-icon{
  
  color: black !important;
}
.text, .option{
  font-family: 'RobotoSlab-Medium', sans-serif !important;
  font-size:16px !important;

}
.expand, .dropdown-label{
  background-color: #4d4d4d ;
}
#dropdown-1{
  margin: 0 !important;
}
.dropdown-menu{
  background-color: #e6e6e6 !important;
}
.dropdown-item:hover{
  background-color: #4d4d4d;
}

#dropdown-1__BV_toggle_:hover{
  background-color: #4d4d4d;
  color: #f2f2f2
}
#dropdown-1__BV_toggle_{
  background-color: #e6e6e6;
  margin: 0 !important;
  padding: 0 7px;
  border: none;
  box-shadow: none !important;
  color: #4d4d4d;
}
@media only screen and (max-width: 1024px){
    nav{
    padding: 22px;
  }
  .info-mail{
    margin-right: 100px;
  }
  ul li a {
    padding:8px 4px 0 4px !important;
  }
}
@media only screen and (max-width: 600px){
  nav{
    padding: 10px;
  }
}
</style>