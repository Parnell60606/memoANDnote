<!-- <template> -->
    <!-- 登入註冊頁面 (用n-card來做) -->
    <!-- <div> -->

    <!-- <n-card :bordered="false" id="register"> -->


    <!-- <n-tabs default-value="signin" size="large" justify-content="space-evenly" animated> -->

    <!-- <n-tab-pane name="signin" tab="登入會員"> -->

    <!-- <n-form :model="formLogin" :rules="rulesLogin"> -->
    <!-- <n-form :model="formLogin" ref="formRef" :rules="rules" @submit.prevent='register'> -->
    <!-- @submit.prevent  提交後不刷新頁面 -->


    <!-- <n-form-item-row label="帳號" :rules="rules.account" path="account"> -->
    <!-- <n-form-item-row label="帳號" path="account">
                <n-input v-model:value="formLogin.account" placeholder="請輸入帳號" />
            </n-form-item-row>

            <h1>測試帳號 {{ formLogin.account }}</h1>
            <h1>測試密碼 {{ formLogin.password }}</h1> -->

    <!-- <n-form-item-row label="密碼" :rules="rules.password" path="password"> -->
    <!-- <n-form-item-row label="密碼" path="password">
                <n-input v-model:value="formLogin.password" placeholder="請輸入密碼" />
            </n-form-item-row>

            <n-button type="primary" @click="handleValidateClick" block secondary strong round attr-type="submit">
                登入
            </n-button>

        </n-form>
 -->

    <!-- </n-tab-pane> -->



    <!-- <n-tab-pane name="signup" tab="註冊">

                    <n-form :model="formRegister" ref="formRef" :rules="rules">
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
                    </n-form>

                    <n-button attr-type="submit" type="primary" block secondary strong round>
                        註冊
                    </n-button>

                </n-tab-pane> -->



    <!-- </n-tabs> -->
    <!-- </n-card> -->
    <!-- </div> -->
<!-- </template> -->


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
// import { useRouter } from 'vue-router'
// import { isEmail } from 'validator'
// import Swal from 'sweetalert2'

// const router = useRouter()

// const formRef = ref(null)
// const message = useMessage();
// window.$message = useMessage();




// // reactive
// const formLogin = ref({
//     account: '',
//     password: ''
// })

// // 老師的檔案是reactive
// const formRegister = ref({
//     account: '',
//     password: '',
//     email: '',
//     phone: '',
//     userName: ''
// })

// // async-validator 套件的規則
// const rules = reactive({
//     account: {
//         required: true,
//         // pattern: /^[A-Za-z0-9]+$/,
//         // min: 5,
//         // message 執行優先度比 validator 高


//         validator (rule, value,) {
//             if (!value) {
//                 return new Error("請填寫帳號")
//             }
//             else if (formLogin.value.account.length > 15) {
//                 return new Error("帳號請在15字以內（包含15個字）")
//             } else if (formLogin.value.account.length < 5) {
//                 console.log(formLogin.value.account.length)
//                 return new Error("帳號請在5個字以上（包含5個字）")
//             } else if (!/^[A-Za-z0-9]+$/.test(value))
//                 return new Error("請輸入半形英文數字")
//         },


//         // message: "格式錯誤",
//         trigger: ["input", "blur"]
//     },
//     password: {
//         required: true,
//         min: 5,
//         max: 15,
//         message: "請輸入5~15字半形英文或數字",
//         trigger: ["input", "blur"]
//     },
//     email: {
//         type: 'email',
//         required: true,
//         // 去除空格之後在檢驗
//         transform (value) {
//             // do something
//             return value.trim()
//         },
//         message: "請輸入電子郵件",
//     },
//     phone: {
//         type: String,
//         required: true,
//         pattern: /^[0-9]+$/,
//         message: "請輸入電話號碼",
//     },
//     userName: {
//         required: true,
//         message: "請輸入用戶名稱",
//     }
// })







// // console.log(rules.account)
// // console.log(rules.password)

// // const register = async () => {
// //     if (!formRef.value) return


// // }

// const handleValidateClick = (e) => {
//     e.preventDefault();
//     formRef.value?.validate((errors) => {
//         if (!errors) {
//             message.success("Valid");
//         } else {
//             console.log(errors);
//             message.error("Invalid");
//         }
//     });
// }






</script>

