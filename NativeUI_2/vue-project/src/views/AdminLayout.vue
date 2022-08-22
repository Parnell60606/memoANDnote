<template>



    <div style="  background: powderblue;">

        <n-layout>

            <n-layout has-sider class="content" style="height: 100vh;background: brown;">
                <!-- sidebar ---------------------------------------------------------------->
                <!-- <n-layout-sider collapse-mode="transform" :collapsed-width=testWidth :width=300 show-trigger="bar"
                    content-style="padding: 40px;" :native-scrollbar="false" bordered> -->
                <n-layout-sider collapse-mode="transform" :collapsed-width=20 :width=300 show-trigger="bar"
                    content-style="padding: 40px;" :native-scrollbar="false" bordered>


                    <RouterLink to="/admin">
                        <div id="admin-title">管理者後台</div>
                    </RouterLink>

                    <nav>

                        <RouterLink to="/todaysorder">
                            <n-h2>今天的訂單</n-h2>
                        </RouterLink>

                        <n-divider />

                        <RouterLink to="/ordersview">
                            <n-h2>全部的訂單</n-h2>
                        </RouterLink>

                        <n-h2>- 尚未確認</n-h2>
                        <n-h2>- 已確認</n-h2>
                        <n-h2>- 已取消</n-h2>
                        <n-divider />

                        <n-h2>新增現場訂單</n-h2>

                        <RouterLink to="/backgrounddata">
                            <n-h2>觀看數據</n-h2>
                        </RouterLink>

                        <br>

                        <RouterLink to="/">
                            <n-h2>+ 回前台 </n-h2>
                        </RouterLink>
                    </nav>
                </n-layout-sider>


                <!-- 右側訂單顯示區(主要內容) ---------------------------------------->
                <n-layout content-style="padding: 24px 50px;" style=" position: relative;">


                    <!-- <n-message-provider>
                        <data-tabletest />

                        <model-test />

                    </n-message-provider> -->


                    <n-message-provider>
                        <router-view />
                    </n-message-provider>


                    <div class="space" style="height: 500px;"></div>

                    <div class="container">
                        <div class="row">
                            <div class="col-4 red">5555</div>
                        </div>
                    </div>


                </n-layout>
            </n-layout>


        </n-layout>

    </div>

</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent, watch } from 'vue';





</script>

<script>

/* const windowWidth = ref(window.innerWidth);

const windowHeight = window.innerHeight;

console.log(windowWidth)
console.log(windowWidth.value)

let testWidth = ref(20)

if (windowWidth.value <= 576) {
    testWidth = ref(100)
} */

export default {
    // name: "Register",

    // props: {
    //     testWidth: {
    //         type: Number,
    //         default: 0
    //     },
    // },

    /* setup(props) {            // receive `props` argument
        props.testWidth();     // use it to access `testWidth`
    } */
}

/* 
    RWD
    取值修改值 響應式
*/

</script>


<style scoped>
.topbar {
    height: 200px;
    background: #F0F0EA;
}

.n-layout-sider {
    background: #363b4b;
    /* min-width: 0px; */

    /* height: 100vh;
  background: #F0F0EA; */
}

.n-scrollbar {
    /* min-width: 0px; */
    max-width: 600px;

}


.n-layout-sider .n-h2 {
    color: whitesmoke;
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
    color: rgba(245, 245, 245, 0.5);
    font-weight: 600;

}



h1 {
    margin: 0 0 20px 0;
    margin-bottom: 50;

    color: black;
}

nav .n-h2:hover {
    background: #292c38;
}



a,
a:link,
a:visited {
    text-decoration: none;
    color: inherit;
}






@media (max-width: 576px) {
    .n-layout-sider {
        min-width: 0;
        max-width: 0px;
    }

    h1 {
        color: red;
    }

    aside {
        width: 100px;
        max-width: 50px;
    }

    .n-scrollbar {
        width: 50%;
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


