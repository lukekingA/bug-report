<template>
  <div class="bugform">
    <button @click="showForm" class="btn btn-danger btn-sm my-3">New Bug</button>
    <form class="input-group d-flex justify-content-center" v-if="form" @submit.prevent="formSubmit">
      <input class="pl-1 rounded-left" type="text" v-model="bugReport.title" placeholder="title">
      <input class="pl-1 " type="text" v-model="bugReport.creator" placeholder="your name">
      <input class="pl-1 " type="text" v-model="bugReport.description" placeholder="description">
      <div class="input-group-append"><button class="btn btn-dark text-light btn-sm" type="submit">Report</button></div>
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