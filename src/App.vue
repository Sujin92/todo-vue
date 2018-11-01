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
  data: () => ({
    todoItems: [
      { key: 1, value: "공부하기"},
      { key: 2, value: "공부하기"},
      { key: 3, value: "공부하기"},
      { key: 4, value: "공부하기"},
      { key: 5, value: "공부하기"},
      { key: 6, value: "공부하기"},
      { key: 7, value: "공부하기"},
      { key: 8, value: "공부하기"}
    ],
    showInput: false
  }),
  methods: {
    addTodo (todoItem) {
      const obj = { key: this.todoItems.length + 1, value: todoItem}
      this.todoItems.push(obj);
      this.showInput = false
    },
    clickHandler () {
      this.showInput = !this.showInput
    },
    removeTodo (index, key) {
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