<template>
  <div class="flex-grid">
    <div class="col-3 push-top">

      <div class="profile-card">

        <p class="text-center">
          <img :src="user.avatar" alt="" class="avatar-xlarge">
        </p>

        <h1 class="title">{{user.username}}</h1>

        <p class="text-lead">{{user.name}}</p>

        <p class="text-justify">
          <span v-if="user.bio">{{user.bio}}</span>
          <span v-else>No bio specified.</span>
        </p>

        <span class="online">{{user.username}} is online</span>


        <div class="stats">
          <span>{{userPostsCount}} posts</span>
          <span>{{userThreadsCount}} threads</span>
        </div>

        <hr>

        <p v-if="user.website" class="text-large text-center"><i class="fa fa-globe"></i> <a :href="user.website">{{user.website}}</a></p>

      </div>

      <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

      <div class="text-center">
        <hr>
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>

    </div>

    <div class="col-7 push-top">

      <div class="profile-header">
        <span class="text-lead">
            Joker's recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>
      <PostList :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
    import PostList from '@/components/PostList'
    import {mapGetters} from 'vuex'
    export default {
      components: {
        PostList
      },

      computed: {
        ...mapGetters({
          user: 'authUser'
        }),

        userThreadsCount () {
          return this.user.threads
            ? Object.keys(this.user.threads).length
            : 0
        },

        userPostsCount () {
          return this.user.posts
            ? Object.keys(this.user.posts).length
            : 0
        },

        userPosts () {
          if (this.user.posts) {
            return Object.values(this.$store.state.posts)
              .filter(post => post.userId === this.user['.key'])
          }
          return []
        }
      }
    }
</script>

<style scoped>

</style>
