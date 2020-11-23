<template>
  <div class="navbar">
    <nav class="transparent">
      <div class="container">
        <span class="left">
           <img class="logo left" src="../assets/logo.png">
        <a href="" class="brand-logo name amber-text text-darken-3">
          Honey Chat
        </a>
        </span>

        <ul class="right nav-links">
          <li><a href="">Signup</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<style>
nav .brand-logo {
  font-size: 3em;
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

