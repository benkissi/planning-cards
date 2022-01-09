import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isConnected: false,
    socketMessage: '',
    roomInfo: null,
    game: null,
    tasks: null,
    systemMessage: null,
    user: null
  },
  mutations: {
    setConnection(state, status) {
      state.isConnected = status
    },

    setRoomInfo(state, roomInfo) {
      state.roomInfo = roomInfo
    },

    setGame(state, game) {
      state.game = game
    },
    setUser(state, user) {
      state.user = user
    },
    
    setTasks(state, tasks) {
      state.tasks = tasks
    },

    setSystemMessage(state, message) {
      state.systemMessage = message
    }
  },
  actions: {
    socket_connect({commit}) {
      console.log('connect')
      commit('setConnection', true)
    },

    socket_disconnect({commit}) {
      console.log('disconnect')
      commit('setConnection', false)
    },

    socket_system({commit}, payload){
      console.log('message', payload)
      commit('setSystemMessage', payload)
    },

    socket_roomInfo({commit, state}, payload){
      const currentUser = payload.users.find(user => user?.id === state?.user?.id)
      console.log('urrent user', currentUser)
      if(currentUser) {
        commit('setUser', currentUser)
      }
      
      commit('setRoomInfo', payload)
    },

    socket_tasksUpdate({commit}, payload){
      commit('setTasks', payload)
    },

    socket_gameUpdate({dispatch}, payload) {
      dispatch('addGame', payload)
    },

    addGame({commit}, payload) {
      commit('setGame', payload)
    },
    
    addUser({commit}, payload) {
      commit('setUser', payload)
    }
  },
  modules: {},
});

