<template>
  <div class="forum-list">

    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">
        {{ category.name }}
      </router-link>
    </h2>

    <ForumList :forums="categoryForums"/>
  </div>
</template>

<script>
    import ForumList from './ForumList'

    export default {
      components: {
        ForumList
      },

      props: {
        category: {
          required: true,
          type: Object
        }
      },

      computed: {
        categoryForums () {
          return Object.values(this.$store.state.forums.items)
            .filter(forum => forum.categoryId === this.category['.key'])
        }
      }
    }
</script>

<style scoped>

</style>
