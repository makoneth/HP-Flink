<template>
  <div class="login">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "AppLayoutLogin"
  }
</script>

<style lang="scss">
  .login {
    background-image: url(../assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }  
</style>