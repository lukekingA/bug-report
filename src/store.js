import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/lukea'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    curBug: {},
    curNotes: []
  },
  mutations: {
    getBugs(state, data) {
      state.bugs = data
    },
    getOneBug(state, data) {
      state.curBug = data
    },
    getNotes(state, data) {
      state.curNotes = data
    }

  },
  actions: {
    getBugs({
      commit,
      dispatch
    }) {
      _api.get('/bugs').then(res => {
        commit('getBugs', res.data.results)
      })
    },
    getNotes({
      commit,
      dispatch
    }, id) {
      _api.get('/bugs/' + id + '/notes').then(res => {
        debugger
        console.log(res)
        commit('getNotes', res.data.results)
      })
    },
    getOneBug({
      commit,
      dispatch
    }, id) {
      _api.get('/bugs/' + id).then(res => {
        commit('getOneBug', res.data.results)
        router.push({
          name: 'bugDetails'
        })
      })
    },
    formSubmit({
      commit,
      dispatch
    }, data) {
      _api.post('/bugs', data).then(res => {
        //commit('formSubmit',res.data.data)
        dispatch('getBugs')
      })
    },
    closeComment({
      commit,
      dispatch
    }, id) {
      _api.delete('/bugs/' + id).then(res => {
        dispatch('getBugs')
        dispatch('getOneBug', id)
      })
    },
    addComment({
      commit,
      dispatch
    }, data) {
      debugger
      _api.post('/bugs/' + data.bug._id + '/notes', data).then(res => {
        console.log(res)

      })
    }
  }
})