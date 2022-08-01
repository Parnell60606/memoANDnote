<template>
    <n-card title="卡片分段示例" :segmented="{
        content: true,
        footer: 'soft'
    }">
        <template #header-extra>
            #header-extra
        </template>
        卡片内容
        <template #footer>
            #footer
        </template>
        <template #action>
            #action
        </template>
    </n-card>
</template>
