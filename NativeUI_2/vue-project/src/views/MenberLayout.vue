<template>

    <n-config-provider :theme-overrides="memberBackTheme">


        <div style="  background: powderblue;">

            <n-layout class="test">

                <n-layout has-sider class="content" style="height: 100vh;background: brown;">
                    <!-- sidebar ---------------------------------------------------------------->
                    <n-layout-sider content-style="padding: 40px;">

                        <div id="admin-title">會員後台</div>



                        <nav>
                            <RouterLink to="/menber">
                                <n-h2>目前的訂位</n-h2>
                            </RouterLink>

                            <RouterLink to="/pastorders">
                                <n-h2>過去的訂位</n-h2>
                            </RouterLink>

                            <RouterLink to="/canceledorders">
                                <n-h2>取消的訂位</n-h2>
                            </RouterLink>

                            <n-divider style="margin: 50px 0;" />

                            <RouterLink to="/myinfo">
                                <n-h2>我的個人資料</n-h2>
                            </RouterLink>

                            <RouterLink to="/">
                                <n-h2>+ 回前台 </n-h2>
                            </RouterLink>
                        </nav>
                    </n-layout-sider>


                    <!-- 右側訂單顯示區(主要內容) ---------------------------------------->
                    <n-layout content-style="padding: 24px 50px;" style=" position: relative;">


                        <!-- <n-message-provider>
                        <data-tabletest :max-height="800" />
                    </n-message-provider> -->


                        <n-message-provider>
                            <router-view />
                        </n-message-provider>


                    </n-layout>
                </n-layout>


            </n-layout>

        </div>
    </n-config-provider>

</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, watch } from 'vue';


// naive 的 主題變量
import memberBackTheme from '../assets/memberBackTheme'




</script>



<style scoped>
.test {
    Color: blueviolet !important;
}

.n-layout-sider {
    background: #F0F0EA;
    /* min-width: 0px; */

    /* height: 100vh;
  background: #F0F0EA; */
}

.n-layout-sider .n-h2 {
    /* color: whitesmoke; */
    margin: 15px 0 15px 15px;
    font-size: large;
}



.n-divider {
    /* background: ; */
    opacity: 0.5;
    margin: 10px 0 35px 0;
}

#admin-title {
    font-size: xx-large;
    /* color: rgba(245, 245, 245, 0.5); */
    font-weight: 600;

}



h1 {
    margin: 0 0 20px 0;
    margin-bottom: 50;

    color: black;
}

nav .n-h2:hover {
    background: #fafaf6;
}



a,
a:link,
a:visited {
    text-decoration: none;
    color: inherit;


    background-color: aqua;
}






@media (max-width: 576px) {
    .n-layout-sider {
        min-width: 0;
        max-width: 0px;
    }

    h1 {
        color: red;
    }


}

.container {
    background: cadetblue;

    height: 500px;

}

.red {
    background: red;
}
</style>


