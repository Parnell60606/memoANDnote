<template>
    <!-- 登入註冊頁面 (用n-card來做) -->
    <div>

        <n-card :bordered="false" id="register">


            <n-tabs default-value="signin" size="large" justify-content="space-evenly" animated>

                <!-- 登入 ------------------------------------------------------------>
                <n-tab-pane name="signin" tab="登入會員">
                    <!-- <n-form :model="formLogin" :rules="rulesLogin"> -->
                    <n-form :model="form" ref="formRef" :rules="rules" @submit.prevent='login'>
                        <!-- @submit.prevent  提交後不刷新頁面 -->


                        <n-form-item-row label="帳號" path="account">
                            <n-input v-model:value="form.account" placeholder="請輸入帳號" />
                        </n-form-item-row>

                        <h1>測試帳號 {{ form.account }}</h1>
                        <h1>測試密碼 {{ form.password }}</h1>

                        <!-- <n-form-item-row label="密碼" :rules="rules.password" path="password"> -->
                        <n-form-item-row label="密碼" path="password">
                            <n-input v-model:value="form.password" placeholder="請輸入密碼" />
                        </n-form-item-row>

                        <n-button attr-type="submit" :loading="loading" type="primary" block secondary strong round>
                            登入
                        </n-button>

                    </n-form>
                </n-tab-pane>




                <!-- @submit.prevent='register'  把換頁擋下來的function (submit按鈕會自動換頁) -->
                <n-tab-pane name="signup" tab="註冊">

                    <!-- <n-form :model="formRegister" ref="formRef" :rules="rules">
                        <n-form-item-row label="姓名" path="name">
                            <n-input v-model:value="formRegister.name" placeholder="請輸入使用者名稱" />
                        </n-form-item-row>
                        <n-form-item-row label="帳號" path="account">
                            <n-input v-model:value="formRegister.account" placeholder="請輸入八到十五個英文或數字" />
                        </n-form-item-row>
                        <n-form-item-row label="密碼">
                            <n-input placeholder="請輸入八到十五個英文或數字" />
                        </n-form-item-row>
                        <n-form-item-row label="信箱">
                            <n-input placeholder="請輸入信箱" />
                        </n-form-item-row>
                        <n-form-item-row label="連絡電話">
                            <n-input v-model:value="formRegister.phone" label="請輸入連絡電話" />
                        </n-form-item-row>
                    </n-form> -->


                    <!-- <h1>測試name {{ form.userName }}</h1>
                    <h1>測試帳號 {{ form.account }}</h1>
                    <h1>測試密碼 {{ form.password }}</h1>
                    <h1>測試email {{ form.email }}</h1>
                    <h1>測試442 {{ form.phone }}</h1> -->


                    <!-- register ------------------------------------------------------------>
                    <n-form :model="form" ref="formRef" :rules="rules" @submit.prevent='register'>

                        <n-form-item-row label="姓名" path="userName">
                            <n-input v-model:value="form.userName" placeholder="請輸入使用者名稱" />
                        </n-form-item-row>
                        <n-form-item-row label="帳號" path="account">
                            <n-input v-model:value="form.account" placeholder="請輸入八到十五個英文或數字" />
                        </n-form-item-row>
                        <n-form-item-row label="密碼" path="password">
                            <n-input v-model:value="form.password" placeholder="請輸入八到十五個英文或數字" />
                        </n-form-item-row>
                        <n-form-item-row label="信箱" path="email">
                            <n-input v-model:value="form.email" placeholder="請輸入信箱" />
                        </n-form-item-row>
                        <n-form-item-row label="連絡電話" path="phone">
                            <n-input v-model:value="form.phone" label="請輸入連絡電話" />
                        </n-form-item-row>

                        <n-button attr-type="submit" :loading="loading" type="primary" block secondary strong round>
                            註冊
                        </n-button>
                    </n-form>

                </n-tab-pane>



            </n-tabs>
        </n-card>
    </div>
</template>


<style scoped>
.n-card {
    /* 
        登入頁面寬度最大 500
        背景透明 (避免疊色)
     */
    max-width: 500px;
    background: transparent;
}
</style>


