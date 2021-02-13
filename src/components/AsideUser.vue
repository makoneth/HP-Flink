<template>
  <div>
    <div class="user">
      <b-avatar variant="warning" :src="image"></b-avatar>
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
    image: {
      type: String,
      default: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f83306c-9659-420d-885e-b827164fedba/d8k5f0w-e9af3bef-e695-424c-9c00-b5ea1d538a70.jpg/v1/fill/w_800,h_800,q_75,strp/avatar_of_harry_potter__by_pollyaug00_d8k5f0w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDAiLCJwYXRoIjoiXC9mXC83ZjgzMzA2Yy05NjU5LTQyMGQtODg1ZS1iODI3MTY0ZmVkYmFcL2Q4azVmMHctZTlhZjNiZWYtZTY5NS00MjRjLTljMDAtYjVlYTFkNTM4YTcwLmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wARqUt2oTvciD-QZt6KAu_gCzBZd8myj1zXw5B60D_Y'
    }
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