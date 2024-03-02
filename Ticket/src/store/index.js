import { createStore } from 'vuex'
import { CountStore } from './CountStore'
import { userState } from './userState'
import { ticketState } from './ticketState'

export default createStore({
  state: { // data

  },
  getters: { // computed

  },
  mutations: { // methods

  },
  actions: { // async functions

  },
  modules: { // modules
    counter: CountStore,
    user: userState,
    ticket: ticketState 
  }
})