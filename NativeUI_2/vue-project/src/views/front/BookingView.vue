<template>


    <h1>訂位</h1>

    <n-divider />

    <n-space justify="center" :size="50">

        <n-space vertical>

            <div class="booking-display my-5">
                今天的訂位人數： <br>
                目前場內人數：{{ nowPeople }}
            </div>

        </n-space>

        <n-progress style="margin: 0 8px 12px 0" type="circle" :percentage="20" />

    </n-space>


    <div class="row my-2 my-sm-5">

        <div class="col-4" />
        <div class="col-4">
            <n-popover trigger="hover" placement="right-end">
                <template #trigger>
                    <n-button strong secondary type="primary" block round>訂位</n-button>
                </template>
                <span>登入會員即可線上訂位</span>
            </n-popover>
        </div>
    </div>


    <!-- 表單 -->

    <n-message-provider>
        <UserOrderform />
    </n-message-provider>






</template>

<script setup>

const nowPeople = ref(null)

</script>

<style scoped>
/* h1 {
    margin-left: 150px;
} */




.booking-display {
    font-size: large;
}
</style>