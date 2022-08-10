<template>
    <h1>今天～的～訂單～</h1>
    <!-- <n-space justify="space-around"> -->
    <!-- <n-space justify="center"> -->


    <n-grid cols="1 800:10 1200:16 1500:16" x-gap="20 1200:40 " item-responsive>

        <n-grid-item span="1 400:3 800:6  1200:8 " offset="0 1200:1"
            style="background-color:lightblue;max-width: 800px;">

            <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
                @update:value="handleUpdateValue" class="calendar">
                {{ year }}-{{ month }}-{{ date }}
            </n-calendar>
        </n-grid-item>


        <n-grid-item span="1 400:3 800:4  1200:6 " style="background-color:brown;">
            <div class="data-box">
                <n-message-provider>
                    <!-- <data-tabletest :max-height="700" /> -->
                    <data-tabletest />

                </n-message-provider>
            </div>

        </n-grid-item>
    </n-grid>



    <div class="box2" id="test" ref="el">
        Height: {{ height }} <br>
        <!-- Width: {{ Width }} <br> -->
        元件面積（響應式）：{{ fullArea }}<br>
        元件高度（響應式）：{{ heightView }}<br>
        元件寬度（響應式）：{{ widthView }}<br>
    </div>



    <!-- </n-space> -->




</template>


<script>

import { defineComponent, ref, computed, onUpdated } from "vue";
import { useMessage } from "naive-ui";
import { isYesterday, addDays } from "date-fns/esm";
import { useElementSize } from '@vueuse/core'



export default defineComponent({
    setup() {
        const el = ref(null)
        const { width, height } = useElementSize(el)

        onUpdated(() => {
            // DOM元素將在轉換狀態之後分配給ref
            console.log(el.value)
            console.log(height.value)
            console.log(width.value)
        })

        // 函式運算後回傳
        const fullArea = computed(() => {
            return height.value * width.value
        })

        const heightView = computed(() => {
            return height.value
        })


        const widthView = computed(() => {
            return width.value
        })



        const message = useMessage();
        window.$message = useMessage()

        return {
            el,
            width,
            height,
            fullArea,
            heightView,
            widthView,

            value: ref(addDays(Date.now(), 1).valueOf()),
            handleUpdateValue(_, { year, month, date }) {
                message.success(`${year}-${month}-${date}`);
            },
            isDateDisabled(timestamp) {
                if (isYesterday(timestamp)) {
                    return true;
                }
                return false;
            },

        };
    },




    /*     onUpdated() {
            const el = ref(null)
            const { width, height } = useElementSize(el)
    
            // DOM元素將在轉換狀態之後分配給ref
            console.log(el.value)
            console.log(height.value)
            console.log(width.value)
            const heightA = height.value
            return {
                el,
                width,
                height,
                heightA
            }
        } */
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
/* .calendar {
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
} */


.box2 {
    background-color: aquamarine;
    /* max-width: 500px; */
    /* min-width: 500px; */
    /* width: 500px; */
    /* height: 500px; */
}

@media (max-width:1000px) {
    .calendar {
        max-height: 500px;
    }

    /* .data-box {
        max-height: 300px;
    } */
}
</style>
