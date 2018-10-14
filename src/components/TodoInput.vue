<template lang="pug">
    div(class="input__box__wrapper")
        input(class="input-box" type="text" v-model="todoItem" placeholder="할 일을 입력하세요."
        v-on:keyup.enter="addTodo")
        span(class="add-container" v-on:click="addTodo")
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
    .input__box__wrapper
        position: relative
        .input-box
            width: 100%
            font-size: 1.8rem
            background: white
            height: 52px
            line-height: 52px
            border-radius: 20px
            border: solid 1px black
            text-indent: 20px
        .add-container
            position: absolute
            top: 8px
            bottom: 14px
            right: 10px
            background: linear-gradient(to right, #6478FB, #8763FB)
            display: flex
            align-items: center
            justify-content: space-around
            width: 35px
            height: 35px
            border-radius: 50%
        .addBtn
            color: white
</style>