<script setup>
import { isEmail } from 'validator'
import Swal from 'sweetalert2'
import { api } from '../../plugins/axios'
import { useRouter } from 'vue-router'

// 登入或註冊後跳轉至首頁
import { useUserStore } from '../../stores/user'


// 登入用pinia 的 difineStore   (放在 store/user
const user = useUserStore()



import axios from 'axios';

const router = useRouter()

const formRef = ref(null)
const message = useMessage();
window.$message = useMessage();


const loading = ref(false);


// reactive
// const formLogin = ref({
//     account: '',
//     password: ''
// })


const form = ref({
    //   login register 的 formValue合併
    // 註冊登入按鈕事件分開寫
    userName: '',
    account: 'aaaaaaaa',
    password: 'aaaaaaaa',
    email: '',
    phone: ''
})

// 老師的檔案是reactive
// const formRegister = ref({
//     account: '',
//     password: '',
//     email: '',
//     phone: '',
//     userName: ''
// })






const rules = reactive({
    // async-validator 套件的規則
    account: {
        required: true,
        // pattern 怪怪的優先權會跑掉
        // min max validator 優先權也怪怪的
        // pattern: /^[A-Za-z0-9]+$/,
        // min: 5,


        // message 執行優先度比 validator 高


        validator(rule, value,) {
            if (!value) {
                return new Error("請輸入帳號")
            } else if (form.value.account.length > 15) {
                return new Error("帳號請在15字以內（包含15個字）")
            } else if (form.value.account.length < 5) {
                return new Error("帳號請在5個字以上（包含5個字）")
            } else if (!/^[A-Za-z0-9]+$/.test(value))
                return new Error("請輸入半形英文數字，避免特殊符號")
        },


        // message: "格式錯誤",
        trigger: ["input", "blur"]
    },
    password: {
        required: true,
        validator(rule, value) {
            if (!value) {
                return new Error("請輸入密碼")
            } else if (form.value.password.length > 15 || form.value.password.length < 5 || !/^[A-Za-z0-9]+$/.test(value))
                return new Error("請輸入5~15個半形英文數字，避免特殊符號")
        },
        // message: "請輸入5~15字半形英文或數字",
        trigger: ["input", "blur"]
    },
    email: {
        // type: 'email',
        required: true,
        // 去除空格之後在檢驗
        // transform (value) {
        //     // do something
        //     return value.trim()
        // },

        validator(rule, value) {
            if (!value) {
                console.log(form.value.email)
                return new Error("請輸入電子信箱")

            }
            else if (!isEmail(form.value.email))
                return new Error("信箱格式錯誤")
        },
        // message: "請輸入電子郵件",
        trigger: ["input", "blur"]

    },
    phone: {
        required: true,
        pattern: /^[0-9]+$/,
        message: "請輸入電話號碼",

        validator(rule, value) {
            if (!value) {
                console.log(form.value.phone)
                return new Error("請輸入電話號碼")

            }
            else if (form.value.phone.length < 5 || form.value.phone.length > 19 || !/^[0-9]+$/.test(value))
                return new Error("電話號碼格式錯誤")
        },

        trigger: ["input", "blur"]
    },
    userName: {
        required: true,
        max: 10,
        message: "請輸入10字以內的用戶名稱",
        trigger: ["input", "blur"]

    }
})







// console.log(rules.account)
// console.log(rules.password)

// const register = async () => {
//     if (!formRef.value) return


// }

const handleValidateClick = (e) => {

    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success("Valid");
        } else {
            console.log(errors);
            message.error("Invalid");

        }
    });

}




const register = async () => {
    if (!form.value) return
    try {
        //  api.post ('http://localhost:4000/users')
        // 因為前面的 form是用ref ，所以 要用form.value傳資料
        await api.post('/users', form.value)
        await Swal.fire({
            icon: 'success',
            title: '成功',
            text: '註冊成功'
        })
        // 登入成功後跳到首頁
        router.push('/home')
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
        console.log(error.type)
    }
    loading.value = false
}


const formValue = form.value

const login = () => {
    user.login(formValue)
}

</script>


