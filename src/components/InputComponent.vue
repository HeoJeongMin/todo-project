<template>
  <div>
    <input
        v-model="todo"
        placeholder="insert to-do"
    >

    <button v-show='!listFlag' @click="addTodo">
      <span>Add</span>
    </button>

    <button v-show='listFlag'>
      <span>Search</span>
    </button>
  </div>
</template>

<script>

// import { mapMutations } from 'vuex'

export default {
  name: 'input-component',
  props: {
    listFlag: Boolean
  },
  data: () => {
    return {
      todo: void 0,
      btnTxt: void 0
    }
  },
  methods: {
    // ...mapMutations([
    //   'addTodo'
    // ])
    // ,
    addTodo () {
      this.$store.commit('mutationTodo', this.todo)
      this.todo = void 0
    }
  }
}
</script>
