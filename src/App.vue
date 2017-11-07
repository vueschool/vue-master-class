<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "assets/css/style.css";
</style>
