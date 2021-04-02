<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input type="checkbox">
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list-component',
  props: {
    todoList: Array
  }
}
</script>
