<template>
  <div v-if="forum" class="col-full push-top">

    <h1>Create new thread in <i>{{forum.name}}</i></h1>

    <ThreadEditor
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script>
    import ThreadEditor from '@/components/ThreadEditor'
    export default {
      components: {
        ThreadEditor
      },

      props: {
        forumId: {
          type: String,
          required: true
        }
      },

      computed: {
        forum () {
          return this.$store.state.forums[this.forumId]
        }
      },

      methods: {
        save ({title, text}) {
          this.$store.dispatch('createThread', {
            forumId: this.forum['.key'],
            title,
            text
          }).then(thread => {
            this.$router.push({name: 'ThreadShow', params: {id: thread['.key']}})
          })
        },

        cancel () {
          this.$router.push({name: 'Forum', params: {id: this.forum['.key']}})
        }
      },

      created () {
        this.$store.dispatch('fetchForum', {id: this.forumId})
      }
    }
</script>

<style scoped>

</style>
