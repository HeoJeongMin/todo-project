import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storedTodo = localStorage.getItem('todoList')

const store = new Vuex.Store({
  state: {
    todoList: storedTodo === null ? [] : JSON.parse(storedTodo)
  },
  mutations: {
    mutationTodo (state, todo) {
      state.todoList.push({
        txt: todo,
        seen: false,
        isCheck: false
      })
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
    updateTodo (state, payload) {
      state.todoList = payload
      localStorage.setItem('todoList', JSON.stringify(payload))
    }
  },
  // actions: {
  //   callMutation ({ state, commit}, { newTodo }) {
  //     console.log(state)
  //     commit('appendTodo', newTodo)
  //   }
  // },
  getters: {
    // searchTodo: state => {
    //   return state.todoList.filter()
    // }
  },
})

export default store