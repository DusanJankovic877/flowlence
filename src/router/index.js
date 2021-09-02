import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import PriceList from '../views/PriceList.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Entrepreneur from '../views/Entrepreneur.vue'
import Doo from '../views/Doo.vue'
import Association from '../views/Association.vue'


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
  {
    path: '/price-list',
    name: 'price-list',
    component: PriceList
  },
  {
    path: '/price-list/entrepreneur',
    name: 'price-list',
    component: Entrepreneur
  },
  {
    path: '/price-list/doo',
    name: 'price-list',
    component: Doo
  },
  {
    path: '/price-list/association',
    name: 'price-list',
    component: Association
  },
  
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
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
