import Vue from 'vue'
import vuex from 'vuex'
import socket from 'socket.io-client'
import VueSocketio from 'vue-socket.io'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    msgNew: 'Text will be change after 3s and 5s on condition based!!',
    count: 0,
    connect: false,
    message: null,
    msgScoket: [],
    userStore: [
      {
        name: 'Akash ',
        id: '1',
        emailid: 'akash@gmail.com'
      },
      {
        name: 'Paras ',
        id: '2',
        emailid: 'paras@gmail.com'
      },
      {
        name: 'piyush',
        id: '3',
        emailid: 'piyush@gmail.com'
      }
    ]
  },
  actions: {
    actionWork ({ commit }, data) {
      setTimeout (() => {
        commit('increment', data)
      }, 8000)
    },
    actionSocket ({ commit }, data) {
      commit('actionMutation', data)
    },
    actionWorkSecondc({ commit }) {
      setTimeout (() => {
        commit('decrement')
      }, 2000)
    }
  },
  mutations: {
    pushEle (state, payload) {
      state.userStore.push(payload)
    },
    increment (state, payload) {
      state.msgNew = payload
    },
    actionMutation (state, payload) {
      state.msgScoket = payload
    },
    aboutButton (state) {
      state.msgNew = 'about button'
    },
    increments (state) {
      setTimeout(function () {
        state.msgNew = 'Error value'
      }, 5000)
    },
    decrement (state) {
      state.msgNew = 'hello decrement value'
    },
    countcall (state, payload) {
      state.count += payload
    }
  },
  getters: {
    getlist: state => state.msgNew,
    getSocket: state => state.msgScoket
  }
})
