<script setup>
import themeOverrides from './assets/theme.js'


</script>

<template>

    <!-- <n-config-provider :theme-overrides="themeOverrides" inline-theme-disabled preflight-style-disabled> -->
    <!-- <n-config-provider :theme-overrides="themeOverrides" inline-theme-disabled> -->

    <n-message-provider>
        <router-view></router-view>
    </n-message-provider>

    <!-- </n-config-provider> -->
</template>

