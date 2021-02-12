<template>
  <b-card>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" block variant="primary">Sign in</b-button>
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
        show: true
      }
    },
    methods: {
      ...mapMutations(['setUser', 'setLoginStatus']),
      onSubmit(event) {
        event.preventDefault()
        this.getLogin();
      },
      getLogin() {
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
          // this.formError = true;
          console.log(error)
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  
</style>
