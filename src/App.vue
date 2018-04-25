<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view v-show="showPage" @ready="showPage = true"/>
      <div v-show="!showPage">loading...</div>
    </div>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  export default {
    components: {
      TheNavbar
    },

    data () {
      return {
        showPage: false
      }
    },

    created () {
      this.$router.beforeEach((to, from, next) => {
        this.showPage = false
        next()
      })
    }
  }
</script>

<style>
@import "assets/css/style.css";
</style>
