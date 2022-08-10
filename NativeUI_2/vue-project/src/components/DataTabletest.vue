<template>
    <!-- <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" :max-height="700"
        striped /> -->
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" striped />

</template>

<script>
import { h, defineComponent } from "vue";
import { NButton, useMessage } from "naive-ui";
import { useElementSize } from '@vueuse/core'





const createColumns = ({
    play
}) => {
    return [
        {
            title: "No",
            key: "no"
        },
        {
            title: "Title",
            key: "title"
        },
        {
            title: "Length",
            key: "length"
        },
        {
            title: "Action",
            key: "actions",
            render(row) {
                return h(NButton, {
                    strong: true,
                    tertiary: true,
                    size: "small",
                    onClick: () => play(row)
                }, { default: () => "Play" });
            }
        }
    ];
};

const data = [
    { no: 3, title: "Wonderwall", length: "4:18" },
    { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
];

export default defineComponent({
    setup() {

        const el = ref(null)
        const { width, height } = useElementSize(el)

        const message = useMessage();
        window.$message = useMessage()
        return {
            el,
            width,
            height,


            data,
            columns: createColumns({
                play(row) {
                    message.info(`Play ${row.title}`);
                }
            }),
            // 分頁
            pagination: {
                pageSize: 10
            }
        };
    }
});
</script>

<style scoped>
</style>