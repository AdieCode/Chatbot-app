<template>
    <div class="main">
        <section class="section">
            <div class="info">
                <h1>{{ title1 }}</h1>
                <div class="topic-info">
                    <p>{{ paragraph1 }}</p>
                </div>
            </div>
            <div class="illustration">
                <img src="../images/Problem solving-amico.png" alt="">
            </div>
        </section>

        <section class="section">
            <div class="illustration">
                <img src="../images/Waiting-amico.png" alt="">
            </div>
            <div class="info">
                <h1>{{ title2 }}</h1>
                <div class="topic-info">
                    <p>{{ paragraph2 }}</p>
                </div>
            </div>
        </section>

        <button to="/chat">Try it</button>

        
    </div>
</template>

<script setup>
const title1 = "Don’t go through a maze of Calls";
const paragraph1 = "Opt for a chatbot over call mazes. Utilizing a chatbot streamlines communication, saves time, and reduces frustration. This efficient technology simplifies interactions for a smoother and more productive experience.";

const title2 = "the Waiting Game";
const paragraph2 = "Frustrated with the eternal wait for customer service? Chatbots are your solution. These virtual assistants offer immediate responses, removing the need to endure hold times. Whether it's resolving issues, making purchases, or seeking information, chatbots provide swift assistance. Say farewell to long waits and embrace the convenience of chatbots for a smoother customer service experience.";
</script>


<style lang="css" scoped>
.main{
    color: #000;
    font-family: 'Inter Tight', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.section{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.info{
    width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.section h1{
    font-size: 64px;
    line-height: 1.3;
    letter-spacing: 0.5%;
    text-align: center;
}

.section p{
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0.5%;
    text-align: center;
}
.topic-info{
    width: 525px;
    height: 125px;
}
.illustration img{
    width: 480px;
    height: 520px;
}

button{
    border: none;
    outline: none;
    height: 50px;
    width: 230px;
    color: #000;
    background-color: #D9D9D9;
    border-radius: 10px;
    margin-bottom: 40px;
}
.main button:hover{
    color: #fff;
    background-color: #AD61BA;
    transition: 0.3s;
}

</style>