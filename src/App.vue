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
        if (localStorage.length > 0) {
            for (var i=0; i <localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i))
            }
        }
    },
  methods: {
    addTodo(todoItem) {
      this.$firebaseRefs.items.push(todoItem)
      // localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      //localStorage.clear();
      this.$firebaseRefs.clearAll;
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
           localStorage.removeItem(todoItem);
          //  this.$firebaseRefs.items.child(key).remove()
           this.todoItems.splice(index, 1);
    }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput'  : TodoInput,
    'TodoList'   : TodoList,
    'TodoFooter' : TodoFooter
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