<script setup>
import axios from "axios";
import TheTest from "../components/TheTest.vue";
</script>

<template>
    <div class="test-wrapper">
        <TheTest />
    </div>
</template>

<style scoped>
.test-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100svh;
    background: url(../assets/background.png) top left/ auto repeat;
}
</style>
