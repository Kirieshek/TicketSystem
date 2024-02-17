export const CountStore = {
    state: { // data
        count: 0,
    },
    mutations: { // methods
        increment(state) {
        state.count++
        },
        setNewCount(state, payload) {
        state.count = payload
        }
    },
}