<template>
    <h1>我的帳戶</h1>

    <!-- 抓自己的個人資料 -->


    <n-card title="個人資料" header-style="padding: 50px;" content-style="padding: 50px;" footer-style="padding: 50px;"
        size="large" :segmented="{
            content: true,
            footer: 'soft'
        }" hoverable>





        <template #header-extra>
            <div>
                <n-text v-if="!userInfo.avatar" depth="3">用戶還沒上傳大頭貼</n-text>
                <n-button v-if="!userInfo.avatar" secondary round>上傳大頭貼</n-button>
            </div>
        </template>

        <n-h4>用戶名：{{ userInfo.userName }}</n-h4>
        <n-h4>帳號：{{ userInfo.account }}</n-h4>
        <n-h4>email：{{ userInfo.email }}</n-h4>
        <n-h4>帳號：{{ userInfo.account }}</n-h4>


        <template #footer>
            <n-text depth="3" v-if="userInfo.pastOrders.length === 0">您尚未建立任何訂單</n-text>
            <div v-if="userInfo.pastOrders.length !== 0">{{ userInfo.pastOrders }}</div>

        </template>


    </n-card>







</template>


<script setup>
import { reactive } from 'vue'
import { api, apiAuth } from '../../plugins/axios'
import { useRouter } from 'vue-router'
// import { useUserStore } from '../../stores/user';
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'



// const user = useUserStore()
// const { getUser } = user
// getUser()


// const route = useRoute()
// const user = useUserStore()

const router = useRouter()



// const orders = reactive([])


const userInfo = reactive({
    account: '',
    userName: '',
    email: '',
    avatar: '',
    pastOrders: ''
})





const getUser = async () => {
    try {
        // const { data } = await apiAuth.get('/users/getUser')
        // const { data } = await api.get('/users/getUser')


        const { data } = await apiAuth.get('/users/getuser')



        userInfo.account = data.result.account
        userInfo.userName = data.result.userName
        userInfo.email = data.result.email
        userInfo.avatar = data.result.avatar
        userInfo.pastOrders = data.result.pastOrders

        console.log(userInfo)




        // console.log(data.result._id) // undefine




    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '無法取得訂單'
        })
    }
}
getUser()
</script>