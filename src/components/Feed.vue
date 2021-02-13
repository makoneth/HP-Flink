<template>
  <b-col sm='12' md='8' class="mob-mt-20">
    <b-card title="Harry Potter"
      img-src="https://fotografias.antena3.com/clipping/cmsimages01/2017/03/17/6B319AC0-5E29-46AD-9404-A11D01FE6C02/69.jpg"
      img-alt="Image" img-top tag="article" style="max-width: 100%;" class="mb-2">
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
    <b-card title="Ron Weasley"
      img-src="https://fastly.syfy.com/sites/syfy/files/2018/02/harry_potter_order_phoenix_ron_hero_01.jpg"
      img-alt="Image" img-top tag="article" style="max-width: 100%;" class="mb-2">
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
    <b-card title="Hermione Granger"
      img-src="https://i.insider.com/5bf2f26148eb122a644fd972?width=1100&format=jpeg&auto=webp" img-alt="Image" img-top
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
</template>

<script>
export default {
  name: 'Feed'
}
</script>

<style lang="scss">
  .row {
    width: 100%;
    height: auto;
    margin: 0; 
  }
  .mob-mt-20 {
    @media (max-width: 767px) {
      margin-top: 20px;
    } 
  }  
</style>