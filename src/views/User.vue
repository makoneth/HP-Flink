<template>
  <div class="user">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-row>
      <b-col cols='12' class="user__main mb-5">
        <div class="background" :style="{ 'background-image': 'url('+ img + ')' }"></div>
        <b-avatar variant="info" :src="user.image"></b-avatar>
        <h2 class="text-center mt-4">{{ user.name }} <small>({{user.house}})</small></h2>
      </b-col>

      <b-col sm='12' md='4'>
        <b-card no-body style="max-width: 100%;" img-alt="Image" img-top>
          <template #header>
            <h5 class="mb-0">Details</h5>
          </template>

          <b-list-group flush>
            <b-list-group-item>Date of Birth: {{ user.dateOfBirth.length != '' ? user.dateOfBirth : '???' }}
            </b-list-group-item>
            <b-list-group-item>
              Wand:
              <ul>
                <li>Wood: {{ user.wand.wood.length != '' ? user.wand.wood : '???' }} </li>
                <li>Core: {{ user.wand.core.length != '' ? user.wand.core : '???' }} </li>
                <li>Length: {{ user.wand.length.length != '' ? user.wand.length : '???' }}</li>
              </ul>
            </b-list-group-item>
            <b-list-group-item>Patronus: {{ user.patronus.length != '' ? user.patronus : '???' }}</b-list-group-item>
            <b-list-group-item>Ancestry: {{ user.ancestry.length != '' ? user.ancestry : '???' }}</b-list-group-item>
            <b-list-group-item>Alive: {{ user.alive }}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col sm='12' md='8' class="mob-mt-20">
        <b-card title="Harry Potter" img-src="https://fotografias.antena3.com/clipping/cmsimages01/2017/03/17/6B319AC0-5E29-46AD-9404-A11D01FE6C02/69.jpg" img-alt="Image" img-top
          tag="article" style="max-width: 100%;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-row>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="heart" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="chat-square-text" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="box-arrow-up" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-card title="Ron Weasley" img-src="https://fastly.syfy.com/sites/syfy/files/2018/02/harry_potter_order_phoenix_ron_hero_01.jpg" img-alt="Image" img-top
          tag="article" style="max-width: 100%;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-row>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="heart" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="chat-square-text" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="box-arrow-up" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-card title="Hermione Granger" img-src="https://i.insider.com/5bf2f26148eb122a644fd972?width=1100&format=jpeg&auto=webp" img-alt="Image" img-top
          tag="article" style="max-width: 100%;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-row>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="heart" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="chat-square-text" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button href="#" variant="link">
                <b-icon icon="box-arrow-up" aria-hidden="true"></b-icon>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'User',
    components: {
      // Login
    },
    data() {
      return {
        ID: this.$route.params.id || null,
        user: '',
        img: ''
      }
    },
    computed: {
      ...mapState(['getUsersList']),
    },
    created() {
      this.user = this.$store.getters.getUsersList.find(el => el.name === this.ID);
      this.img = '../assets/' + this.user.house + '.jpg'
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    width: 100%;
    height: auto;
  }

  .background {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .user__main {
    position: relative;
    height: 365px;

    .b-avatar {
      position: absolute;
      bottom: 50px;
      left: auto;
      right: 42%;
      width: 10rem;
      height: 10rem;

      @media (max-width: 767px) {
        right: 33%;
      }

      @media (max-width: 450px) {
        right: 25%;
      }

      @media (max-width: 375px) {
        right: 22%;
      }
    }
  }

  ul {
    margin: 0;
    margin-top: 5px;
    padding-left: 18px;
  }

  .mob-mt-20 {
    @media (max-width: 767px) {
      margin-top: 20px;
    } 
  }
</style>