<template>
  <div class="dashboard">
    <Header />
    <div class="wrapper">
      <nav id="sidebar">
        <b-container fluid class="pt-5">
          <AsideUser 
            :name='currentUser.name' 
            :banner='currentUser.house'
            :image='image.image'>
          </AsideUser>
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
  import AsideUser from '@/components/AsideUser.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: "AppLayoutPanel",
    components: {
      Header,
      AsideUser,
    },
    data() {
      return {
        currentUser: this.$store.getters.getUserInfo || null,
        image: '',
      }
    },
    created() {
      this.image = this.$store.getters.getUsersList.find(el => el.name === this.$store.getters.getUserInfo.name);
    },
    computed: {
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
    background: #345995;
    color: #fff;

    @media (max-width: 768px) {
      display: none;
    }
  }

  #content {
    width: 80%;
    min-height: 100vh;
    max-height: 100vh;
    position: absolute;
    overflow: scroll;
    right: 0;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
</style>