<template lang="pug">
    div(class="input__box__wrapper")
        input(class="input__box" type="text" v-model="todoItem" placeholder="할 일을 입력하세요.")
        span(class="add-container" @click="addTodo")
            i(class="addBtn fas fa-plus" aria-hidden="true")
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
    .input__box__wrapper
        position: relative
        padding: 0 16px 16px 16px
        .input__box
            width: 100%
            font-size: 1.6rem
            background: white
            height: 52px
            line-height: 52px
            border-radius: 20px
            border: solid 1px #e1e1e1
            text-indent: 20px
            color: rgba(#000, 0.87)
            &:focus
                outline: none
            &::placeholder
                color: rgba(#000, 0.38)
        .add-container
            display: flex
            align-items: center
            justify-content: space-around
            width: 35px
            height: 35px
            position: absolute
            top: 8px
            bottom: 14px
            right: 30px
            background: linear-gradient(to right, #6478FB, #8763FB)
            border-radius: 50%
        .addBtn
            color: white
</style>