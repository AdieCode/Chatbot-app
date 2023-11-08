<template>
    <header>
        <nav>
            <nuxt-link to="/"><img src="../images/chat-bot-high-resolution-logo-black-transparent.png" alt="" class="robot-img"></nuxt-link>
            <div class="navlinks">
                <ul>
                        <li><NuxtLink to="/" class="home-link">Home</NuxtLink> </li>
                        <li><NuxtLink to="/chat" class="home-link">Chat bot</NuxtLink> </li>
                        <li class="chat-hover"><NuxtLink to="/login" class="chat-link" @click="checkState">{{ navigationText }}</NuxtLink> </li>
                </ul>
            </div>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
</template>

<script setup>
const authStore = useAuthStore();

const navigationText = computed(() => {
  return authStore.isAuthenticated ? 'Sign out' : 'Login';
});

const checkState = () => {
    if (authStore.isAuthenticated) {
        authStore.logout();
    }
};
</script>

<style scoped>

nav{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-family: 'Inter Tight', sans-serif;
}
ul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

li{
    margin: 10px 30px;
    list-style: none;
}
.navlinks ul li{
    list-style: none;
    display: inline-block;
    padding: 10px 14px;
    position: relative;
}

.navlinks ul li NuxtLink{
    color: #000;
    text-decoration: none;
    font-size: 13px;

}

.navlinks ul li::after{
    content: '';
    width: 0%;
    height: 2px;
    background-color: #000;
    display: block;
    margin: auto;
    transition: 0.05s;
}

.navlinks ul li:hover::after{
    width: 100%;

}
.robot-img{
    margin: 10px 20px;
    height: 100px;
    width: 100px;
}

.home-link{
    color: black;
    text-decoration: none;
}
.chat-link{
    color: #000;
    text-decoration: none;
    background-color: #D9D9D9;
    padding: 15px 20px;
    border-radius: 10px;
}

nav .chat-link:hover{
    color: #fff;
    background-color: #AD61BA;
    transition: 0.3s;
}

.router-link-exact-active{
    font-weight: 800;
}
</style>