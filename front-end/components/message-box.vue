<template>
    <div class="mainbody" ref="messagesContainer">
        <div :class="message.style"  v-for="message in messages_pr" :key="message.id">
            <message :dynamicText="message.text" :color="message.color"/>
        </div>
    </div>
</template>

<script setup>
import { ref,onUpdated } from 'vue';
const messagesContainer = ref(null)

const props = defineProps({
  messages_pr:Array,
});

const scrollMessagesToBottom = () => {
    if (messagesContainer.value) {
        messagesContainer.value.scrollTo({
            top: messagesContainer.value.scrollHeight,
            behavior: 'smooth'
        });
    }
};

onUpdated(() => {
    scrollMessagesToBottom()
})

</script>


<style lang="css" scoped>
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background-color: #D9D9D9;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: #ad61baa3;
    border-radius: 10px;
}
.mainbody{
 width: 500px;
 height: 500px;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 background-color: #D9D9D9;
 border-radius: 10px;
 overflow-y: scroll;
 border-radius: 10px;
 border: solid 15px #D9D9D9;
 border-right: 0px;
}
.message-left{
    width: 94%;
    max-height: 400px;
    display: flex;
    margin: 12px;
    padding-bottom: 10px;
}

.message-right{
    width: 94%;
    max-height: 400px;
    display: flex;
    justify-content: flex-end;
    margin: 4px;
}
</style>