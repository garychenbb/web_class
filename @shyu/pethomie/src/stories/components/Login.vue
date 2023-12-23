<script setup>
defineProps({
    // 接口：接父層來的props
    showLogin: Boolean,
});

const login = [];
</script>

<template>
    <dialog :open="showLogin">
        <div class="dialog-header">
            <div class="dialog-header-tab">註冊</div>
            <div class="dialog-header-tab">登入</div>
        </div>
    </dialog>
</template>

<style scoped>
dialog {
    position: fixed;
    width: min(600px, 100%);
    height: min(600px, 100%);
    top: 50%;
    padding: 0;
    transform: translateY(-50%);
}

.dialog-header {
    display: flex;
}

.dialog-header-tab {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: blue 1px solid;
}
</style>
