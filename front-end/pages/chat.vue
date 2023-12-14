<template>
    <div class="main">
        <div class="info">
            <h1>The Bot</h1>
            <p>Curious about using the bot? Well, it's easy! Let's start with how you interact with the bot. After that, we'll explain its functionalities and other capabilities if it's programmed accordingly.</p>

            <h3>How to Interact with It</h3>
            <p>To communicate with the bot, issue a command, for example, (/word), and then respond according to the bot's request.</p>
            
            <h3>Functionality and More</h3>
            <p>The bot is designed to execute various commands provided by the user and guide the user through fulfilling those commands. It can be programmed to perform a multitude of tasks. For instance:</p>
            <p>If the bot receives a command like "/weather," it will process the command and fetch weather data from a weather API, displaying the information. Feel free to try it out and see how it works!</p>
        </div>

        <div class="info2">
            <h1>What Are Commands?</h1>
            <p>Commands are shortcuts, typically starting with "/", enabling users to quickly perform actions or access features within the chatbot.</p>
            <h3>/word</h3>
            <p>When prompted with this command, the bot will ask you for a word and respond with "Your word was: WORD."</p>
            <h3>/greet</h3>
            <p>Issuing this command will prompt the bot to ask for your name and inquire about how you're feeling. It will then respond based on the option you choose.</p>
        </div>
        <div class="welcome">
            <h1>
                Let's Chat :)
            </h1>
        </div>
        <message-box :messages_pr="messages"/>
        <!-- <message-sender/> -->
        <div class="bottom-bar">
            <div class="menu-container">
                <img src="../images/hamburger.png" alt="" @click="toggleMenu">
                <div class="menu" v-if="menuVisible">
                    <div id="close-btn">
                        <h4>commands</h4>
                        <img src="../images/close.png" alt="" @click="toggleMenu"> </div>
                    <ul>
                        <li v-for="(item, index) in commands" :key="index">
                            <p @click="giveCommand(item) ">{{ item }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sending">
                <form @submit.prevent="addMessage">
                    <input type="text" v-model="message" placeholder="Enter text" @keydown.enter.prevent="sendMessageOnEnter">
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const authStore = useAuthStore();
const { api } = useFeathers();
const messagesService = api.service('telegram-bot');
const message = ref("")
const messages = ref([])
const commands = ["/word","/greet"]
let menuVisible = ref(false)

const addMessage = () =>{
    const temp_message = message.value
    const spaces_gone = temp_message.replace(/\s/g, '');
    if (spaces_gone.length > 0){

        sendMessage(message)
        messages.value.push({
            style: 'message-right',
            color: 'user',
            text: temp_message
        })
    
        setTimeout(() => { getMessages() }, 500); 
        messagesService.emit('new-message', message);
    }

}

const sendMessage = async(message) =>{
    const temp_message = message.value
    message.value = ""
    const response = await messagesService.create({
                            userId : "6665202902",
                            text: temp_message
                            })
}

function sendMessageOnEnter(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        // Prevent the default form submission
        event.preventDefault();
        
        // Call your method to handle sending the message
        addMessage();
    }
}

const sortMessages = (response) => {
    const new_messages = [];
    let style = ""; 
    let color = ""; 

    for (const message of response) {
        if (message.bot_sent) {
            style = "message-left";
            color = "bot";
        } else {
            style = "message-right";
            color = "user";
        }

        new_messages.push({
            style: style,
            color: color,
            text: message.text
        });

    }

    return new_messages;
};

const getMessages = async() => {
    try {
        const fetchedMessages = await messagesService.find({
            query: {
                chat_id: { $in: [authStore.user.id] }, // Replace messageId with the specific ID
                $sort: { created_at: 1 }, // Adjust the limit based on your needs
                $limit: 3000,
            },
        });

        messages.value = sortMessages(fetchedMessages.data);


    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

const toggleMenu = () => {
    menuVisible.value = !menuVisible.value 
}

const giveCommand = (command) => {
    message.value = command
    addMessage()
    toggleMenu()
}


onMounted(() => {
    getMessages()
});

</script>

<style lang="css" scoped>
.main{
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter Tight', sans-serif;
}
.bottom-bar{
    padding: 5px;
    width: 500px;
    display: flex;
    justify-content: space-evenly  ;
    align-items: center;
}
.info{
  width: 400px;
  height: 430px;
  background-color: #ffffff3e;
  padding: 0px 30px;
  border-radius: 10px;
  position:absolute ; /* or use absolute, fixed, etc., based on your requirement */
  top: 20.9%; /* Adjust the top position */
  left: 10%; /* Adjust the left position */
  z-index: 2;
}
.info2{
  width: 400px;
  height: 430px;
  background-color: #ffffff3e;
  padding: 0px 30px;
  border-radius: 10px;
  position:absolute ; /* or use absolute, fixed, etc., based on your requirement */
  top: 20.9%; /* Adjust the top position */
  left: 67%; /* Adjust the left position */
  z-index: 2;
}

.welcome{
    position: absolute;
    top:   100px
}

.menu{
  width: 250px;
  height: 300px;
  background-color: #b9b9b9;
  border-radius: 10px;
  position:absolute ; /* or use absolute, fixed, etc., based on your requirement */
  top: 52.8%; /* Adjust the top position */
  left: 37.7%; /* Adjust the left position */
  z-index: 2;
  /* You can also use other properties like right and bottom */
}
.menu-container img{
    padding: 16px;
    margin-top: 13px;
    border-radius: 10px;
    width: 16px;
    height: 16px;
    background-color: #D9D9D9;
    cursor: pointer;
}
.menu img{
    padding: 16px;
    margin-top: 0px;
    margin-left: 200px;
    border-radius: 10px;
    width: 16px;
    height: 16px;
    background-color: #b9b9b9;
    cursor: pointer;
}

#close-btn h4{
    position:absolute;
    left: 80px;
    z-index: 2;
    font-weight: 600;

}
.menu ul{
    list-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 170px;
}
.menu ul li{
    cursor: pointer;
    transition: 0.3s;
    
}

.menu ul li :hover{
    color: #AD61BA;
    padding-left: 10px;
    
    border-radius: 10px;
    background-color: #dedede;
    transition: 0.3s;
}

.menu ul li :active{
    color: #b9b9b9;
    background-color: #AD61BA;
}

.sending{
    padding: 5px;
    width: 400px;
    background-color: #D9D9D9;
    border-radius: 10px;
    margin-top: 10px;
}

.sending input{
    height: 30px;
    width: 80%;
    padding: 4px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    border: none;
}
.sending button{
    height: 38px;
    width: 18%;
    padding: 4px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
    border: none;
    background-color: #D9D9D9;
}
.sending button:hover{
    color: #fff;
    background-color: #AD61BA;
    transition: 0.3s;
}
</style>