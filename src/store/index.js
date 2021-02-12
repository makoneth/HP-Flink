import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userInfo: {},
    usersList: [],
    isLoged: false,
  },
  mutations: {
    setUser(state, data = {}) {
      state.userInfo = data.value;
    },
    setUsersList(state, data = {}) {
      state.usersList = data.value;
    },
    setLoginStatus(state, data = {}) {
      state.isLoged = data.value;
    },
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getUsersList(state) {
      return state.usersList;
    },
    getLoginStatus(state) {
      return state.isLoged;
    },
  },
  actions: {},
  modules: {},
});
