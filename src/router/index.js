import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUS from '../views/AboutUs.vue'
import PokemonesView from "../views/PokemonesView.vue";

const routes = [
  {
    path: '/',
    name: 'pokemones',
    component: PokemonesView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  

  {
    path: '/sobre-nosotros',
    name: 'nosotros',
    component: AboutUS
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
