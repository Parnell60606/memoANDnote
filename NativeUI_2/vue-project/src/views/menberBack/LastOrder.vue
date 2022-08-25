<template>
    <h2>目前的訂位</h2>
    <!-- <h3>最後一張訂單</h3> -->

    <div class="container">
        <div class="my-last-order">


            <n-card content-style="padding: 50px;" size="large" :segmented="{
                content: true,
                footer: 'soft'
            }">
                <n-h3 v-if="order.orderStatus === 1">
                    <n-spin stroke="orange" /> 您的訂單正在確認中，請稍後
                </n-h3>

                <n-divider />

                <n-h4>訂單id：{{ order._id }}</n-h4>
                <n-h4>訂單狀態：{{ order.orderStatus }}</n-h4>



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



        </div>
    </div>


</template>


<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, apiAuth } from '../../plugins/axios'
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()


const order = reactive({
    _id: '',
    orderStatus: ''

})


const getOrderTest = async () => {
    try {
        // 用id抓訂單
        const { data } = await api.get('/orders/getbyid/6305dfe4d962f7aa83980687/')
        order._id = data.result._id
        order.orderStatus = data.result.orderStatus
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '取得訂單資料失敗'
        })
        // router.go(-1)
    }
}
getOrderTest()




</script>


<style scoped>
.my-last-order {
    padding: 24px;
}
</style>