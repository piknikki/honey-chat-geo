<template>
  <div class="login">
    <h3>Log into Honey Chat</h3>
    <div class="container">
      <form @submit.prevent="logIn" class="card-panel left-align">
        <div class="field">
          <label for="email">
            Email
          </label>
          <input type="email" id="email" v-model="email">
        </div>

        <div class="field">
          <label for="alias">
            Alias
          </label>
          <input type="text" id="alias" v-model="alias">
        </div>

        <div class="field">
          <label for="password">
            Password
          </label>
          <input type="password" id="password" v-model="password">
        </div>

        <div class="field">
          <button class="btn waves-effect waves-light amber accent-4">Log me in!</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      alias: null,
      email: null,
      password: null
    }
  },
  methods: {
    logIn() {
      console.log('button is working')
    }
  }
}
</script>

<style scoped>
.login {
  width: 50%;
  padding-top: 20px;
  margin: 0 auto;
}

.container {
  padding: 10px 0;
}

form {
  padding-top: 20px;
}

button {
  margin-top: 20px;
}

</style>
