<template>
  <div class="notes">
    <div class="row">
      <div class="col col-sm-6 offset-sm-3 mt-3">
        <h5 class="">Notes</h5>
        <div class="border-bottom" v-for="note in notes">
          <div class="d-flex justify-content-between">
            <span>{{note.creator}}</span>
            <span>{{note.createdAt | prettyDate}}</span>
          </div>
          <p>{{note.content}}</p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    name: 'notes',
    data() {
      return {}
    },
    filters: {
      prettyDate(date) {
        return moment(date).format('MM-DD-YY hh:mm')
      }
    },
    props: ['notes'],
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>