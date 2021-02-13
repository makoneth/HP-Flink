<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/dashboard">
      <img src="@/assets/logo.png" alt="Gryffinbook">
      Gryffinbook
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Menu" right>
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