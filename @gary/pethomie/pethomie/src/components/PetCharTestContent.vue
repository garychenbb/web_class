<script setup>
</script>
<template>
            <div class="background"></div>
            <div class="container">
                <div>
                    <img src="../assets/petchartest/notebook.png" alt="">
                </div>
                <div class="notebook-context">
                    <div class="content-head">
                        <div class="content-item-left" >Q1</div>
                        <div class="content-item-right" >2/8</div>
                    </div>
                    <div>
                        <img src="../assets/petchartest/f6b8265d724f8732a11c3113beaa8bb1.png" alt="">
                    </div>
                    <div class="question">你週末最喜歡做的事情是:</div>
                    <div class="options-box">
                        <div class="option-box">
                            <div class="custom-check-box">
                                <input type="radio" name="option-box" id="1">
                                <svg class="vector-2" width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.90012L18.8 26.7001L44 1.50012" stroke="#FCBB55" stroke-width="7"/>
                                </svg>
                            </div>
                            <label class="answer_style" for="1">閱讀一本好書</label>
                        </div>
                        <div class="option-box">
                            <div class="custom-check-box">
                                <input type="radio" name="option-box" id="2">
                                <svg class="vector-2" width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.90012L18.8 26.7001L44 1.50012" stroke="#FCBB55" stroke-width="7"/>
                                </svg>
                            </div>

                            <label class="answer_style" for="2">戶外運動或散步</label>
                        </div>
                        <div class="option-box">
                            <div class="custom-check-box">
                                <input type="radio" name="option-box" id="3">
                                <svg class="vector-2" width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.90012L18.8 26.7001L44 1.50012" stroke="#FCBB55" stroke-width="7"/>
                                </svg>
                            </div>
                            <label class="answer_style" for="3">跟朋友聚會</label>
                        </div>
                    </div>
                    <div class="btns">
                        <button class="btn">主頁</button>
                        <button class="btn btn-next">下一題</button>
                    </div>
                </div>
            </div>
</template>
<style scoped>
body {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "MaokenAssortedSans";
}

body img {
    height: auto;
    width: 100%;
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

.container {
    position: relative; 
    background-color: aqua;
    width: 40%;
}

.notebook-context {
    /*設定與父元素的定位*/
    position: absolute;
    /* background-color: rgba(255, 0, 0, 30%); */
    top: 22%;
    left: 16%;
    right: 16%;
    bottom: -5%;
    /*設定內容排序的規則: 規則、排列、方向*/
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem; 
}

.content-head {
    /* background-color: #F5A459; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
  
.content-item-left {
    font-size: 2rem;
    color: #706b67;
}

.content-item-right {
    font-size: 2rem;
    color: #cbcbcb;
}
  
.question {
    /* background-color: #F5A459; */
    color: #706b67;
    width: 100%;
    font-size: 1.5rem;
}
  
.options-box {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: aqua; */
    gap: 1rem;
}

.option-box {
    width: 100%;
    /* background-color: #F5A459; */
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-direction: row;
    gap: 0rem;
}
  
.option-box input[type="radio"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-color: black;
    border-style: solid;
}

.option-box input[type="radio"]:checked ~svg{
    display: block;
    margin: 0px 0px 0px 0.7rem;
}

.option-box input[type="radio"]:checked{
    margin: 0px 0px 0px 1rem;
}

.custom-check-box {
    position: relative;
    display: flex;
    align-items: center;
}
  
.custom-check-box svg {
    display: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.answer_style {
    color: #706b67;
    width: 90%;   
    margin: 0% 0% 0% 5%;
    font-size: 1.5rem;
}

.btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 2rem;
}

.btn {
    width: 7.5rem;
    height: 3rem;
    font-size: 1.5rem;
    font-family: "MaokenAssortedSans";
    text-align: center;
    color: white;
    border-style: none;
    background-color: #72665b;
    border-radius: 2rem;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    cursor: pointer;
}

.btn-next {
    background-color: #f5a459;
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