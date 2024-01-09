<script setup>
const navbarContent = [
    {
        type: 'link',
        label: 'CAT',
        url: '/cat'
    },
    {
        type: 'link',
        label: 'DOG',
        url: '/dog'
    },
    {
        type: 'link',
        label: '寵物知識',
        url: '#'
    },
    {
        type: 'img',
        label: '/src/assets/logo.png',
        url: '/'
    },
    {
        type: 'link',
        label: '寵物測驗',
        url: '/petchartest'
    },
    {
        type: 'link',
        label: 'SHOP',
        url: '#'
    },
    {
        type: 'link',
        label: 'LOGIN',
        url: '#'
    }
]
</script>

<template>
    <div class="navbar-background">
        <div class="navbar-content">
            <!-- 每一個物件 -->
            <a class="navbar-item" v-for="(value, index) in navbarContent" :href="value.url">
                <div class="navbar-logo" v-if="value.type == 'img'">
                    <img :src="value.label" />
                </div>
                <div v-else>
                    {{ value.label }}
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.navbar-background {
    background-color: #ece3d1;
    height: 3rem;
    width: 100%;
    position: fixed;
    top: 0;
}

.navbar-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-evenly;
}

.navbar-item {
    display: flex;
    justify-content: center;
    color: #706c66;
    height: 100%;
    align-items: center;
    cursor: pointer;
    width: 6rem;
}

.navbar-logo {
    /* relative: 根據本身位置做位移 */
    position: relative;
    height: 5rem;
    width: 5rem;
    top: 1rem;
}
</style>
