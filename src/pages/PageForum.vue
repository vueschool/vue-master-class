<template>
  <div v-if="asyncDataStatus_ready" class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <router-link
          :to="{name: 'ThreadCreate', params: {forumId: this.forum['.key']}}"
          class="btn-green btn-small"
        >
          Start a thread
        </router-link>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads"/>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import ThreadList from '@/components/ThreadList'
    import asyncDataStatus from '@/mixins/asyncDataStatus'

    export default {
      components: {
        ThreadList
      },

      mixins: [asyncDataStatus],

      props: {
        id: {
          required: true,
          type: String
        }
      },

      computed: {
        forum () {
          return this.$store.state.forums.items[this.id]
        },

        threads () {
          return Object.values(this.$store.state.threads.items)
            .filter(thread => thread.forumId === this.id)
        }
      },

      methods: {
        ...mapActions('forums', ['fetchForum']),
        ...mapActions('threads', ['fetchThreads']),
        ...mapActions('users', ['fetchUser'])
      },

      created () {
        this.fetchForum({id: this.id})
          .then(forum => this.fetchThreads({ids: forum.threads}))
          .then(threads => Promise.all(threads.map(thread => this.fetchUser({id: thread.userId}))))
          .then(() => { this.asyncDataStatus_fetched() })
      }
    }
</script>

<style scoped>
  .forum-wrapper {
    width: 100%;
  }
</style>
