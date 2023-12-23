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
            url: "#",
        },
        {
            type: "link",
            label: "寵物知識",
            url: "#",
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
            label: "SHOP",
            url: "#",
        },
        {
            type: "link",
            label: "LOGIN",
            url: "#",
        },
    ],
];

const emit = defineEmits(["updateShowLogin"]); //接收父組件傳來的方法

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
                        :href="item.url"
                        @click="handleClick(showLogin)"
                    >
                        <img
                            v-if="item.type == 'img'"
                            :src="item.label"
                            class="nav-item-img"
                        />
                        <span v-else>
                            {{ item.label }}
                        </span>
                    </a>
                    <a v-else :href="item.url">
                        <img
                            v-if="item.type == 'img'"
                            :src="item.label"
                            class="nav-item-img"
                        />
                        <span v-else>
                            {{ item.label }}
                        </span>
                    </a>
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

.nav-item-img {
    width: min(100%, 100px);
    position: relative;
    top: 1.5rem;
}
</style>
