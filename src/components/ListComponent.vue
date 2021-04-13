<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input
          v-show="!item.seen && inputSeen"
          v-model="item.isCheck"
          type="checkbox"
      >
      <span
          v-show="!item.seen"
          :class="{ 'checkedColor' : item.isCheck }"
      >
        {{ item.txt }}
      </span>

      <input
          v-show="item.seen && inputSeen"
          v-model="item.txt"
      >

      <button
          v-show="!item.seen && inputSeen"
          @click="updateTodo(index)"
      >
        Update
      </button>

      <button
          v-show="!item.seen && inputSeen"
          @click="deleteTodo(index)"
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

export default {
  name: 'list-component',
  props: {
    todoList: Array,
    inputSeen: Boolean
  },
  methods: {
    updateTodo(index) {
      this.todoList[index].seen = true
    },
    applyTodo(index) {
      this.todoList[index].seen = false
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
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
</style>
