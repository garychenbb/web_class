<script setup></script>
<template>
    <div class="container">
        <div>
            <picture>
                <source media="(min-width: 768px)" srcset="../assets/petchartest/notebook.png" />
                <source media="(max-width: 767px)" srcset="../assets/petchartest/mb_notebook.png" />
                <img src="" alt="" />
                <!-- src 會自動帶入上面的 source -->
            </picture>
        </div>
        <div class="notebook-context">
            <div class="homepage_logo">
                <img src="../assets/petchartest/homepage_logo.png" alt="" />
            </div>
            <div class="title">測試你的潛在寵物人格!</div>
            <div class="homepage_image">
                <img src="../assets/petchartest/homepage_image.png" alt="" />
            </div>
            <button class="start-btn">START</button>
        </div>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    width: 300px;
    /* top: 0; */
    /* left: 50%; */
    /* transform: translate(-50%, 0%); */
    /* height: auto; */
    /* margin: auto auto; */
}

.notebook-context {
    /*設定與父元素的定位*/
    position: absolute;
    background-color: rgba(255, 0, 0, 30%);
    top: 18%;
    left: 10%;
    right: 10%;
    bottom: 5%;
    /*設定內容排序的規則: 規則、排列、方向*/
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
}

.homepage_logo {
    /* flex 內容物不用定位 */
    width: 30%;
}

.title {
    font-size: 3rem;
    text-align: center;
    width: 80%;
    color: #706b67;
}

.homepage_image {
    width: 90%;
}

.start-btn {
    font-size: 3rem;
    font-family: 'MaokenAssortedSans';
    text-align: center;
    color: #fcbb55;
    -webkit-text-stroke: 0.5px black;
    width: 80%;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    text-shadow: 3px 3px grey;
}

.start-btn:hover {
    color: #ffcf82;
}

@media screen and (max-width: 767px) {
    .container {
        width: 600px;
    }

    .background {
        animation: none;
    }
}
</style>
