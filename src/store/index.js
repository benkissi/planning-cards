import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isConnected: false,
    socketMessage: '',
    roomInfo: null,
    game: null
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
    socket_message(_, payload){
      console.log('message', payload)
    },
    socket_roomInfo({commit}, payload){
      console.log('message', payload)
      commit('setRoomInfo', payload)
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

