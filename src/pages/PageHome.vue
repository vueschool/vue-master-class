<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import CategoryList from '@/components/CategoryList'
console.log(sourceData)

export default {
  components: {
    CategoryList
  },

  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  }
}
</script>
