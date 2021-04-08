<template>
  <div id="app">
    <input-component @on-input-todo="onInputTodo" />
    <list-component :todo-list="todoList"/>
  </div>
</template>

<script>
import ListComponent from './components/ListComponent.vue'
import InputComponent from './components/InputComponent.vue'

export default {
  name: 'App',
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

      this.todoList.push(todoObj)
    }
  }
}
</script>
