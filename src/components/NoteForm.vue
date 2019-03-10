<template>
  <div class="noteForm">
    <div class="row">
      <div class="col col-sm-6 offset-sm-3 mt-3">
        <form class="d-flex flex-column" @submit.prevent="addComment">
          <input class="pl-1" type="text" v-model="note.creator" placeholder="your name">
          <input class="pl-1" type="text" v-model="note.content" placeholder="add note">
          <button class="btn btn-sm bg-dark text-light mt-2" type="submit" v-on:click="$emit('colapseCommentForm')">Add
            Comment</button>
        </form>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'noteForm',
    data() {
      return {
        note: {

        }
      }
    },
    props: ['bug'],
    computed: {

    },
    methods: {
      addComment() {
        let data = {
          content: this.note.content,
          creator: this.note.creator,
          bug: this.bug,
          user: this.bug._id,
          flagged: 'pending'
        }
        this.$store.dispatch('addComment', data)
        this.note = {}
      },
    },
    components: {}
  }
</script>


<style scoped>

</style>