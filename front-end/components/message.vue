<template>
    <div class="main">
        <div class="direction">
            <p class="message-text" :class="color">{{ dynamicText }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
  dynamicText: String, // Declare dynamicText as a prop of type String
  color: String, // Declare color as a prop of type String
});

</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
}
.main{
 height: 50px;
 max-width: 200px;
 display: flex;
 flex-direction: column;
 border-radius: 10px;
}
.message-text{
    background-color: rgb(143, 143, 143);
    padding: 10px;
    margin: 0;
    white-space: pre-wrap; /* Allow wrapping of text */
    border-radius: 10px;
}
.user{
    background-color: rgba(144, 144, 144, 0.734);
}

.bot{
    background-color: #ad61bab5;
}
</style>