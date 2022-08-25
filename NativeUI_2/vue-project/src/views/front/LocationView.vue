<template>
    <n-divider title-placement="left">
        <!-- <n-h1>聯絡我們</n-h1> -->
        <h1>聯絡我們</h1>
    </n-divider>


    <!-- <iframe id="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28908.58607832358!2d121.415352!3d25.082449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1659929053841!5m2!1szh-TW!2stw"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->



    <n-grid cols="1 992:2 1500:16" x-gap="20 992:50 " item-responsive>

        <n-grid-item span="1 992:1 ">


            <iframe id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28920.67269759234!2d121.43036950264123!3d25.031220284669423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1661386923959!5m2!1szh-TW!2stw"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </n-grid-item>


        <n-grid-item span="1 992:1 ">

            <n-h2 prefix="bar">聯絡資訊</n-h2>
            <n-card embedded class="contact-us">
                <n-ul>
                    <n-li style="padding: 12px;">地址：24302新北市泰山區貴子里致遠新村55之1號</n-li>
                    <n-li style="padding: 12px;">電話：02-0000-0000</n-li>
                    <n-li style="padding: 12px;">傳真：02-0000-0000</n-li>
                    <n-li style="padding: 12px;">admin@address.com </n-li>
                </n-ul>

            </n-card>





        </n-grid-item>
    </n-grid>


    <br><br><br>

    <div class="loaction-text">
        <n-h2 prefix="bar">交通方式</n-h2>
        <p>地址：24302新北市泰山區貴子里致遠新村55之1號</p>

        <p>泰山職業訓練場交通位置描述：位於明志科技大學校內，由工專路進入明志校內，沿明一路/泰山職訓中心路標而上，約800公尺。</p>

        <p>交通描述一： 公車、捷運</p>

        <p>1.公車：三重客運(637、638)、指南客運(797、798、801、858、880、883、1501、1503)，至明志科技大學站下車。</p>
        <p>2.新北市泰山區公車(泰山區579明志國小-台北車站)：至貴子路下車後，步行至貴子路口左轉明志路3段，明志路直行約100公尺至工專路右轉，再直行即可至明志科技大學。</p>
        <p>3.捷運：臺北捷運中和新蘆線至丹鳳站1號出口或桃園捷運機場線至泰山貴和站（明志科大）1號出口，再轉乘公車或騎乘YouBike微笑單車（約10~15分鐘）至明志科技大學。</p>

        <p>交通描述二：自行開車</p>
        <p>1.高速公路五股交流道下(往新莊、泰山)，經新五路至新北大道右轉，直行至貴子路口右轉，貴子路直行至明志路左轉。於明志路繼續前行約100公尺右轉工專路，即可抵達明科技大學。</p>
        <p>2.由台北車站走忠孝橋，直行高架道路，下到平面道路之後直行至貴子路口右轉，貴子路直行至明志路左轉，於明志路繼續前行約100公尺右轉工專路，即可抵達明科技大學。</p>
        <p>3.明志科大「汽車」停車費30元/小時，請儘量搭乘大眾交通工具或機車(免停車費)。</p>

    </div>


    <div id="test">▲</div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 500px;
    border: 0;
}

#test {
    position: absolute;
    left: 50%;
    /* right: 0; */
    transform: translate(-50%, 10%);
    margin: auto;
}
</style>