<template lang="pug">
    div(class="clear__all__wrapper")
        span(class="clear__btn" @click="clearAll")
            i(class="clearBtn fas fa-trash-alt" aria-hidden="true")
</template>

<script>
export default {
    name: 'todo-footer',
    methods: {
        clearAll() {
            this.$emit('removeAll');
        }
    }
}
</script>

<style lang="sass" scoped>
    .clear__all__wrapper
        display: flex
        align-items: center
        justify-content: space-around
        .clear__btn
            width: 70px
            height: 70px
            display: flex
            align-items: center
            justify-content: space-around
            background: linear-gradient(to right, #6478FB, #8763FB)
            border-radius: 50%
            .clearBtn
                color: white
</style>