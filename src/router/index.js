import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/Notfound.vue'
import AddBook from '../views/Addbook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Addbook.vue')
  },
  {
    path: '/edit-book/:id',
    name: 'edit-book',
    component: AddBook
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
