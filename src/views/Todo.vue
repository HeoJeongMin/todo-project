<template>
  <div id="todo">
    <input-component @on-input-todo="onInputTodo" />
    <list-component :todo-list="todoList" />
  </div>
</template>

<script>
import ListComponent from '../components/ListComponent.vue'
import InputComponent from '../components/InputComponent.vue'

export default {
  name: 'todo',
  components: {
    InputComponent,
    ListComponent
  },
  data () {
    return {
      todoList: []
    }
  },
  methods: {
    onInputTodo (value) {
      let todoObj = {}
      todoObj.txt = value
      todoObj.seen = false
      todoObj.isCheck = false

      this.todoList.push(todoObj)
    }
  }
}
</script>
