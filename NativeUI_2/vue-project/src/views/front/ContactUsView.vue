<template>
    <h1>聯絡我們</h1>

    <n-divider />


    <!-- 測試 -->
    <n-message-provider>
        <TestVue />
    </n-message-provider>

    <n-message-provider>
        <RegisterView />
    </n-message-provider>

</template>


<script setup>
import RegisterView from "./RegisterView.vue";
import TestVue from "./TestVue.vue";


</script>