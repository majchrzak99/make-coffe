// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default () => new Vuex.Store({
//   state: {
//     UserData: require('~/data/UserData.json'),
//     WindowWidth: window.innerWidth
//   },
//   mutations: {
//     RefreshWindowWidth (state) {
//       state.WindowWidth = window.innerWidth
//     }
//   },
//   actions: {
//   },
//   modules: {
//   },
//   getters: {
//     IsMobile: state => state.WindowWidth <= 760,
//     User: state => state.UserData
//   }
// })

export const state = () => ({
  UserData: require('~/data/UserData.json'),
  WindowWidth: 0
})

export const mutations = {
  RefreshWindowWidth (state) {
    state.WindowWidth = window.innerWidth
  }
}

export const getters = {
  IsMobile: state => state.WindowWidth <= 760,
  User: state => state.UserData
}
