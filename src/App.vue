<template>
  <div id="app">
    <input-component @on-input-todo="onInputTodo"/>
    <list-component :todo-list="todoList"/>
  </div>
</template>

<script>
import ListComponent from './components/ListComponent.vue'
import InputComponent from './components/InputComponent'

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
      this.todoList.push(value)
    }
  }
}
</script>
