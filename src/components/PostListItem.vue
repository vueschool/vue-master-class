<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>

      <p class="desktop-only text-small">{{userPostsCount}} posts</p>
    </div>

    <div class="post-content">
      <div>
        {{post.text}}
      </div>
    </div>

    <div
      class="post-date text-faded"
      :title="post.publishedAt | humanFriendlyDate"
    >
      {{post.publishedAt | diffForHumans}}
    </div>
  </div>
</template>

<script>
    import sourceData from '@/data'
    import moment from 'moment'
    export default {
      props: {
        post: {
          required: true,
          type: Object
        }
      },

      computed: {
        user () {
          return sourceData.users[this.post.userId]
        },

        userPostsCount () {
          return Object.keys(this.user.posts).length
        }
      },

      filters: {
        humanFriendlyDate (date) {
          return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
        },

        diffForHumans (date) {
          return moment.unix(date).fromNow()
        }
      }
    }
</script>

<style scoped>

</style>
