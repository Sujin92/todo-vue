<template>
    <div class="input-box shadow">
        <input type="text" v-model="todoItem" placeholder="할 일을 입력하세요."
        v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">WARNING</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>  
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

<style scoped>
    input:focus {
        outline: none;
    }
    
    .input-box {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .input-box input {
        border-style: none;
        font-size: 2rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 5rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>