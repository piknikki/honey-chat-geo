<template>
  <div class="map">
<!--    <div class="google-map" id="map">-->
<!--    </div>-->
    <h1 class="name">Honey Chat</h1>
    <div class="tagline">
     <img class="bee-locator" src="../assets/beelocator.png">
     <span class="valign-center"><h4>Where my bees at??</h4></span>
      <img class="bee-locator" src="../assets/beelocator.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'GMap',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.bee-locator {
  width: 50px;
}

h4 {
  display: inline;
}

</style>
