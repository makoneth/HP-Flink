<template>
  <div>
    <div class="user">
      <b-avatar></b-avatar>
      <strong>{{name}}</strong>
    </div>
    <figure>
      <img :src="'/assets/'+banner+'-banner.png'" alt="House Banner">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'AsideUser',
  props: {
    name: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
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

  figure {
    text-align: center;
    margin: 0;
    margin-top: 10px;
  }
</style>