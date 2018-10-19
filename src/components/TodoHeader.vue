<template lang="pug">
    div(class="header")
        p(class="text")
        h1(class="title") All Tasks
        p(class="edit" @click="edit") 편집
</template>

<script>
export default {
    name: 'todo-header',
    methods: {
        edit () {
            this.$emit('edit')
        }
    }
}
</script>

<style lang="sass">
.header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    margin-top: 24px
    padding: 0 30px
    .title
        color: rgba(#000, 0.6)
        font-size: 3rem
        font-weight: bold
        margin: 0
    .edit
        margin: 0
        font-size: 1.4rem
        color: rgba(#000, 0.6)
</style>
