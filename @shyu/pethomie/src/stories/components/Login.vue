<script setup>
import { ref } from "vue";

defineProps({
    // 接口：接父層來的props
    showLogin: Boolean,
});

const emit = defineEmits(["updateShowLogin"]); //接收父組件傳來的 function

// 處理clicｋ事件 => 呼叫父組件傳來的 function
const handleClick = (showLogin) => {
    emit("updateShowLogin", showLogin);
};

const activeTab = ref("login");

const swichativeTab = () => {
    console.log("success");
};
</script>

<template>
    <Transition name="fade">
        <div v-if="showLogin" @click="handleClick(showLogin)" class="backdrop">
            {{ showLogin }}
        </div>
    </Transition>

    <Transition name="slide-in">
        <dialog v-if="showLogin" class="login">
            <!-- header -->
            <div class="login-header">
                <div
                    class="login-header-tab login-header-tab--signup"
                    :class="{ active: activeTab === 'signin' }"
                    @click="activeTab = 'signin'"
                >
                    <div class="login-header-tab-title">註冊</div>
                </div>
                <div
                    class="login-header-tab login-header-tab--login"
                    :class="{ active: activeTab === 'login' }"
                    @click="activeTab = 'login'"
                >
                    <div class="login-header-tab-title">登入</div>
                </div>
            </div>

            <!-- body -->
            <div class="login-body">
                {{ activeTab }}

                <div class="login-wrapper">
                    <div>option</div>
                    <div>option</div>
                    <div>option</div>
                    <div @click="handleClick(showLogin)">{{ showLogin }}</div>
                </div>
            </div>
        </dialog>
    </Transition>
</template>

<style lang="sass" scoped>

.login
    --theme-primary: #454545
    --theme-secondary: #ffffff
    --shodow-normal: 3px 3px 15px rgba(0, 0, 0, 0.15)
    --border-radius: 1.65rem

    display: flex
    flex-direction: column
    position: fixed
    padding: 0
    width: min(600px, 100%)
    height: min(600px, 100%)
    top: 50%
    transform: translateY(-50%)
    overflow: hidden
    border: none
    border-radius: var(--border-radius)
    filter: drop-shadow(var(--shodow-normal))


    &-header
         display: flex

         &-tab
            position: relative
            flex: 1
            text-align: center
            cursor: pointer
            color: var(--theme-scondary)
            font-size: 1.25rem
            font-weight: bolder
            padding: 0.5rem
            background: var(--theme-primary)

            &:after
                content: ""
                position: absolute
                inset: 0

            &-title
                position: relative
                z-index: 1001

            // active
            &--signup.active, &--login.active
                background: var(--theme-primary)
                color: var(--theme-primary)

            &--signup.active::after, &--login.active::after
                background: var(--theme-secondary)

            &--signup.active::after
                border-radius: 0 var(--border-radius) 0 0
            &--login.active::after
                border-radius: var(--border-radius) 0 0 0

            // not active
            &--signup:not(.active), &--login:not(.active)
                background: var(--theme-secondary)
                color: var(--theme-secondary)

            &--signup:not(.active)::after
                border-radius: 0 0 var(--border-radius) 0
            &--login:not(.active)::after
                border-radius: 0 0 0 var(--border-radius)

            &--signup:not(.active)::after, &--login:not(.active)::after
                background: var(--theme-primary)





.login-body
    overflow: hidden
    flex: 1
    padding: 2rem



@media screen and (max-width: 768px)
    .login
        width: 100%
        height: 100%
        border-radius: 0px

.backdrop
    position: fixed
    top: 0
    left: 0
    width: 100svw
    height: 100svh
    background: rgba(0, 0, 0, 0.8)


.slide-in-enter-active,
.slide-in-leave-active,
.fade-enter-active,
.fade-leave-active
    transition: all 0.5s ease-in-out

.slide-in-enter-to,
.slide-in-leave-from
    opacity: 1
    top: 50%
    transform: translateY(-50%)


.slide-in-enter-from,
.slide-in-leave-to
    opacity: 0
    top: 50%
    transform: translateY(0%)

.fade-enter-from,
.fade-leave-to
    opacity: 0
</style>
