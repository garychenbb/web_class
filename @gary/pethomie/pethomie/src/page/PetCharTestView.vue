<script setup>
import PetcharTestHome from '../components/PetCharTestHome.vue'
import Navbar from '../components/Navbar.vue'
</script>
<template>
    <div class="Container">
        <div class="background"></div>

        <Navbar></Navbar>
        <PetcharTestHome></PetcharTestHome>
    </div>
</template>
<style scoped>
.Container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
}
.background {
    position: absolute; /*權限比上層 flex 大*/
    background-image: url('../assets/petchartest/background.png');
    width: 100%;
    height: 100%;
    opacity: 30%;
    top: 0px;
    left: 0px;
    z-index: -1001; /*將圖層下降一層*/
    animation: bg-move 50s linear infinite;
}

@keyframes bg-move {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 100% 100%;
    }
}
</style>
