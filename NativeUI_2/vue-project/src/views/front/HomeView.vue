<template>
    <div class="container-relative">
        <!-- <video muted id="first-page-video" src="../video/pexels-kelly-lacy-6769802.mp4" autoplay="true" loop="true" /> -->

        <!-- <video muted id="video2"
            src="https://cdn.videvo.net/videvo_files/video/free/2020-02/large_watermarked/200223_Cafe_03_09_preview.mp4"
            autoplay="true" loop="true" /> -->


        <video muted id="video2"
            src="https://cdn.videvo.net/videvo_files/video/free/2020-03/large_watermarked/200223_Cafe_03_40_preview.mp4"
            autoplay="true" loop="true" />
    </div>

    <h1>首頁 </h1>
</template>


<style>
body {
    margin: 0;
}
</style>




<style scoped>
.container-relative {
    height: 100vh;

}

#first-page-video {
    position: absolute;
    left: 0;
    top: 0px;

    width: 100vw;
    filter: contrast(40%) brightness(120%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}


#video2 {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100vw;
    filter: contrast(90%) brightness(60%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}


#video3 {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100vw;
    filter: contrast(90%) brightness(60%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}
</style>