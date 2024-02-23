import { createStore } from 'vuex'
import { CountStore } from './CountStore'
import { userState } from './userState'

export default createStore({
  state: { // data

  },
  getters: { // computed

  },
  mutations: { // methods

  },
  actions: { // async functions

  },
  modules: { //
    counter: CountStore,
    user: userState
  }
})