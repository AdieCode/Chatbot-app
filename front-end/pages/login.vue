<template>
    <div class="main">
        <div class="login-card">
            <div class="login-contents">
                <h1>LOGIN</h1>
                
                <div class="login-edits">
                    <div>
                        <h3>Email</h3>
                        <input type="text" placeholder="you@example.com" v-model="email">
                    </div>
                    <div>
                        <h3>Password</h3>
                        <div class="password">
                            <input type="password" placeholder="Enter password here" v-model="password">
                            <img src="../images/view.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="horizontal-line"></div>

                <form @submit.prevent="Login">
                    <div class="login-options">
                        <button type="submit">Login</button>
                        <nuxt-link to="/signup"><h4 class="login-options-text">Sign up?</h4></nuxt-link>
                    </div>
                </form>

                <div class="horizontal-line"></div>
                <div class="text">Or login with</div>


                <div class="other-login">
                    <div class="login-google">
                        <img src="../images/google.png" alt=" " class="icon">
                        <h4>Google</h4>
                    </div>
                    <div class="login-github">
                        <img src="../images/github.png" alt="" class="icon">
                        <h4>Github</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
const authStore = useAuthStore();
let email = "";
let password = "";

// Logging in
const Login = async() => {
    await authStore.authenticate({ strategy: "local", email: email, password: password });
    console.log("is logged in : " + authStore.isAuthenticated)
};
authStore.reAuthenticate
</script>


<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100&family=Roboto:wght@300;500&display=swap');
template{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.main{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #000;
    font-family: 'Inter Tight', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.login-card{
    width: 600px;
    height: 400px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;

    display: flex;
    justify-content: space-evenly;
}


.login-contents{
    border-radius: 20px;
    width: 580px;
    height: 360;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-contents h1{
    margin: 0px;
    margin-top: 20px;
}

.password{
    display: flex;
}

.password img{
    margin: 0;
    padding: 0;
    margin-top: 10px;
    margin-left: 4px;
    height: 24px;
    width: 24px;
    cursor: pointer;
}
.icon{
    height: 24px;
    width: 24px;
}

.login-photo{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.login-photo img{
    
    width: 475px;
    height: 358px;
    flex-shrink: 0;
    object-fit: contain;
}
.login-edits h3{
    font-size: 16px;
}

.login-edits input{
    padding: 10px 10px;
    margin-left: 28px;
    font-size: 16px;
    height: 20px;
    width: 260px;
    color: #000;
    border-radius: 10px;
    border: 1px solid #000;
    background: #FFF;

}

.login-edits h3{
    font-weight: 400;   
    margin: 0px;
    margin-bottom: 5px;
    margin-top: 15px;
    margin-left: 28px;
}

.horizontal-line {
  margin-top: 20px;
  margin-bottom: 10px;
  border-top: 1px solid #717171e5; /* You can change the color by replacing #000 with your desired color value */
  width: 50%; /* You can adjust the width as needed */
}

.text{
    font-size: 16px;
    font-weight: 600    ;
}

.login-options{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
   
}

.login-options button{
    font-size: 20px;
    padding: 12px 120px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    color: #FFF;
    background-color: #AD61BA;
    cursor: pointer;
}

.login-options-text{
    font-size: 16px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    cursor: pointer;
}

.login-options :hover h4{
  color: #FCCB12;
}
.other-login{
    display: flex;
    justify-content: space-evenly;
}

.other-login h4{
    display: flex;
    justify-content: space-evenly;
    font-weight: 400;
}

.login-google{
    width: 140px;
    height: 51px;
    margin: 10px 10px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #000;
    background: rgba(255, 255, 255, 0.20);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.other-login :hover{
    background-color: #45459df9;
}


.login-github{
    width: 140px;
    height: 51px;
    margin: 10px 10px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #000;
    background: rgba(255, 255, 255, 0.20);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 40px;
}



</style>../store/auth