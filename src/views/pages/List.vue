<template>
  <div>
    <b>TO-DO List</b>

    <input-component list-flag />

    <list-component />
  </div>
</template>

<script>
  import ListComponent from '../../components/ListComponent'
  // import InputComponent from '../../components/InputComponent.vue'

  export default {
    name: 'List',
    components: {
      ListComponent
      // InputComponent
    }
  }
</script>
