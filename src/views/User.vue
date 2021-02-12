<template>
  <div class="user">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-row align-v="center">
      <b-col align-self="center">
        <h1>User page {{ ID }}</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {
    // Login
  },
  data() {
    return {
      ID: this.$route.params.id || null
    }
  },
  computed:{
    ...mapState(['getUsersList']),
  },
  created() {
    let user = this.$store.getters.getUsersList.find(el => el.name === this.ID);
    console.log(user)
  }
}
</script>

<style lang="scss">

</style>