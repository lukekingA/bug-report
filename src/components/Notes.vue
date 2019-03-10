<template>
  <div class="notes">
    <div class="row">
      <div class="col col-sm-6 offset-sm-3 mt-3">
        <h5 class="">Comments</h5>
        <div class="border-dark border-bottom mt-2" v-for="note in notes">
          <div class="d-flex justify-content-between bgshadow rounded p-2 mb-1">
            <span class="font-weight-bold">{{note.creator}}</span>
            <span><small>created:</small> {{note.createdAt | prettyDate}}</span>
          </div>
          <div class="bg-light rounded p-1">
            <p class="mb-1">{{note.content}}</p>
            <p class="text-right my-0"><small>{{note.flagged}}</small></p>
            <div class="d-flex justify-content-between">
              <div>
                <button @click="markComment(bug._id, note._id,'completed')" class="btn btn-sm mr-2 text-success font-weight-bold"><i
                    class="fas fa-check"></i></button>
                <button @click="markComment(bug._id, note._id,'rejected')" class="btn btn-sm text-danger font-weight-bold"><i
                    class="fas fa-times"></i></button>
              </div>
              <button @click="deleteComment(bug._id, note._id)" class="btn btn-sm"><i class="fas fa-trash-alt"></i></button>
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
    name: 'notes',
    data() {
      return {}
    },
    filters: {
      prettyDate(date) {
        return moment(date).format('MM-DD-YY hh:mm')
      }
    },
    props: ['bug'],
    computed: {
      notes() {
        return this.$store.state.curComments
      }
    },
    mounted() {
      this.$store.dispatch('getComments', this.bug._id)
    },
    methods: {
      deleteComment(bugId, noteId) {
        let data = {
          bugId: bugId,
          noteId: noteId
        }
        this.$store.dispatch('deleteComment', data)
      },
      markComment(bugId, noteId, mark) {
        let data = {
          bugId: bugId,
          noteId: noteId,
          mark: {
            flagged: mark
          }
        }
        this.$store.dispatch('editComment', data)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .bgshadow {
    background-color: rgba(22, 22, 22, 0.25);
  }
</style>