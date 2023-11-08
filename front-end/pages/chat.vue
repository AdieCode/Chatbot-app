<template>
    <div>
        <h1>Chat page</h1>
        <form @submit.prevent="sendMessage">
            <input type="text" v-model="message">
            <button type="submit"></button>
        </form>
    </div>
</template>

<script setup>
const { api } = useFeathers();
import { ref } from 'vue';
const message = ref("")
const sendMessage = async() => {
    await api.service('messages').create({userid:12,text:message.value})
}

</script>

<style lang="css" scoped>
button{
    height: 20px;
    width: 100px;
}
</style>