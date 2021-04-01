<template>
  <div>
    <input-component @todo="val => addTodo(val)"></input-component>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        <input type="checkbox"> {{ item.item }}
      </li>
    </ul>
  </div>
</template>

<script>
import InputComponent from './InputComponent.vue'

console.log('list call')
export default {
  name: 'list-component',
  components: { InputComponent },
  data () {
    return {
      items: []
    }
  },
  methods: {
    addTodo (val) {
      this.items.push({item:val})
    }
  }
}
</script>

<style scoped>

</style>
