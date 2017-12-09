<template>
  <div class="forum-list">

    <h2 class="list-title">
      <a href="#">Forums</a>
    </h2>

    <ForumListItem
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.key']"
    />
  </div>
</template>

<script>
    import ForumListItem from './ForumListItem'
    export default {
      components: {
        ForumListItem
      },

      props: {
        forums: {
          required: true,
          type: Array
        }
      }
    }
</script>

<style scoped>

</style>
