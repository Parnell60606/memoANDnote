<template>
    <n-dialog title="确认" content="你确定" negative-text="不确认" positive-text="确认" @positive-click="handlePositiveClick"
        @negative-click="handleNegativeClick" />
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
    setup() {
        window.$message = useMessage()
        const message = useMessage();
        return {
            handleNegativeClick() {
                message.warning("no");
            },
            handlePositiveClick() {
                message.success("yes!!!!");
            }
        };
    }
});
</script>