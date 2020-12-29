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
import firebase from 'firebase'

export default {
  name: 'GMap',
  data () {
    return {
      lat: 53,
      lng: -2
    }
  },
  // methods: {
  //   renderMap() {
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: this.lat, lng: this.lng},
  //       zoom: 6,
  //       maxZoom: 15,
  //       minZoom: 3,
  //       streetViewControl: false
  //     })
  //   }
  // },
  mounted() {
    // this.renderMap()
    console.log(firebase.auth().currentUser)
  }
}
</script>

<style scoped>
/*.google-map {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  margin: 0 auto;*/
/*  background: #fff;*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  z-index: -1;*/
/*}*/

.bee-locator {
  width: 50px;
}

h4 {
  display: inline;
}

</style>
