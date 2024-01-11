<script setup>
import { ref } from "vue";

import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";

const showLogin = ref(false);

const updateShowLogin = (isShow) => {
    isShow ? (showLogin.value = false) : (showLogin.value = true);
};
</script>

<template>
    <Navbar :showLogin="showLogin" @updateShowLogin="updateShowLogin"></Navbar>
    <div>{{ showLogin }}</div>
    <Login :showLogin="showLogin" @updateShowLogin="updateShowLogin"></Login>

    <!-- routerView -->
    <RouterView></RouterView>
</template>
