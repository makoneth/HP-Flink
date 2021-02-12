<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-row align-v="center">
      <b-col align-self="center">
        <Login class="mx-auto" style="max-width: 20rem;"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style lang="scss">
  .home {
    overflow: hidden;
  }

  .row {
    height: 100vh;
  }
</style>