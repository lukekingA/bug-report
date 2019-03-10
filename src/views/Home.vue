<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col mb-4">
        <h1>Bug Report</h1>
      </div>
    </div>
    <div class="row">
      <div class="col col-sm-10 offset-sm-1">
        <bugs></bugs>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <bug-form></bug-form>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Bugs from '@/components/Bugs.vue'
  import BugForm from '@/components/BugForm.vue'

  export default {
    name: 'home',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      Bugs,
      BugForm
    }
  }
</script>