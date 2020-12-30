import Vue from 'vue'
import Router from 'vue-router'
import GMap from '../components/GMap'
import Profile from '../components/Profile'
import Signup from '../components/Signup'
import Login from '../components/Login'
import firebase from "firebase";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/:slug',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// route guards
router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, go to route
      next()
    } else {
      // no user singed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
