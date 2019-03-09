<template>
  <div class="bugDetails container-fluid">
    <div class="row">
      <div class="col col-sm-8 offset-sm-2">
        <div v-if="" v-bind:class="[closed ? red : '', green]" class="card border border-dark">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3 border-bottom border-dark">
              <span>{{bug.user}}</span>
              <span>{{bug.closed? 'closed':'open'}}</span>
              <span>{{bug.createdAt | prettyDate}}</span>
            </div>
            <h4 class="card-title">{{bug.title}}</h4>
            <p class="card-text">
              {{bug.description}}
            </p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm bg-dark text-light">Add Comment</button>
              <button @click="closeComment(bug._id)" class="btn btn-sm bg-dark text-light">Close <i class="fas fa-bug"></i></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    name: 'bugDetails',
    data() {
      return {
        red: 'red',
        green: 'green'
      }
    },
    computed: {
      bug() {
        return this.$store.state.curBug
      },
      closed() {
        return this.$store.state.curBug.closed
      }
    },
    filters: {
      prettyDate(date) {
        return moment(date).format('MM-DD-YY')
      }
    },
    methods: {
      closeComment(id) {
        debugger
        this.$store.dispatch('closeComment', id)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .green {
    background-color: rgba(0, 128, 0, 0.60);
  }

  .red {
    background-color: rgba(255, 0, 0, 0.60);
  }
</style>