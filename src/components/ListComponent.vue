<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input
          v-show="!item.seen && inputSeen"
          v-model="item.completed"
          type="checkbox"
      >
      <b v-show="!inputSeen">{{ index + 1 }}</b>
      <span
          v-show="!item.seen"
          :class="{ 'checkedColor' : item.completed }"
      >
        {{ item.title }}
      </span>

      <input
          v-show="item.seen && inputSeen"
          v-model="item.title"
      >

      <button
          v-show="!item.seen && inputSeen"
          @click="updateTodo(index)"
      >
        Update
      </button>

      <button
          v-show="!item.seen && inputSeen"
          @click="onDeleteTodo(index)"
      >
        Delete
      </button>

      <button
          v-show="item.seen && inputSeen"
          @click="applyTodo(index)"
      >
        Apply
      </button>
    </li>
  </ul>
</template>

<script>

// namespace utils
import { createNamespacedHelpers } from 'vuex'

// helper
const todoStoreHelper = createNamespacedHelpers('todoStore')

export default {
  name: 'list-component',
  props: {
    inputSeen: Boolean
  },
  created () {
    this.fetchTodoList()
  },
  computed: {
    ...todoStoreHelper.mapState([
      'todoList'
    ])
  },
  methods: {
    ...todoStoreHelper.mapMutations([
      'changeSeen',
      'deleteTodo'
    ]),
    ...todoStoreHelper.mapActions([
      'fetchTodoList'
    ]),
    updateTodo (index) {
      this.changeSeen({ index, value: true })
    },
    applyTodo (index) {
      this.changeSeen({ index, value: false })
    },
    onDeleteTodo (index) {
      this.deleteTodo(index)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

button {
  margin-left: 10px;
}

.checkedColor {
  color: green;
  text-decoration-line: line-through;
}

b {
  margin-right: 5px;
}
</style>
