<template>
  <div class="bugEdit">
    <div class="row">
      <div class="col col-sm-6 offset-sm-3 mt-3">
        <form class="d-flex flex-column" @submit.prevent="editBug">
          <input class="pl-1" type="text" v-model="bugDescription" placeholder="description">

          <button class="btn btn-sm bg-dark text-light mt-2" type="submit" v-on:click="$emit('colapseForm')">Submit
            Edit</button>
        </form>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'bugEdit',
    data() {
      return {
        bugDescription: ''
      }
    },
    props: ['bug'],
    computed: {},
    methods: {
      editBug() {
        let data = {
          bugId: this.bug._id,
          description: {
            description: this.bugDescription
          }
        }
        this.$store.dispatch('editBug', data)
        this.bugDescription = ''
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>