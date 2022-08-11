<template>
    <!-- 有時間的做輪播圖切影片 -->

    <div id="first-page">
        <router-link to="/home">
            <!-- <img src="https://picsum.photos/1980/960/?random=10"> -->

            <!-- <video
            src="https://cdn.videvo.net/videvo_files/video/free/2020-03/large_watermarked/200223_Cafe_03_41_preview.mp4"
            autoplay="true" loop="true" /> -->
            <video muted id="first-page-video" src="./video/pexels-kelly-lacy-6769802.mp4" autoplay="true"
                loop="true" />
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
    width: 100vw;
    filter: contrast(40%) brightness(120%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}
</style>