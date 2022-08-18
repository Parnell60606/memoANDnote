<template>
    <!-- 有時間的做輪播圖切影片 -->

    <div id="first-page">
        <router-link to="/home">
            <!-- <img src="https://picsum.photos/1980/960/?random=10"> -->

            <!-- <video
            src="https://cdn.videvo.net/videvo_files/video/free/2020-03/large_watermarked/200223_Cafe_03_41_preview.mp4"
            autoplay="true" loop="true" /> -->


            <video muted id="first-page-video" src="../assets/video/pexels-kelly-lacy-6769802.mp4" autoplay="true"
                loop="true" />



            <div class="center-icon">
                <img src="../assets/copy_somepeoples_logo_white.svg" alt="copylogo" id="logo">
                <div id="enter-button">
                    點擊進入網頁
                </div>
            </div>

        </router-link>
    </div>




</template>

<script>
</script>

<style >
body {
    margin: 0;
}
</style>



<style scoped>
#first-page {
    max-height: 100vh;
    overflow: hidden;
}

#first-page-video {
    /* position: absolute; */
    width: 100vw;
    /* filter: contrast(40%) brightness(120%); */
    filter: contrast(60%) brightness(90%);

    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}

.center-icon {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: none;


    opacity: .5;
    /* opacity: 1; */
    transition: all 0.5s ease-out 0.1s;

}


.center-icon:hover {
    opacity: 1;
    /* background: rgba(26, 43, 38, 0.404); */
    backdrop-filter: blur(5px) brightness(70%) contrast(120%);

}


#logo {
    width: 20%;


    /* 微調(因為這個logo重心比較偏) */
    transform: translate(-8%);

    opacity: 0.4;
    transition: opacity 0.5s ease-out 0.1s;
}

#logo:hover {
    opacity: 1;
}


/* 進入網頁 */
#enter-button {
    /* opacity: 0.8; */

    color: white;

    font-size: calc(2vw - 2px);

    border: 1px solid white;
    border-radius: 20px;
    padding: 12px 24px;
    margin: 32px;


    opacity: 0.2;
    transition: all 0.4s ease-out 0.1s;
}

#enter-button:hover {
    opacity: 1;
    /* background: #ffffff11; */
    /* filter: brightness(2); */
    backdrop-filter: brightness(130%);
}
</style>