<template>
  <div class="navbar">
    <nav class="white">
      <div class="container">
        <span class="left">
           <img class="logo left" src="../assets/logo.png">
        <router-link :to="{ name: 'GMap' }"  class="brand-logo name amber-text text-darken-3">
          Honey Chat
        </router-link>

        </span>
        <ul class="right nav-links">
          <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li v-if="user" class="greet">Hey, Bee!</li>
          <li v-if="user"><a @click="logOut">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  },
  created() {
    // check for updates to auth
    firebase.auth().onAuthStateChanged((cred) => {
      if (cred) {
        // console.log(cred)
        this.user = cred
      } else {
        this.user = null // reset to null after logging out
      }
    })
  }
}
</script>

<style>
nav {
  height: 100px;
  padding-top: 20px;
}

nav .brand-logo {
  font-size: 3em;
}

.greet {
  color: #5d5d5d;
  font-size: 1.2em;
  padding: 0 15px;
}

.name {
  font-family: 'Nerko One', cursive;
}

.logo {
  height: 50px;
  padding: 5px 10px 0;
}

nav ul a {
  color: #5d5d5d;
  font-size: 1.2em;
}

</style>

<!--<h1 class="name">Honey Chat</h1>-->
<!--<div class="tagline">-->
<!--<span><img class="bee-locator" src="../assets/beelocator.png"></span>-->
<!--Where my bees at??-->
<!--<span><img class="bee-locator" src="../assets/beelocator.png"></span>-->
<!--</div>-->

