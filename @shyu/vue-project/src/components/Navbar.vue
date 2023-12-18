<script setup>
defineProps({
    // 接口：接父層來的props
});

const listItem = [
    {
        type: "link",
        label: "CAT",
        url: "#",
    },
    {
        type: "link",
        label: "DOG",
        url: "#",
    },
    {
        type: "img",
        label: "../assets/logo.png",
        url: "#",
    },
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
];
</script>

<template>
    <nav class="nav-wrapper">
        <ul>
            <li v-for="(item, index) in listItem" :key="item.index">
                <a :href="item.url">
                    <img v-if="item.type == 'img'" :src="item.label" />
                    <span v-else>
                        {{ item.label }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
