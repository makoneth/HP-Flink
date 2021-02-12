import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    usersList: {}
  },
  mutations: {
    setUser(state, data = {}) {
      state.userInfo = data.value;
    },
    setUsersList(state, data = {}) {
      state.usersList = data.value;
    },
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getUsersList(state) {
      return state.usersList;
    },
  },
  actions: {},
  modules: {},
});
