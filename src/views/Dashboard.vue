<template>
  <div class="dashboard">
    <Header />
    <div class="wrapper">
      <nav id="sidebar">
        <b-container fluid class="pt-5">
          <div class="user">
            <b-avatar></b-avatar>
            <strong>{{currentUser.name}}</strong>
          </div>
        </b-container>
    </nav>

    <div id="content">
      <b-container>
        <Table class="mt-5" :api="api"></Table>
      </b-container>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Table,
    Header
  },
  data() {
    return {
      api: 'http://hp-api.herokuapp.com/api/characters',
      currentUser: this.$store.getters.getUserInfo || null
    }
  },
  computed:{
    ...mapState(['getUserInfo']),
  },
}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    position: relative;
  }

  #sidebar {
    width: 20%;
    /* position: fixed; */
    top: 55px;
    left: 0;
    height: 100vh;
    /* z-index: 999; */
    background: #7386D5;
    color: #fff;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;

    .b-avatar {
      width: 6rem;
      height: 6rem;
    }

    strong {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  #content {
    width: 80%;
    min-height: 100vh;
    max-height: 100vh;
    position: absolute;
    overflow: scroll;
    right: 0;
  }
</style>