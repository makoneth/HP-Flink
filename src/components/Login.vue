<template>
  <b-container>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Login',
    data() {
      return {
        api: 'http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',
        form: {
          email: 'snape@hogwarts.com',
          password: 'snape0109',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
        this.getLogin();
      },
      getLogin() {
        axios.post(this.api, {
          user: this.form.email,
          password: this.form.password
        })
        .then( response => {
          console.log(response)
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
