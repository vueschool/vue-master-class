<template>
  <div class="col-3 push-top">
    <div class="profile-card">

      <p class="text-center">
        <img :src="user.avatar" alt="" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input
          v-model.lazy="activeUser.username"
          @blur="$v.activeUser.username.$touch()"
          type="text" placeholder="Username" class="form-input text-lead text-bold"
        >
        <template v-if="$v.activeUser.username.$error">
          <span v-if="!$v.activeUser.username.required" class="form-error">This field is required</span>
          <span v-if="!$v.activeUser.username.unique" class="form-error">Sorry! This username is taken</span>
        </template>
      </div>

      <div class="form-group">
        <input
          v-model="activeUser.name"
          @blur="$v.activeUser.name.$touch()"
          type="text" placeholder="Full Name" class="form-input text-lead"
        >
        <template v-if="$v.activeUser.name.$error">
          <span v-if="!$v.activeUser.name.required" class="form-error">The name field is required</span>
        </template>
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea v-model="activeUser.bio" class="form-input" id="user_bio" placeholder="Write a few words about yourself."></textarea>
      </div>

      <div class="stats">
        <span>{{userPostsCount}} posts</span>
        <span>{{userThreadsCount}} threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input v-model="activeUser.website" autocomplete="off" class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input
          v-model.lazy="activeUser.email"
          @blur="$v.activeUser.email.$touch()"
          autocomplete="off" class="form-input" id="user_email"
        >
        <template v-if="$v.activeUser.email.$error">
          <span v-if="!$v.activeUser.email.required" class="form-error">This field is required</span>
          <span v-else-if="!$v.activeUser.email.email" class="form-error">This in not a valid email address</span>
          <span v-else-if="!$v.activeUser.email.unique" class="form-error">Sorry! This email is taken</span>
        </template>
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input v-model="activeUser.location" autocomplete="off" class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button @click.prevent="cancel" class="btn-ghost">Cancel</button>
        <button @click.prevent="save" type="submit" class="btn-blue">Save</button>
      </div>
    </div>

    <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
  </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'
    import { uniqueUsername, uniqueEmail } from '@/utils/validators'
    export default {
      props: {
        user: {
          required: true,
          type: Object
        }
      },

      data () {
        return {
          activeUser: {...this.user}
        }
      },

      computed: {
        userThreadsCount () {
          return this.$store.getters['users/userThreadsCount'](this.user['.key'])
        },

        userPostsCount () {
          return this.$store.getters['users/userPostsCount'](this.user['.key'])
        }
      },

      validations: {
        activeUser: {
          name: {
            required
          },
          username: {
            required,
            unique (value) {
              if (value.toLowerCase() === this.user.usernameLower) {
                return true
              }
              return uniqueUsername(value)
            }
          },
          email: {
            required,
            email,
            unique (value) {
              if (value.toLowerCase() === this.user.email) {
                return true
              }
              return uniqueEmail(value)
            }
          }
        }
      },

      methods: {
        save () {
          this.$v.activeUser.$touch()
          if (!this.$v.activeUser.$invalid) {
            this.$store.dispatch('users/updateUser', {...this.activeUser})
            this.$router.push({name: 'Profile'})
          }
        },

        cancel () {
          this.$router.push({name: 'Profile'})
        }
      }
    }
</script>

<style scoped>

</style>
