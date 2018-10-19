<template lang="pug">
    section(class="todo__list__container")
        div(class="todo__list__scroll")
            transition-group(name="list" tag="ul" class="todo__list")
                li(v-for="(todoItem, index) in propsdata"  :key="index" class="item shadow")
                    | {{ todoItem.value }}
                    span(class="check shadow")
</template>

<script>
export default {
    name: 'todo-list',
    props: ['propsdata'],
    methods: {
        removeTodo(index, key) {
           this.$emit('removeTodo', index, key);
        }
    }
}
</script>

<style lang="sass" scoped>
.todo__list__container
    width: 100%
    height: 300px
    padding: 0 16px
    overflow-y: hidden
    .todo__list__scroll
        overflow-y: scroll
        height: 100%
        &::-webkit-scrollbar
            display: none
        .todo__list
            padding-left: 0px
            text-align: left
            &:after
                background-color: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,1))
            .item
                display: flex
                height: 52px
                position: relative
                margin-bottom: 16px
                font-size: 1.6rem
                color: rgba(#000, 0.6)
                background: #fff
                border: solid 1px #e1e1e1
                border-radius: 20px
                text-indent: 20px
                line-height: 50px
                box-sizing: border-box
                .check
                    display: flex
                    align-items: center
                    justify-content: space-around
                    position: absolute
                    width: 35px
                    height: 35px
                    top: 8px
                    bottom: 0
                    right: 13px
                    background: #fff
                    border: solid 1px rgba(#e1e1e1, 0.38)
                    border-radius: 50%
        .removeBtn
            margin-left: auto
            color: #de4343

        .list-enter-active, .list-leave-active 
            transition: all 1s

        .list-enter, .list-leave-to 
            opacity: 0
            transform: translateY(30px)
</style>
