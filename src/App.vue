<template lang="pug">
  div(id="app")
    TodoHeader
    TodoInput(@addTodo="addTodo" v-if="showInput")
    div(class="list__wrapper")
      TodoList(:propsdata="todoItems" @removeTodo="removeTodo")
    div(class="footer__wrapper")
      TodoFooter(@click="clickHandler")
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
  data: () => ({
    todoItems: [
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"},
      { key: 1, value: "공부하기"}
    ],
    item: {
      type: '',
      value: ''
    },
    showInput: false
  }),
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
    clickHandler () {
      console.log('aaa')
      this.showInput = !this.showInput
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
      width: 95%
      position: fixed
      top: 400px
      box-sizing: border-box
      border: none
  .shadow
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03)
</style>