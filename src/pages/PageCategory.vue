<template>
  <div v-if="category" class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
    import CategoryListItem from '@/components/CategoryListItem'
    export default {
      components: {
        CategoryListItem
      },

      props: {
        id: {
          required: true,
          type: String
        }
      },

      computed: {
        category () {
          return this.$store.state.categories[this.id]
        }
      },

      created () {
        this.$store.dispatch('fetchCategory', {id: this.id})
          .then(category => {
            this.$store.dispatch('fetchForums', {ids: category.forums})
          })
      }
    }
</script>

<style scoped>

</style>
