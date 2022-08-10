<template>
    <h1>抓元件寬高（響應式）</h1>
    <h2>原本是測試在 TodaysOrder.vue ㄉ</h2>
    <!-- <n-space justify="space-around"> -->
    <!-- <n-space justify="center"> -->




    <div class="box2" id="test" ref="el">
        Height: {{ height }} <br>
        Width: {{ Width }} <br>
        元件面積（響應式）：{{ fullArea }}<br>
        元件高度（響應式）：{{ heightView }}<br>
        元件寬度（響應式）：{{ widthView }}<br>
    </div>



    <!-- </n-space> -->




</template>


<script>

import { defineComponent, ref, computed, onUpdated } from "vue";
import { useElementSize } from '@vueuse/core'


// 抓ㄅ到
// const test = document.getElementById('test')
// const widthTest = test.offsetWidth
// console.log(widthTest)



export default defineComponent({
    setup() {
        const el = ref(null)
        const { width, height } = useElementSize(el)

        onUpdated(() => {


            // DOM元素將在轉換狀態之後分配給ref
            console.log(el.value)
            console.log(height.value)
            console.log(width.value)
            // heightA = height.value

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



        return {
            el,
            width,
            height,
            fullArea,
            heightView,
            widthView,
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
.box2 {
    background-color: aquamarine;
    /* max-width: 500px; */
    /* min-width: 500px; */
    /* width: 500px; */
    /* height: 500px; */
}
</style>
