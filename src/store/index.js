import Vue from 'vue'
import Vuex from 'vuex'

import Store from './todo-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todoStore: Store  // todoStore namespace 활용
  }
})

export default store
