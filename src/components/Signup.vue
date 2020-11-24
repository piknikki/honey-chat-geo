<template>
  <div class="signup">
    <h3>Sign up for Honey Chat</h3>
    <div class="container">
      <form @submit.prevent="signUp" class="left-align">
        <label for="name">
          Name
        </label>
        <input type="text" id="name">

        <label for="email">
          Email
        </label>
        <input type="email" id="email">

        <label for="password">
          Password
        </label>
        <input type="password" id="password">

        <button class="btn waves-effect waves-light">Submit</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      name: null,
      email: null,
      password: null
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

form {
  padding-top: 20px;
}

button {
  margin-top: 20px;
}

</style>
