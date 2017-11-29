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
          const postId = 'greatPost' + Math.random()
          const post = {
            text: this.text,
            publishedAt: Math.floor(Date.now() / 1000),
            threadId: this.threadId,
            userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
            '.key': postId
          }
          this.text = ''

          this.$emit('save', {post})
        }
      }
    }
</script>

<style scoped>

</style>
