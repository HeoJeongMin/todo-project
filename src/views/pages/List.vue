<template>
  <div>
    <b>TO-DO List</b>

    <list-component />
  </div>
</template>

<script>
  import ListComponent from '../../components/ListComponent'

  export default {
    name: 'List',
    components: {
      ListComponent
    }
  }
</script>
