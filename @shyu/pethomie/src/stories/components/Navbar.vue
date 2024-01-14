<script setup>
defineProps({
    // 接口：接父層來的props
    showLogin: Boolean,
});

const navContent = [
    [
        {
            type: "link",
            label: "CAT",
            url: "/cat",
        },
        {
            type: "link",
            label: "DOG",
            url: "/dog",
        },
        {
            type: "link",
            label: "寵物知識",
            url: "/knowledge",
        },
    ],
    [
        {
            type: "img",
            label: "/src/stories/assets/logo.png",
            url: "/",
        },
    ],
    [
        {
            type: "link",
            label: "寵物測驗",
            url: "/test",
        },
        {
            type: "link",
            label: "SHOP",
            url: "/shop",
        },
        {
            type: "link",
            label: "LOGIN",
            url: "/login",
        },
    ],
];

const emit = defineEmits(["updateShowLogin"]); //接收父組件傳來的 function

// 處理clicｋ事件 => 呼叫父組件傳來的 function
const handleClick = (showLogin) => {
    emit("updateShowLogin", showLogin);
};
</script>

<template>
    <nav class="nav-wrapper">
        <div class="nav-content">
            <ul v-for="(item, index) in navContent" class="nav-item-group">
                <li v-for="item in item" :key="item.index" class="nav-item">
                    <a
                        v-if="item.label == 'LOGIN'"
                        href="javascript:viod(0);"
                        @click="handleClick(showLogin)"
                    >
                        <span>
                            {{ item.label }}
                        </span>
                    </a>
                    <RouterLink v-else :to="item.url">
                        <img
                            v-if="item.type == 'img'"
                            :src="item.label"
                            class="nav-item-img"
                        />
                        <span v-else>
                            {{ item.label }}
                        </span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav-wrapper {
    background: #ece3d1;
    height: 4rem;
    display: flex;
    /* font-family: "MaokenAssortedSans"; */
}
.nav-content {
    display: flex;
    width: min(80%, 1920px);
    margin: 0 auto;
}

.nav-item-group {
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    justify-content: space-around;
    list-style: none;
}

.nav-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-weight: bolder;
    transition: 0.3s linear;
    a {
        display: flex;
        justify-content: center;
        color: #706c66;
    }

    &:hover {
        scale: 0.95;
    }
}

.router-link-active {
    color: red !important;
    /* scale: 1.25; */
    transition: all 0.25s ease-in-out;
}

.nav-item-img {
    width: min(100%, 100px);
    position: relative;
    top: 1.5rem;
}
</style>
