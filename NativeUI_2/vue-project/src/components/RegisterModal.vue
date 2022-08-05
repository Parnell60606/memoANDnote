<template>
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
    setup() {
        const message = useMessage();
        const showModalRef = ref(false);
        window.$message = useMessage();
        return {
            showModal: showModalRef,
            bodyStyle: {
                // width: "fit-content",
                width: "500px",
                // height: "650px",
                borderRadius: "15px",
                // background: "none"
            },
            headerStyle: {
                padding: "15px 15px 0 15px",
                // margin: "5px",

            }
        };
    },
    components: { RegisterView }
});
</script>

<style scoped>
</style>