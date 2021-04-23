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
      <b v-show="!inputSeen">{{ index + 1 }}</b>
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

import { mapState } from 'vuex'

export default {
  name: 'list-component',
  props: {
    inputSeen: Boolean
  },
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
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
  },
  watch: {
    todoList: {
      deep: true,
      handler (newValue) {
        this.$store.commit('updateTodo', newValue)
      }
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
