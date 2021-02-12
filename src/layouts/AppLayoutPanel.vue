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
        <slot />
      </b-container>
    </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'
export default {
  name: "AppLayoutPanel",
  components: {
    Header
  },
  data() {
    return {
      api: 'https://hp-api.herokuapp.com/api/characters',
      currentUser: this.$store.getters.getUserInfo || null
    }
  },
  computed:{
    ...mapState(['getUserInfo']),
  },
}
</script>

<style lang="scss" scoped>
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
      width: 7rem;
      height: 7rem;
    }

    strong {
      font-size: 1.3rem;
      margin-top: 0.7rem;
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