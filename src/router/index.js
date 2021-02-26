import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Setting from '../views/Setting.vue'
import Friend from '../views/Friend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
