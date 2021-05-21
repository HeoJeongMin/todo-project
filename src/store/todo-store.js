import axios from 'axios'

// state
const state = {
  todoList: []  // 초기값은 지정
}

// mutations
const mutations = {
  // todo 추가
  addTodo (state, todo) {
    state.todoList.push({
      title: todo,
      seen: false,
      completed: false
    })
  },

  // 삭제
  deleteTodo (state, index) {
    state.todoList.splice(index, 1)
  },

  // seen 변경
  changeSeen (state, { index, value }) {
    state.todoList[index].seen = value
  },

  getTodoList (state, todo) {
    state.todoList = todo
  }
}

// actions
const actions = {
  fetchTodoList ({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const todo = response.data
        todo.map(value => ( value.seen = false))
        commit('getTodoList', todo)
      })
  }
}

// getters
const getters = {}

export default {
  namespaced: true, // namespace 사용
  state,
  mutations,
  actions,
  getters
}
