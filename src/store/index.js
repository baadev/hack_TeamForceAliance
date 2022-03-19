import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {
      loggedIn: false,
      username: '',
      active_tab: 1,
    },
    snackbar: {
      show: false,
      content: String,
      color: String,
    }
  },
  mutations: {
    isLoggedIn(state, payload) {
      state.session.loggedIn = payload.state
    },
    showMessage (state, payload) {
      state.snackbar.show = payload.show
      state.snackbar.content = payload.content
      state.snackbar.color = payload.color
    },
    setActiveTab(state, newValue) {
        console.log("setActiveTab вызвано с ", newValue)
        state.active_tab = newValue
        return state.active_tab
    },
  },
  actions: {
  },
  modules: {
  }
})
