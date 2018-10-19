<template lang="pug">
  div(id="app")
    TodoHeader
    TodoInput(@addTodo="addTodo")
    div(class="list__wrapper")
      TodoList(:propsdata="todoItems" @removeTodo="removeTodo")
    div(class="footer__wrapper")
      TodoFooter(@removeAll="clearAll")
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import TodoFooter from '@/components/TodoFooter'
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
        { key: 1, value: "수연님이랑 놀기"},
        { key: 2, value: "수연님 바보"},
        { key: 3, value: "수연님 바보"},
        { key: 4, value: "수연님 바보"},
        { key: 5, value: "수연님 바보"},
        { key: 6, value: "현종님 괴롭히기"},
        { key: 7, value: "정민님 안마봉 훔쳐 도망가기"},
        { key: 8, value: "나눈 바보다"}
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
    width: 100%
    text-align: center
    background-color: #e7e7e7
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'
  #app
    height: 400px
    position: relative
    .list__wrapper
      overflow-y: hidden
      height: 100%
    .footer__wrapper
      width: 100%
      position: fixed
      top: 400px
      box-sizing: border-box
      border: none
  .shadow
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03)
</style>