<template>
  <div class="bugs">

    <table class="w-100 shadow bg-light rounded">
      <thead>
        <tr class="border-bottom shadow-sm">
          <th class="w-25">Title</th>
          <th class="w-25">Reported by</th>
          <th class="w-25">Status <i @click="open = !open" class="fas fa-sort-down"></i></th>
          <th class="w-25">Date <i @click="open = !open" class="fas fa-sort-down"></i></th>
        </tr>
        <tr class="ht10"></tr>
      </thead>
      <tbody>
        <tr :class="[bug.closed ? red : '', green]" class="border-bottom rounded" v-for="bug in bugs">
          <td @click="viewBug(bug._id)" class="text-primary hover txt-bold txt-shadow">{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td>{{bug.closed? 'closed': 'open'}}</td>
          <td class="pr-2">{{bug.createdAt | prettyDate}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    name: 'bugs',
    data() {
      return {
        open: false,
        red: 'red',
        green: 'green'
      }
    },
    computed: {
      bugs() {
        let items = this.$store.state.bugs
        if (this.open) {
          return items.sort((a, b) => a.closed - b.closed)
        } else {
          return items.sort((a, b) => {
            return Date.parse(a.createdAt) - Date.parse(b.createdAt)
          })
        }
      }
    },
    filters: {
      prettyDate(date) {
        return moment(date).format('MM-DD-YY hh:mm')
      }
    },
    methods: {
      viewBug(id) {
        this.$store.dispatch('getOneBug', id)
      }
    },
    components: {}
  }
</script>


<style scoped>
  tr {
    height: 2.5rem;
  }

  i:active {
    transform: rotateX(180deg);
    animation: one 1s once;
    animation-direction: alternate;
  }

  i:hover {
    color: blue;
    cursor: pointer;
  }

  @keyframes one {
    0% {
      transform: rotateX(0deg);
    }

    100% {
      transform: rotateX(180deg);
    }
  }

  .txt-bold {
    font-weight: bold;
  }

  .txt-shadow {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.333);
  }

  .hover {
    cursor: pointer;
  }

  .green {
    background-image: linear-gradient(to bottom, transparent, rgba(0, 128, 0, 0.75));
  }

  .red {
    background-image: linear-gradient(to bottom, transparent, rgba(255, 0, 0, 0.75));
  }

  .ht10 {
    height: 10px;
  }
</style>