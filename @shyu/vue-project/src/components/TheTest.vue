<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
    <div class="test-wrapper">
        <div class="notebook">
            <div class="backdrop">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcset="../assets/notebook.png"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcset="../assets/notebook_mb.png"
                    />
                    <img src="" alt="" srcset="" />
                </picture>
            </div>

            <div class="content"></div>
        </div>
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

.notebook {
    position: relative;
    width: min(100%, 550px);
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
</style>
