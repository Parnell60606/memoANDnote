<template>
    <n-button @click="showModal = true" round>
        <div>登出</div>
    </n-button>
    <n-modal v-model:show="showModal" :style="bodyStyle" preset="dialog" title="登出" content="確定要登出嗎？" positive-text="是"
        negative-text="否" @positive-click="submitCallback" @negative-click="cancelCallback" :header-style="headerStyle">



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
            cancelCallback() {
                message.success("Cancel");
            },
            submitCallback() {
                message.success("登出");
            }

        };
    },
    components: { RegisterView }
});
</script>

<style scoped>
</style>