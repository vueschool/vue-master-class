<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import ThreadList from '@/components/ThreadList'
console.log(sourceData)

export default {
  components: {
    ThreadList
  },

  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
