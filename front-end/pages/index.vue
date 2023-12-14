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

        <button to="/chat" @click="goto">Try it</button>

        <footer>
  <div class="footer-container">
    <div class="footer-column">
      <img class="logo" src="../images/chat-bot-high-resolution-logo-black-transparent.png" alt="Logo">
      <p>{{ tagline }}</p>
    </div>
    <div class="footer-column">
      <h2>Company</h2>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h2>Support</h2>
      <ul>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Community Forum</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h2>Follow Us</h2>
      <ul class="social-media">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="copyright">
    <p>&copy; 2023 Company Name. All rights reserved.</p>
  </div>
</footer>

    </div>
</template>

<script setup>
const router = useRouter()
const title1 = "Don’t go through a maze of Calls";
const paragraph1 = "Opt for a chatbot over call mazes. Utilizing a chatbot streamlines communication, saves time, and reduces frustration. This efficient technology simplifies interactions for a smoother and more productive experience.";

const title2 = "the Waiting Game";
const paragraph2 = "Frustrated with the eternal wait for customer service? Chatbots are your solution. These virtual assistants offer immediate responses, removing the need to endure hold times. Whether it's resolving issues, making purchases, or seeking information, chatbots provide swift assistance. Say farewell to long waits and embrace the convenience of chatbots for a smoother customer service experience.";
 
const goto = () =>{
    router.push("/chat")
}
</script>


<style lang="css" scoped>
.main::-webkit-scrollbar {
    width: 10px;
}

.main::-webkit-scrollbar-track {
    background: #D9D9D9;
}

.main::-webkit-scrollbar-thumb {
    background: #AD61BA;
}
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

footer {
  background-color: #f1f1f1;
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-column {
  margin: 10px;
  text-align: left;
}

.footer-column h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 5px;
}

.footer-column a {
  color: #000;
  text-decoration: none;
}

.footer-column a:hover {
  color: #ad61ba;
}

.footer-column img{
height: 48px;
width: 48px;
}

.social-media {
  display: flex;
  justify-content: space-between;
}

.social-media li {
  margin: 0 5px;
}

.social-media a {
  color: #000;
}

.social-media a:hover {
  color: #ad61ba;
}

.copyright {
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
}


</style>