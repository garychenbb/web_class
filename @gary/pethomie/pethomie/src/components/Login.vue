<script setup>
</script>
<template>
    <!-- <dialog open class="container"> -->
    <dialog class="container">
        <div class="login-head">
            <div class="container-head-tab sign-up">
                <div class="container-head-tab-background"></div>
                註冊
            </div>
            <div class="container-head-tab login active">
                <div class="container-head-tab-background"></div>
                登入
            </div>
        </div>

        <div class="third-party-login-container">
            <div class="close">x</div>
            <div class="third-party-login">
                <div class="third-party-login-icon"></div>
                <div class="third-party-login-text">Facebook</div>
            </div>
            <div class="third-party-login">
                <div class="third-party-login-icon"></div>
                <div class="third-party-login-text">Google</div>
            </div>
        </div>
    </dialog>
</template>

<style scoped>

.container-head-tab {
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    width: 100%;
    height: 100%;
    color: white;
    background-color: #454545;
    position: relative;
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
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30rem;
    height: 40rem;
    border: 3px;
    border-color: black;
    border-style: solid;
    border-radius: 2%;
    overflow: hidden;
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

.container {
    /* background-color: green; */
    height: 50rem;
}

</style>