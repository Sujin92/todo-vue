<template lang="pug">
  div(id="app")
    TodoHeader
    TodoInput(@addTodo="addTodo")
    TodoList(:propsdata="todoItems" @removeTodo="removeTodo")
    TodoFooter(@removeAll="clearAll")
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import {db} from '@/config/db';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  firebase: function() {
    return {
      items : db.ref('items')
    }
  },
  data() {
    return {
      todoItems: [
        { key: 1, value: "aaa"},
        { key: 2, value: "aaa"},
        { key: 3, value: "aaa"},
        { key: 4, value: "aaa"},
        { key: 5, value: "aaa"}
      ],
      item: {
        type: '',
        value: ''
      }
    }
  },
  // created() {
  //   if (this.items.length > 0) {
  //     this.todoItems = this.items
  //   }
  // },
  methods: {
    addTodo(todoItem) {
      this.$firebaseRefs.items.push(todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      this.$firebaseRefs.items.remove();
      this.todoItems = [];
    },
    removeTodo(index, key) {
      // this.$firebaseRefs.items.child(key).remove();
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style lang="sass">
  body
    text-align: center
    background-color: #e7e7e7
  input
    border-style: groove
    width: 200px
  button
    border-style: groove
  .shadow
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03)
</style>