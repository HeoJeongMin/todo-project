<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input type="checkbox" v-model="item.use">
      <span :title="item" :class="{ checkedColor : item.use }">{{ item.txt }}</span>
      
      <button @click="updateTodo(index)">Update</button>
      <button @click="deleteTodo(index)">Delete</button>
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
      console.log(this.todoList[index].txt)
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
