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
          <label for="password">
            Password
          </label>
          <input type="password" id="password" v-model="password">
        </div>

        <p class="red-text center" v-if="feedback" >{{ feedback }}</p>
        <div class="field">
          <button class="btn waves-effect waves-light amber accent-4">Log me in!</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import db from '../firebase/init'
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    logIn() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // console.log(cred.user)
          this.$router.push({ path: '/' })
        })
        .catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
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
