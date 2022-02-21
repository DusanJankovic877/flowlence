import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import PriceList from '../views/PriceList.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import CreatePostComponent from '../components/admin/CreatePostComponent.vue'
import PostsComponent from '../components/admin/PostsComponent'
import PostComponent from '../components/admin/PostComponent'
import EditPost from '../components/admin/EditPost'
import store from '../store'




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
    path: '/blog/:id',
    name: 'post',
    component: PostComponent
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
  {
    path: '/jolanda/create-post',
    name: 'admin-c-post',
    component: CreatePostComponent,
    beforeEnter(from, to, next){
      if(!store.getters['AdminModule/isLogged']){
        return next('/jolanda')
      }
      next();
    }
  },  
  {
    path: '/jolanda/posts',
    name: 'admin-posts',
    component: PostsComponent,
    beforeEnter(from, to, next){
      if(!store.getters['AdminModule/isLogged']){
        return next('/jolanda')
      }
      next();
    }
    
  },
  {
    path: '/jolanda/posts/:id',
    name: 'admin-post',
    component: PostComponent,
    beforeEnter(from, to, next){
      if(!store.getters['AdminModule/isLogged']){
        return next('/jolanda')
      }
      next();
    }
    
  },
  {
    path: '/jolanda/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
    beforeEnter(from, to, next){
      if(!store.getters['AdminModule/isLogged']){
        return next('/jolanda')
      }
      next();
    }
    
  },


]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  window.scrollTo({top: 0, left: 0, behavior:'smooth'})
  next();
})
export default router
