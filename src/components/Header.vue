<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/dashboard">
      <img src="@/assets/logo.png" alt="Gryffinbook">
      Gryffinbook
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="menu" right>
          <b-dropdown-item @click="logout">logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Dashboard',
    methods: {
      logout() {
        localStorage.removeItem("vuex");
        this.$router.push({
          path: '/'
        })
      }
    },
  }
</script>

<style lang="scss">
  .navbar-brand {
    display: flex;
    align-items: center;
    img {
      width: 25px;
      margin-right: 15px;
    }  
  }
</style>