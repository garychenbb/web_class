<script setup>
import { ref } from "vue";
import Navbar from '../components/Navbar.vue';
import HelloPethomie from '../components/HelloPethomie.vue';
import Login from '../components/Login.vue';

const isShowLogin = ref(false);
function showLogin(isShow) {
    isShow ? (isShowLogin.value = false) : (isShowLogin.value = true)
    console.log(`status: ${isShowLogin.value}`);
}

</script>

<template>
    <div>
        <Navbar :isShowLogin="isShowLogin" @showLogin="showLogin"></Navbar>
        <Login :isShowLogin="isShowLogin" @showLogin="showLogin"></Login>
        <!-- <HelloPethomie></HelloPethomie> -->
        <RouterView></RouterView>
    </div>
</template>
