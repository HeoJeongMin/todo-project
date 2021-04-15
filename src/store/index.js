import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello!!!!',
    todoList: localStorage.getItem('todoList')
  },
  mutations: {
    changeMessage (state, newMsg) {
      state.message = newMsg
    }
  },
  actions: {
    callMutation ({ state, commit }, { newMsg }) {
      console.log(state)
      commit('changeMessage', newMsg)
    }
  },
  getters: {
    // getMsg (state) {
    //   return `${state.message} => Length : ${state.message.length}`
    // },
    getTodoList (state) {
      console.log(state)
      return `${state.todoList}`
    }
  },
  modules: {
  }
})
