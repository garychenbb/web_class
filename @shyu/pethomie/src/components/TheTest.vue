<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });

import axios from "axios";
import { onMounted, ref } from "vue";

const getTestData = async () => {
    await axios.get("/test/getData").then((response) => {
        const data = response.data;

        data.forEach((ele) => {
            TestList.value.push(ele);
        });
    });
};
const TestList = ref([]);

onMounted(() => {
    getTestData();
    console.log(TestList);
});
</script>

<template>
    <div class="notebook">
        <div v-for="question in TestList">
            {{ question.question }}
        </div>

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
</template>

<style scoped>
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
