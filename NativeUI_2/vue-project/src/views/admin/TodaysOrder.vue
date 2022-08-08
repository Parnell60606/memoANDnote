<template>
    <h1>今天～的～訂單～</h1>
    <!-- <n-space justify="space-around"> -->
    <n-space justify="center">

        <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
            @update:value="handleUpdateValue" class="calendar">
            {{ year }}-{{ month }}-{{ date }}
        </n-calendar>

        <div class="box">
            <n-message-provider>
                <data-tabletest />
            </n-message-provider>
        </div>

    </n-space>



</template>


<script>

import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { isYesterday, addDays } from "date-fns/esm";

export default defineComponent({
    setup() {
        const message = useMessage();
        window.$message = useMessage()
        return {
            value: ref(addDays(Date.now(), 1).valueOf()),
            handleUpdateValue(_, { year, month, date }) {
                message.success(`${year}-${month}-${date}`);
            },
            isDateDisabled(timestamp) {
                if (isYesterday(timestamp)) {
                    return true;
                }
                return false;
            }
        };
    }
});

</script>


<style scoped>
/* ---- 直排 ---- */
/* .calendar {
    max-width: 1400px;
    min-width: 1000px;
    height: 400px;
    margin-bottom: 30px;
} */

/* .box {
    width: 1000px;
    margin-left: 50px; */

/* 不知道為什麼有偏移的微調 */
/* transform: translate(-30px, 0);
} */


/* ---- 橫排 ---- */
.calendar {
    height: 800px;
}

.box {
    width: 500px;
    margin-left: 50px;
}


@media (max-width:1400px) {
    .calendar {
        max-width: 1000px;
        min-width: 800px;
    }
}

@media (max-width:1200px) {
    .calendar {
        max-width: 800px;
        min-width: 100%;
    }
}
</style>
