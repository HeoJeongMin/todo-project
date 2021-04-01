<template>
  <div id="app">
    <b>TO-DO List</b>

    <list-component></list-component>
  </div>
</template>

<script>
import ListComponent from './components/ListComponent.vue'

export default {
  name: 'App',
  components: { ListComponent }
}
</script>

<style>

</style>
