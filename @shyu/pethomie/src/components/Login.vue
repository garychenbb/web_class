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
</script>

<template>
    <Transition name="fade">
        <div
            v-if="showLogin"
            @click="handleClick(showLogin)"
            class="backdrop"
        ></div>
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
                    <div class="login-header-tab-backdrop"></div>
                </div>
                <div
                    class="login-header-tab login-header-tab--login"
                    :class="{ active: activeTab === 'login' }"
                    @click="activeTab = 'login'"
                >
                    <div class="login-header-tab-title">登入</div>
                    <div class="login-header-tab-backdrop"></div>
                </div>
            </div>

            <!-- body -->
            <div class="login-body">
                <div class="login-wrapper" v-if="activeTab == 'signin'">
                    <div class="login-option">
                        <div class="login-icon login-icon-google">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                            >
                                <path
                                    d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                                />
                            </svg>
                        </div>
                        <p class="login-info">使用Google註冊</p>
                    </div>
                    <div class="login-option">
                        <div class="login-icon login-icon-fb">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                                />
                            </svg>
                        </div>
                        <p class="login-info">使用Facebook註冊</p>
                    </div>
                    <!-- <div @click="handleClick(showLogin)">我是叉叉</div> -->
                </div>
            </div>
        </dialog>
    </Transition>
</template>

<style lang="sass" scoped>


.login
    --theme-primary: #454545
    --theme-secondary: #ffffff
    --shodow-normal: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.15)
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
    background: transparent

    &-header
         display: flex
         border-radius: var(--border-radius)

         &-tab
            position: relative
            flex: 1
            text-align: center
            cursor: pointer
            font-size: 1.25rem
            font-weight: bolder
            padding: 0.5rem
            background: var(--theme-secondary)
            &:not(.active)
                background: var(--theme-primary)
                color: var(--theme-secondary)

            &-backdrop
                position: absolute
                inset: 0
                z-index: -1001
                background: var(--theme-primary)
                &:not(.active .login-header-tab-backdrop)
                    background: var(--theme-secondary)


            &--login
                &:not(.active)
                    border-radius: 0 0 0 var(--border-radius)
                &.active
                    color: var(--theme-primary)
                    border-radius: var(--border-radius) 0 0 0

            &--signup
                &:not(.active)
                    border-radius: 0 0 var(--border-radius) 0
                &.active
                    color: var(--theme-primary)
                    border-radius: 0 var(--border-radius) 0 0

            &-title
                position: relative
                z-index: 1001







.login-body
    overflow: hidden
    flex: 1
    padding: 2rem
    background: white

.login-wrapper
    display: flex
    flex-direction: column
    gap: 1rem
.login-option
    position: relative
    background: var(--theme-primary)
    border-radius: 999px
    display: flex
    color: var(--theme-secondary)
    font-weight: bolder
    font-size: 1.25rem
    cursor: pointer
    padding-block: 1.25rem
    padding-inline: 1.25rem
    transition: all 0.25s ease-in-out
    &:hover
        filter: brightness(120%)
    &:active
        filter: brightness(100%)

    .login-icon
        position: absolute
        top: 50%
        transform: translateY(-50%)
        height: 65%

        svg
            width: 100%
            height: 100%
            fill: var(--theme-secondary)
    .login-info
        flex-grow: 1
        text-align: center


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
    background: rgba(0, 0, 0, 0.25)




// transition propertie
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
