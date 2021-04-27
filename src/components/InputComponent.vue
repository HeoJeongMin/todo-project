<template>
  <div>
    <input
        v-model="todo"
        placeholder="insert to-do"
    >

    <button
        v-show='!listFlag'
        @click="onAddTodo"
    >
      <span>Add</span>
    </button>

    <button v-show='listFlag'>
      <span>Search</span>
    </button>
  </div>
</template>

<script>

// namespace utils
import { createNamespacedHelpers } from 'vuex'

// helper
const todoStoreHelper = createNamespacedHelpers('todoStore')

export default {
  name: 'input-component',
  props: {
    listFlag: Boolean
  },
  data: () => {
    return {
      todo: void 0,
      btnTxt: void 0
    }
  },
  methods: {
    ...todoStoreHelper.mapMutations([
      'addTodo'
    ]),
    onAddTodo () {
      this.addTodo(this.todo)
      this.todo = void 0
    }
  }
}
</script>
