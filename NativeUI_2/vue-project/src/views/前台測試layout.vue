<template>
    <n-layout style="height: 100vh; background:antiquewhite; position: relative;">
        <n-layout-header>

            <n-space justify=" space-between">
                <n-tabs type="bar" size="large">
                    <n-tab name="關於我們">
                        <router-link to="/about">
                            關於我們
                        </router-link>
                    </n-tab>
                    <n-tab name="菜單">
                        <router-link to="/menu">
                            菜單
                        </router-link>
                    </n-tab>
                    <n-tab name="位置">
                        <router-link to="/location">
                            位置
                        </router-link>
                    </n-tab>
                    <n-tab name="訂位">
                        <router-link to="/booking">
                            訂位
                        </router-link>
                    </n-tab>
                    <n-tab name="聯絡我們">
                        <router-link to="/contactus">
                            聯絡我們
                        </router-link>
                    </n-tab>
                </n-tabs>



                <div class="login-logout">

                    <n-message-provider>
                        <RegisterModal />
                    </n-message-provider>
                </div>

            </n-space>


        </n-layout-header>


        <n-layout-content content-style="padding: 24px;">
            <!-- <n-layout-content class="front-content"> -->
            <!-- <n-layout-sider content-style="padding: 24px;">
                海淀桥
            </n-layout-sider> -->
            <!-- <n-layout content-style="padding: 24px;"> -->
            <!-- 切畫面的地方 -->

            <n-message-provider>
                <router-view></router-view>
            </n-message-provider>

            <!-- </n-layout> -->
        </n-layout-content>

        <n-layout-footer>
            敷忒r
        </n-layout-footer>
    </n-layout>


    <!-- 測試用 連往管理者後台 -->
    <router-link to="/adminlayout">
        <div>
            ～go to admin後台～
        </div>
    </router-link>

</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<script>

</script>


<style scoped>
.n-layout-header,
.n-layout-footer {
    /* background: rgba(128, 128, 128, 0.2); */
    background: #363B4B;
    padding: 24px;
    color: white;
}

.n-layout-header a {
    color: white !important;
}


.n-tabs-bar {
    background: white !important;
}

/* .n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
    min-width: 500px;
    max-width: 500px !important;
} */

.n-layout-content {
    background: #F0F0EA;
}



.login-logout {
    line-height: 44px;
    /* align-items: center; */
    /* justify-content: center; */
}


a,
a:link,
a:visited {
    text-decoration: none;
    color: inherit;
}



@media (max-width:576px) {
    /* .n-layout-sider {
        background: rgba(128, 128, 128, 1);
        min-width: 20px;
        max-width: 20px !important;
    } */

    h1 {
        color: red;
    }
}
</style>
