<template>
    <div class="main">
        <h1>Sign up</h1>
        <h1 class="info-wanted">{{ title }}</h1>
        <input type="text" class="user-info-edit" :placeholder="placeholder" v-model="inputText">
        <button class="sumbmit-result" @click="changeComponent">Next</button>
        <div class="circle-container">
            <div :class="circle_class.circle1.value"></div>
            <div :class="circle_class.circle2.value"></div>
            <div :class="circle_class.circle3.value"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { api } = useFeathers();

let count = 0;
const inputText = ref("")
const title = ref("Enter email")
const placeholder = ref("you@example.com");
let email = "";
let password = "";
const circle_class = {
    circle1: ref("circle-select"),
    circle2: ref("circle"),
    circle3: ref("circle")
}

const changeComponent = async() =>{
    const currentData = inputText.value;
    if (count === 0){
        email = currentData;
        title.value = "Enter password"
        placeholder.value = "Enter password here"
        circle_class.circle1.value = "circle-done"
        circle_class.circle2.value = "circle-select"
    } else if(count === 1){
        password = currentData;
        title.value = "Confirm password"
        circle_class.circle1.value = "circle-done"
        circle_class.circle2.value = "circle-done"
        circle_class.circle3.value = "circle-select"

    }
    else if (count === 2){
        if(password === currentData){
            await api.service('users').create({ email, password })
        }else{
            count--;
        }
    }
    count++;
    inputText.value = '';
}
</script>

<style scoped>
.main{
    height: 450px;
    width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Inter Tight', sans-serif;
}
.info-wanted{
    margin-top: 50px;
    font-weight: 300;
}
.user-info-edit{
    width: 300px;
    height: 48px;
    border-radius: 10px;
    font-size: 18px;
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 40px;
    font-weight: 400;   
    border: 1px solid #000;
}
.sumbmit-result{
    width: 210px;
    height: 60px;
    border-radius: 10px;
    margin:40px 0px ;
    border: none;
    font-size: 20px;
    color: #fff;
    background-color: #AD61BA;
    cursor: pointer;
}
.circle-container{
    height: 10px;
    width: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.circle{
    height: 10px;
    width: 10px;
    background-color: #D9D9D9;
    border-radius: 100%;
}

.circle-select{
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #AD61BA;
    border: 2px solid #565656;
}
.circle-done{
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #AD61BA;
}
</style>