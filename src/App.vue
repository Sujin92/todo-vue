<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @removeAll="clearAll"></TodoFooter>
  </div>
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
      todoItems: []
    }
  },
  created() {
    console.log(this.items);
    if (this.items.length > 0) {
        for (var i=0; i <this.items.length; i++) {
            this.todoItems.push(this.items[i]['.value'])
        }
    }
    },
  methods: {
    addTodo(todoItem) {
      // this.$firebaseRefs.items.push(todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      this.items = [];
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
           this.items.splice(index, 1);
           this.todoItems.splice(index, 1);

    }
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  
  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03)
  }
</style>