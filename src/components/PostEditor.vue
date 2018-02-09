<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="text"
        ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
    export default {
      props: {
        threadId: {
          required: true
        }
      },

      data () {
        return {
          text: ''
        }
      },

      methods: {
        save () {
          const post = {
            text: this.text,
            threadId: this.threadId
          }
          this.text = ''

          this.$emit('save', {post})
          this.$store.dispatch('createPost', post)
        }
      }
    }
</script>

<style scoped>

</style>
