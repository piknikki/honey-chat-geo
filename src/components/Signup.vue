<template>
  <div class="signup">
    <h3>Sign up for Honey Chat</h3>
    <div class="container">
      <form @submit.prevent="signUp" class="card-panel left-align">
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
        <div class="field">
          <label for="alias">
            Alias
          </label>
          <input type="text" id="alias" v-model="alias">
          <p class="red-text center" v-if="feedback">{{ feedback }}</p>
        </div>
        <div class="field">
          <button class="btn waves-effect waves-light amber accent-4">Sign me up!</button>
        </div>

      </form>
    </div>

  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      alias: null,
      email: null,
      password: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signUp() {
      if (this.alias && this.password && this.email) {
        // slugify the alias
        // check if it exists on firebase -- already taken?
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This alias already exists, please use a different one.'
          } else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .catch(err => {
              console.log(err)
              this.feedback = err.message
            })
            this.feedback = 'yay that works!!'
          }
        })
      } else {
        this.feedback = 'You must complete all fields.'
      }
    }
  }
}
</script>

<style scoped>
.signup {
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
