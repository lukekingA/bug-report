<template>
  <div class="bugDetails container-fluid">
    <div class="row bg-dark text-light">
      <div class="col my-4">
        <h1>Bug Report</h1>
      </div>
    </div>
    <div class="row">
      <div class="col col-sm-8 offset-sm-2 mt-5">
        <div v-bind:class="[closed ? red : '', green]" class="card border border-dark shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3 border-bottom border-dark">
              <span class="font-weight-bold">{{bug.creator}}</span>
              <span>{{bug.closed? 'closed':'open'}}</span>
              <span>{{bug.createdAt | prettyDate}}</span>
            </div>
            <h4 class="card-title font-weight-bold">{{bug.title}}</h4>
            <p class="card-text">
              {{bug.description}}
            </p>
            <div class="d-flex justify-content-between">
              <button @click="closeComment(bug._id)" class="btn btn-sm bg-dark text-light">Close <i class="fas fa-bug"></i></button>
              <button v-if="!bug.closed" @click="editBug" class="btn btn-sm bg-dark text-light">Edit</button>
              <button v-if="!bug.closed" @click="openComment" class="btn btn-sm bg-dark text-light">Add Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <note-form v-show="commentForm" :bug="bug" v-on:colapseCommentForm="commentForm = false"></note-form>
    <bug-edit-form v-show="bugEdit" :bug="bug" v-on:colapseForm="bugEdit = false"></bug-edit-form>
    <notes :bug="bug"></notes>
  </div>
</template>


<script>
  import moment from 'moment'
  import NoteForm from '@/components/NoteForm.vue'
  import Notes from '@/components/Notes.vue'
  import BugEditForm from '@/components/BugEditForm.vue'

  export default {
    name: 'bugDetails',
    data() {
      return {
        red: 'red',
        green: 'green',
        commentForm: false,
        bugEdit: false
      }
    },
    props: ['bugId'],
    mounted() {

      this.$store.dispatch('getOneBug', this.bugId)
      this.$store.dispatch('getComments', this.bugId)
    },
    computed: {
      notes() {
        return this.$store.state.curNotes
      },
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
        this.$store.dispatch('closeComment', id)
      },
      openComment() {
        this.commentForm = !this.commentForm
      },
      editBug() {
        this.bugEdit = !this.bugEdit
      }
    },
    components: {
      NoteForm,
      Notes,
      BugEditForm
    }
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