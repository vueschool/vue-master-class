<template>
  <div v-if="asyncDataStatus_ready" class="col-large push-top">
    <h1>{{thread.title}}

      <router-link
        :to="{name: 'ThreadEdit', id: this.id}"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">{{repliesCount}} replies by {{contributorsCount}} contributors</span>
    </p>
    <PostList :posts="posts"/>
    <PostEditor
      v-if="authUser"
      :threadId="id"
    />
    <div v-else class="text-center" style="margin-bottom: 50px;">
      <router-link :to="{name: 'SignIn', query: {redirectTo: $route.path}}">Sign in</router-link> or
      <router-link :to="{name: 'Register', query: {redirectTo: $route.path}}">Register</router-link> to post a reply.
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'
  import {countObjectProperties} from '@/utils'
  import asyncDataStatus from '@/mixins/asyncDataStatus'

  export default {
    components: {
      PostList,
      PostEditor
    },

    mixins: [asyncDataStatus],

    props: {
      id: {
        required: true,
        type: String
      }
    },

    computed: {
      ...mapGetters({
        authUser: 'auth/authUser'
      }),

      thread () {
        return this.$store.state.threads.items[this.id]
      },

      repliesCount () {
        return this.$store.getters['threads/threadRepliesCount'](this.thread['.key'])
      },

      user () {
        return this.$store.state.users.items[this.thread.userId]
      },

      contributorsCount () {
        return countObjectProperties(this.thread.contributors)
      },

      posts () {
        const postIds = Object.values(this.thread.posts)
        return Object.values(this.$store.state.posts.items)
          .filter(post => postIds.includes(post['.key']))
      }
    },

    methods: {
      ...mapActions('threads', ['fetchThread']),
      ...mapActions('users', ['fetchUser']),
      ...mapActions('posts', ['fetchPosts'])
    },

    created () {
      // fetch thread
      this.fetchThread({id: this.id})
        .then(thread => {
          // fetch user
          this.fetchUser({id: thread.userId})
          return this.fetchPosts({ids: Object.keys(thread.posts)})
        })
        .then(posts => {
          return Promise.all(posts.map(post => {
            this.fetchUser({id: post.userId})
          }))
        })
        .then(() => { this.asyncDataStatus_fetched() })
    }
  }
</script>
