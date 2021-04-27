// state
const state = {
  todoList: []  // 초기값은 지정
}

// mutations
const mutations = {
  // todo 추가
  addTodo (state, todo) {
    state.todoList.push({
      txt: todo,
      seen: false,
      isCheck: false
    })
  },

  // 삭제
  deleteTodo (state, index) {
    state.todoList.splice(index, 1)
  },

  // seen 변경
  changeSeen (state, { index, value }) {
    state.todoList[index].seen = value
  }
}

// actions
const actions = {}

// getters
const getters = {}

export default {
  namespaced: true, // namespace 사용
  state,
  mutations,
  actions,
  getters
}
