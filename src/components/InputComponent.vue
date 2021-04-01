<template>
  <div>
    <input v-model="todos" placeholder="insert to-do"><button v-on:click="passTodo">Add</button>
  </div>
</template>

<script>

console.log('input call')

export default {
  name: 'input-component',
  data: function() {
    return {
      todos: void 0
    }
  },
  props: {
    todo: {
      type: String,
      default: void 0
    }
  },
  methods: {
    passTodo () {
      this.$emit('todo', this.todos)
      this.todos = ''
    }
  }
}

</script>

<style scoped>

</style>
