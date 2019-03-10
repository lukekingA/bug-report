<template>
  <div class="bugform">
    <button @click="showForm" class="btn btn-danger btn-sm my-4">New Bug</button>
    <form class="input-group d-flex justify-content-center mb-4" v-if="form" @submit.prevent="formSubmit">
      <input class="pl-1 rounded" type="text" v-model="bugReport.title" placeholder="title">
      <input class="pl-1 rounded" type="text" v-model="bugReport.creator" placeholder="your name">
      <input class="pl-1 rounded" type="text" v-model="bugReport.description" placeholder="description">
      <button class="btn btn-dark text-light btn-sm mt-1" type="submit">Report</button>
    </form>

  </div>
</template>


<script>
  export default {
    name: 'bugform',
    data() {
      return {
        bugReport: {},
        form: false
      }
    },
    computed: {},
    methods: {
      formSubmit(data) {
        this.$store.dispatch('formSubmit', this.bugReport)
      },
      showForm() {
        this.form = !this.form
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>