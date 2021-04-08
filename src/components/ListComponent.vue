<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input type="checkbox" v-model="item.isCheck" v-if="!item.seen">
      <span :class="{ checkedColor : item.isCheck }" v-if="!item.seen">
        {{ item.txt }}
      </span>

      <input v-if="item.seen" v-model="item.txt">

      <button @click="updateTodo(index)" v-if="!item.seen">Update</button>
      <button @click="deleteTodo(index)" v-if="!item.seen">Delete</button>

      <button @click="applyTodo(index)" v-if="item.seen">Apply</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'list-component',
  props: {
    todoList: Array
  },
  methods: {
    updateTodo (index) {
      this.todoList[index].seen = true
    },
    applyTodo (index) {
      this.todoList[index].seen = false
    },
    deleteTodo (index) {
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
