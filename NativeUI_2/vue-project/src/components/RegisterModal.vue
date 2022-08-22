<template>
    <!-- 登入頁面的 n-modal (彈出視窗) -->
    <n-button @click="showModal = true" round>
        <div>登入</div>
        <n-divider vertical />
        <div>註冊</div>
    </n-button>
    <n-modal v-model:show="showModal" :style="bodyStyle" :mask-closable="false" preset="card" content="確認視窗"
        class="loginlogout-modal" :header-style="headerStyle">

        <n-message-provider>
            <register-view />
        </n-message-provider>

    </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import RegisterView from "../views/front/RegisterView.vue";

export default defineComponent({
    setup () {
        const message = useMessage();
        const showModalRef = ref(false);
        window.$message = useMessage();
        return {
            showModal: showModalRef,
            bodyStyle: {
                // width: "fit-content",
                width: "500px",
                backdropFilter: "blur(6px) brightness(150%)",
                // height: "650px",
                // borderRadius: "15px",
                // background: "none"
            },
            headerStyle: {
                padding: "0px 24px 0 24px",
                transform: "translate(0px,24px)",
                zIndex: "10",

            }
        };
    },
    components: { RegisterView }
});
</script>

<style scoped>
</style>