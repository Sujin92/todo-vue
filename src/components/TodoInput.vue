<template lang="pug">
    div(class="input-box shadow")
        input(type="text" v-model="todoItem" placeholder="할 일을 입력하세요."
        v-on:keyup.enter="addTodo")
        span(class="addContainer" v-on:click="addTodo")
            i(class="addBtn fas fa-plus" aria-hidden="true")
        modal(name="modal" v-if="showModal" @close="showModal = false")
            h3(slot="header") WARNING
            span(slot="footer" @click="showModal = false")
             | 할 일을 입력하세요.
            i(class="closeModalBtn fas fa-times" aria-hidden="true")
</template>

<script>
import ErrorModal from '@/components/ErrorModal.vue'
import firebase from 'firebase'

export default {   
    data() {
        return {
            todoItem : '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.todoItem !== "") {
                var value = this.todoItem && this.todoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal
            }
        },
        clearInput() {
            this.todoItem = '';
        }
    }
}
</script>

<style lang="sass" scoped>
    input:focus
        outline: none
    .input-box
        background: white
        height: 52px
        line-height: 52px
        border-radius: 20px
        border: solid 1px black
    .input-box input
        border-style: none
        font-size: 2rem
    .addContainer
        float: right
        background: linear-gradient(to right, #6478FB, #8763FB)
        display: block
        width: 50px
        border-radius: 0 5px 5px 0
    .addBtn
        color: white
        vertical-align: middle
</style>