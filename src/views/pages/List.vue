<!--
    LIST PAGE
-->

<template>
  <div>
    <list-component
        :todo-list="readOnlyTodoList"/>
  </div>
</template>

<script>
  import ListComponent from '../../components/ListComponent'

  export default {
    name: 'List',
    components: {
      ListComponent
    },
    data () {
      return {
        readOnlyTodoList: []
      }
    },
    created () {
      // 최초 List 페이지가 생성될 때 localStorage의 값을 삽입한다.
      this.readOnlyTodoList = JSON.parse(localStorage.getItem('todoList'))
    }
  }
</script>
