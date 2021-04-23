<template>
  <div id="todo-app">
    <b>TO-DO App</b>
    <br/>

    <input-component />

    <list-component input-seen/>

  </div>
</template>

<script>

  import ListComponent from '../../components/ListComponent.vue'
  import InputComponent from '../../components/InputComponent.vue'

  export default {
    name: 'todo-app',
    components: {
      InputComponent,
      ListComponent
    }
  }
</script>
