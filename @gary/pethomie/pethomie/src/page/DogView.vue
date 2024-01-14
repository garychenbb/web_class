<script setup>

import { ref } from "vue";
import Dog from '../components/Dog.vue';
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue';

const isShowLogin = ref(false);
function showLogin(isShow) {
    isShow ? (isShowLogin.value = false) : (isShowLogin.value = true)
    console.log(`status: ${isShowLogin.value}`);
}

</script>
<template>
    <div class="Container">
        <Navbar :isShowLogin="isShowLogin" @showLogin="showLogin"></Navbar>        
        <Login :isShowLogin="isShowLogin" @showLogin="showLogin"></Login>
        <Dog></Dog>
    </div>
</template>
<style scoped>
</style>