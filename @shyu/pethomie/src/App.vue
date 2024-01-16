<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import Navbar from "../src/stories/components/Navbar.vue";
import Login from "../src/stories/components/Login.vue";

const showLogin = ref(false);

const updateShowLogin = (isShow) => {
    isShow ? (showLogin.value = false) : (showLogin.value = true);
};
</script>

<template>
    <Navbar :showLogin="showLogin" @updateShowLogin="updateShowLogin"></Navbar>

    <RouterView />
    <Login :showLogin="showLogin" @updateShowLogin="updateShowLogin"></Login>
</template>

<style scoped></style>
