import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import PriceList from '../views/PriceList.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },

{
  path: '/services',
  name: 'services',
  component: Services
},
//PRICE LIST
  {
    path: '/price-list',
    name: 'price-list',
    component: PriceList
  },
//END OF PRICE LIST
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact

  },
  {
    path: '/jolanda',
    name: 'jolanda',
    component: Admin

  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
