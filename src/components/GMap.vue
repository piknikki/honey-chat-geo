<template>
  <div class="map">
    <div class="tagline">
      <span><img class="bee-locator" src="../assets/beelocator.png"></span>
      Where my bees at??
      <span><img class="bee-locator" src="../assets/beelocator.png"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GMap'
}
</script>

<style scoped>
.bee-locator {
  width: 50px;
  margin: 0 10px;
}

.tagline {
  padding-top: 10px;
  font-size: 1.6em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
}

</style>
