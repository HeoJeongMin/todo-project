<template>
  <div>
    <input
        v-model="todo"
        placeholder="insert to-do"
    >

    <button @click="onAddTodo">
      <span>Add</span>
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
  data: () => {
    return {
      todo: void 0
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
