<template>
  <div id="todo">
    <b>{{ todoTitle }}</b>
    <br/>

    <input-component 
      @on-input-todo="onInputTodo" 
      v-show="inputSeen" 
    />

    <list-component 
      :todo-list="todoList" 
      :input-seen="inputSeen" 
    />

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
      todoList: [],
      todoTitle: void 0,
      inputSeen: true
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
  },
  watch: {
    '$route' (to) {
      if(to.name === 'Todo') {
        this.todoTitle = 'TO-DO App'
        this.inputSeen = true
      } else if(to.name === 'List') {
        this.todoTitle = 'TO-DO List'
        this.inputSeen = false
      }
    }
  }
}
</script>
