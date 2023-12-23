<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";

let showLogin = false;

const updateShowLogin = (isShow) => {
    isShow ? (showLogin = false) : (showLogin = true);
};
</script>

<template>
    <Navbar :showLogin="showLogin" @updateShowLogin="updateShowLogin"></Navbar>

    <!-- routerView -->
    <RouterView></RouterView>

    <Login :showLogin="showLogin"></Login>
</template>
