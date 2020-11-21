<template>
  <div class="home">
    <h1 class="name">Honey Chat</h1>
    <div class="tagline">
      <span><img class="bee-locator" src="../assets/beelocator.png"></span>
        Where my bees at??
      <span><img class="bee-locator" src="../assets/beelocator.png"></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HOme',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.name {
  font-family: 'Nerko One', cursive;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bee-locator {
  width: 50px;
  margin: 0 10px;
}

.tagline {
  font-size: 1.6em;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
