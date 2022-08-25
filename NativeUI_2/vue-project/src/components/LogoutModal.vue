<template>

    <n-button @click="showModal = true" round>
        <div>登出</div>
    </n-button>
    <!-- <n-modal v-model:show="showModal" :style="bodyStyle" preset="dialog" title="登出" content="確定要登出嗎？" positive-text="是"
        negative-text="否" @positive-click="submitCallback" @negative-click="cancelCallback" :header-style="headerStyle"> -->
    <n-modal v-model:show="showModal" :style="bodyStyle" preset="card" negative-text="否">

        <n-spin v-model:show="showLoading">

            <div style="padding:5px 24px ;">
                確定要登出嗎？
            </div>

        </n-spin>

        <template #footer>

            <n-space justify="end" style="padding:0 5px ;" size="large">

                <!-- <n-button @click="submitCallback, showLoading = true" type="primary"> -->
                <n-button @click="submitCallback, logout" type="primary">
                    是
                </n-button>

                <n-button @click="cancelCallback" type="primary" ghost>
                    否
                </n-button>

            </n-space>

        </template>

    </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import RegisterView from "../views/front/RegisterView.vue";




// import { useUserStore } from '../stores/user'
// const user = useUserStore()
// const { logout } = user


export default defineComponent({
    setup() {
        const message = useMessage();
        const showModalRef = ref(false);
        const showLoadingRef = ref(false);

        window.$message = useMessage();
        return {
            // user,
            // logout,
            showLoading: showLoadingRef,
            showModal: showModalRef,
            bodyStyle: {
                // width: "fit-content",
                width: "500px",
                backdropFilter: "blur(6px) brightness(150%)",
            },
            cancelCallback() {
                message.success("Cancel", { showIcon: false });
                showModalRef.value = false

            },
            submitCallback() {
                // 0.6秒的 loading 提示
                message.loading("", { duration: 600 });

                showLoadingRef.value = true,



                    // console.log(showModalRef)
                    // console.log(showModalRef.value)


                    /* 抓 showModalRef 的 value 回傳 false，0.7秒後把視窗關掉 */
                    setTimeout(() => {
                        message.success("登出成功");
                        showModalRef.value = false;
                        showLoadingRef.value = false;

                    }, 800)
            },

        };
    },
    components: { RegisterView }
});
</script>

<style scoped>
.n-modal-mask {
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(2px) !important;
}
</style>