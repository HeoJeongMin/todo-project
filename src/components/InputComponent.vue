<template>
  <div>
    <b>TO-DO List</b>
    <br/>

    <input
        v-model="todo"
        placeholder="insert to-do"
    >

    <button @click="passTodo">
      Add
    </button>
  </div>
</template>

<script>

export default {
  name: 'input-component',
  data: () => {
    return {
      todo: void 0
    }
  },
  props: {
    todoList: Array
  },
  methods: {
    passTodo () {
        this.$emit('on-input-todo', this.todo)
        this.todo = void 0
    }
  }
}
</script>
