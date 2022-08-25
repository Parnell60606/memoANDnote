<template>
    <!-- 
    name 
    email
    phone
    預計到場時間


 -->
    <n-card>


        <n-grid cols="12">


            <n-form-item-gi :span="12" label="用戶資料">
                會員名稱：testtest 手機：testtest 電子郵件：testtest

            </n-form-item-gi>

            <n-form-item-gi :span="12" label="form標題">
                <n-input round placeholder="中" />

            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Date" path="datetimeValue">
                <n-date-picker v-model:value="model.dateValue" type="date" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Input Number" path="inputNumberValue">
                <n-input-number v-model:value="model.inputNumberValue" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Time Picker" path="timePickerValue">
                <n-time-picker v-model:value="model.timePickerValue" />
            </n-form-item-gi>

            <!-- 怪怪ㄉ -->
            <!-- <n-form-item-gi :span="12" label="Auto Complete" path="autoCompleteValue">
                <n-auto-complete v-model:value="model.autoCompleteValue" :options="autoCompleteOptions"
                    placeholder="Email" />
            </n-form-item-gi> -->

            <n-form-item-gi :span="12" label="Auto Complete" path="autoCompleteValue">
                <n-auto-complete v-model:value="model.autoCompleteValue" placeholder="Email" />
            </n-form-item-gi>


        </n-grid>

    </n-card>

</template>



<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
    setup() {
        const formRef = ref(null);
        const message = useMessage();
        window.$message = useMessage();

        return {
            updateDisabled: ref(false),
            formRef,
            model: ref({
                dateValue: null,
                autoCompleteValue: "",
            }),
            inputNumberValue: null,
            timePickerValue: null,
            rules: {
                dateValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 dateValue"
                },
                inputNumberValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 inputNumberValue"
                },
                timePickerValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 timePickerValue"
                },
                // autoCompleteOptions: computed(() => {
                //     return ["@gmail.com", "@yahoo.com.tw"].map((suffix) => {
                //         const prefix = model.value.autoCompleteValue.split("@")[0];
                //         return {
                //             label: prefix + suffix,
                //             value: prefix + suffix
                //         };
                //     });
                // })
            }
        }
    }
});
</script>