<template>
    <div class="main2">
        <h1>Sign up</h1>
        <h1 class="info-wanted">{{ title }}</h1>
        <input type="text" class="user-info-edit" :placeholder="placeholder" v-model="inputText">
        <p v-if="invalid" id="incorrect" v-html="description">
        </p>
        <button class="sumbmit-result" @click="checkValid">Next</button>
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
const router = useRouter()

let count = 0;
let invalid = ref(false);
let description = ref("Email is incorrect");
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

const checkValid = () => {
    if ((inputText.value.includes("@") && inputText.value.length > 8) || (hasSpecialCharacters(inputText.value) && hasCapitalizedLetters(inputText.value) && inputText.value.length > 6)){
        invalid.value = false
        changeComponent()
    }else{
        invalid.value = true
        inputText.value = ''
        console.log("invalid")
    }
}

const changeComponent = async() =>{
    const currentData = inputText.value;
    if (count === 0){
        description.value = "Password is incorrect: <br><br>"+ 
                            "- length of 6 characters <br>"+
                            "- must contain atleast one capitalized letter <br>"+
                            "- must contain atleast one special characters"
        email = currentData;
        title.value = "Enter password"
        placeholder.value = "Enter password here"
        circle_class.circle1.value = "circle-done"
        circle_class.circle2.value = "circle-select"
    } else if(count === 1){
        description.value = "Password does not match"
        password = currentData;
        title.value = "Confirm password"
        circle_class.circle1.value = "circle-done"
        circle_class.circle2.value = "circle-done"
        circle_class.circle3.value = "circle-select"

    }
    else if (count === 2){
        if(password === currentData){
            await api.service('users').create({ email, password })
            router.push("/login");
        }else{
            count--;
        }
    }
    count++;
    inputText.value = '';
}

function hasSpecialCharacters(inputString) {
  const specialCharRegex = /[^A-Za-z0-9_]/; // Matches any character that is not a letter, number, or underscore
  return specialCharRegex.test(inputString);
}

function hasCapitalizedLetters(inputString) {
  const capitalizedRegex = /[A-Z]/; // Matches any uppercase letter
  return capitalizedRegex.test(inputString);
}

</script>

<style scoped>
.main2{
    height: 450px;
    width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Inter Tight', sans-serif;
    margin-bottom: 200px;
}
.info-wanted{
    margin-top: 50px;
    font-weight: 300;
}
.user-info-edit{
    width: 300px;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 10px;
    margin-top: 10px;
    margin-bottom: 40px;
    font-weight: 400;   
    border: 1px solid #000;
}
#incorrect{
    color: red;
}
.sumbmit-result{
    width: 210px;
    border-radius: 10px;
    padding: 18px;
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
    transition: 1s;
}
.circle-done{
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #ad61bad1;
}
</style>