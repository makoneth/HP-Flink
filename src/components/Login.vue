<template>
  <b-card>
    <figure>
      <img src="@/assets/login.png">
    </figure>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" :state="formError" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" :state="formError" v-model="form.password" type="password" placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-form-invalid-feedback :state="formError" class="mb-3">
        Your user or password are incorrect
      </b-form-invalid-feedback>

      <b-button type="submit" block variant="primary" :disabled='isLoading'>
        <span v-if="!isLoading">Sign in</span>
        <div v-else>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </div>
      </b-button>
    </b-form>     
  </b-card>
</template>

<script>
  import axios from 'axios';
  import { mapMutations } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        api: 'https://cors-anywhere.herokuapp.com/http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',
        form: {
          email: 'snape@hogwarts.com',
          password: 'snape0109',
        },
        isLoading: false,
        formError: null,
      }
    },
    methods: {
      ...mapMutations(['setUser', 'setLoginStatus']),
      onSubmit(event) {
        event.preventDefault()
        this.getLogin();
      },
      getLogin() {
        this.isLoading = true;
        this.formError = null;
        axios.post(this.api, {
          user: this.form.email,
          password: this.form.password
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
        .then( response => {
          console.log(response)
          this.setUser({value: response.data});
          this.setLoginStatus({value: true});
          this.$router.push({ path: '/dashboard' })
        })
        .catch( error => {
          console.log(error);
          this.formError = false;
          this.isLoading = false;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .card-body {
    position: relative;
  }

  figure {
    position: absolute;
    top: -50px;
    left: 26%;
    width: 155px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
