<template>
  <div id="todo">
    <b>{{ todoTitle }}</b>
    <br/>

    <input-component @on-input-todo="onInputTodo"/>

    <list-component
        :todo-list="todoList"
        input-seen
    />

  </div>
</template>

<script>
  import ListComponent from '../../components/ListComponent.vue'
  import InputComponent from '../../components/InputComponent.vue'

  export default {
    name: 'todo',
    components: {
      InputComponent,
      ListComponent
    },
    data () {
      return {
        todoList: [],
        todoTitle: void 0
      }
    },
    created () {
      // 최초 localStorage에 값이 있으면 값을 유지한다.
      const localData = JSON.parse(this.$store.getters.getTodoList)

      if (localData) {
        this.todoList = localData
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
