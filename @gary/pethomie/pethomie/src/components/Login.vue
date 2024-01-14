<script setup>
import { ref } from "vue";
// Variables
defineProps({
    isShowLogin: Boolean,
})

// Functions
const emit = defineEmits(["showLogin"])

function clickLogin(isShow) {
    emit("showLogin", isShow);
}

const activeTab = ref("sign-up");
</script>
<template>
    <!-- <dialog open class="container"> -->
    <Transition name="backdrop-transition">
        <div class="backdrop" v-if="isShowLogin" @click="clickLogin(isShowLogin)">
        </div>
    </Transition>

    <Transition name="login-transition">
        <dialog v-if="isShowLogin" class="container">
            <div class="login-head">
                <div class="container-head-tab sign-up" 
                :class="{ active: activeTab == 'sign-up'}"
                @click="activeTab = 'sign-up'">
                    <div class="container-head-tab-background"></div>
                    註冊
                </div>
                <div class="container-head-tab login"
                :class="{ active: activeTab == 'login' }"
                @click="activeTab = 'login'">
                    <div class="container-head-tab-background"></div>
                    登入
                </div>
            </div>
    
            <div class="third-party-login-container">
                <!-- <div class="close">x</div> -->
                <div v-if="activeTab == 'sign-up'">
                    <div class="third-party-login">
                        <div class="third-party-login-icon"></div>
                        <div class="third-party-login-text">Facebook</div>
                    </div>
                    <div class="third-party-login">
                        <div class="third-party-login-icon"></div>
                        <div class="third-party-login-text">Google</div>
                    </div>
                </div>
            </div>
        </dialog>
    </Transition> 
</template>

<style scoped>

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25)
}

.container-head-tab {
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    width: 100%;
    height: 100%;
    color: white;
    background-color: #454545;
    position: relative;
    cursor: pointer;
}

.container-head-tab-background {
    position: absolute;
    background-color: #454545;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1001;
}
.container-head-tab:not(.active) {
    .container-head-tab-background {
        background-color: white;
    }
}

.container-head-tab.active {
    color: #454545;
    background-color: white;
}

.login.active {
    border-radius: 1rem 0rem 0rem 0rem;
}

.login:not(.active) {
    border-radius: 0rem 0rem 0rem 1rem;
}

.sign-up.active {
    border-radius: 0rem 1rem 0rem 0rem;
}

.sign-up:not(.active) {
    border-radius: 0rem 0rem 1rem 0rem;
}

.open-login-button {
    cursor: pointer;
}

.container {
    background-color: yellow;
    position: fixed;
    top: 50%;
    transform: translate(0, -50%); /*垂直置中*/
    width: 20rem;
    height: 20rem;
    border: 2px;
    border-color: black;
    border-style: solid;
    border-radius: 2%;
    overflow: hidden;
    display: block;
}

.login::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
}

.login-head {
    display: flex;
    flex-direction: row;
    /* background-color: #454545; */
    /* justify-content:space-evenly; */
}

.close {
    background-color: white;
    cursor: pointer;
}

.third-party-login-container {
    /* background-color: green; */
    display: flex; /*Flex會讓裡面元素寬度根據元素內容，所以元件需要加上寬度*/
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.third-party-login {
    background-color: white;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.5rem;
}

.third-party-login-icon {
    background-color: aqua;
    width: 1rem;
    height: 1rem;
}

.third-party-login-text {
    background-color: blueviolet;
    flex-grow: 1; /*填充剩下空間的多少比例寬度*/
}


.login-transition-enter-active,
.login-transition-leave-active {
    transition: all 0.5s ease-in-out;
}

/* 還沒出現 */
.login-transition-enter-from,
.login-transition-leave-to {
    opacity: 0;
    top: 100%
}

/* 準備消失 */
.login-transition-enter-to,
.login-transition-leave-from {
    opacity: 1;
    top: 50%
}

.backdrop-transition-enter-active,
.backdrop-transition-leave-active {
    transition: all 0.5s ease-in-out;
}

/* 還沒出現 */
.backdrop-transition-enter-from,
.backdrop-transition-leave-to {
    opacity: 0;
}

/* 準備消失 */
.backdrop-transition-enter-to,
.backdrop-transition-leave-from {
    opacity: 1;
}


</style>