<template>
    <!-- 登入註冊頁面 (用n-card來做) -->
    <div>

        <n-card :bordered="false" id="register">


            <n-tabs default-value="signin" size="large" justify-content="space-evenly" animated>




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



                    <!-- 用formLogin測試 -->
                    <n-form :model="form" ref="formRef" :rules="rules">

                        <n-form-item-row label="姓名" path="name">
                            <n-input v-model:value="form.name" placeholder="請輸入使用者名稱" />
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
                        <n-form-item-row label="連絡電話">
                            <n-input v-model:value="form.phone" label="請輸入連絡電話" />
                        </n-form-item-row>
                    </n-form>

                    <n-button attr-type="submit" type="primary" block secondary strong round>
                        註冊
                    </n-button>

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
import { useRouter } from 'vue-router'
import { isEmail } from 'validator'
import Swal from 'sweetalert2'

const router = useRouter()

const formRef = ref(null)
const message = useMessage();
window.$message = useMessage();




// reactive
// const formLogin = ref({
//     account: '',
//     password: ''
// })


const form = ref({
    //   login register 的 formValue合併
    // 註冊登入按鈕事件分開寫
    account: '',
    password: '',
    email: '',
    phone: '',
    userName: ''
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


        validator (rule, value,) {
            if (!value) {
                return new Error("請輸入帳號")
            } else if (form.value.account.length > 15) {
                return new Error("帳號請在15字以內（包含15個字）")
            } else if (form.value.account.length < 5) {
                console.log(form.value.account.length)
                console.log(form.value.account)
                return new Error("帳號請在5個字以上（包含5個字）")
            } else if (!/^[A-Za-z0-9]+$/.test(value))
                return new Error("請輸入半形英文數字，避免特殊符號")
        },


        // message: "格式錯誤",
        trigger: ["input", "blur"]
    },
    password: {
        required: true,

        validator (rule, value) {
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

        validator (rule, value) {
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
        type: String,
        required: true,
        pattern: /^[0-9]+$/,
        message: "請輸入電話號碼",
        trigger: ["input", "blur"]
    },
    userName: {
        required: true,
        message: "請輸入用戶名稱",
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




/* const rulesRegister = reactive({
    rules: {
        user: {
            name: {
                required: true,
                message: "请输入姓名",
                trigger: "blur"
            },
            age: {
                required: true,
                message: "请输入年龄",
                trigger: ["input", "blur"]
            }
        },
        phone: {
            required: true,
            message: "请输入电话号码",
            trigger: ["input"]
        }
    }
}) */



</script>


<script>
// import { useRouter } from 'vue-router'
// const router = useRouter()

// export default defineComponent({
//     setup() {
//         const formRef = ref(null)
//         const message = useMessage();
//         window.$message = useMessage();
//         return {
//             formRef,
//             formLogin: ref({
//                 account: '',
//                 password: ''
//             }),
//             rules: {
//                 account: {
//                     required: true,
//                     message: "請輸入帳號",
//                     trigger: "blur"
//                 }
//                 ,
//                 password: {
//                     required: true,
//                     message: "請輸入密碼",
//                     trigger: ["input", "blur"]
//                 }
//             },
//             handleValidateClick(e) {
//                 e.preventDefault();
//                 formRef.value?.validate((errors) => {
//                     if (!errors) {
//                         message.success("Valid");
//                     } else {
//                         console.log(errors);
//                         message.error("Invalid");
//                     }
//                 });
//             }
//         }
//     }
// })

</script>

<!-- vue2  copy -->
<!-- <script>
export default {
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        login() {
            //-- write login authencation logic here! --
            let auth = true;

            if (auth)
                this.$router.push('/');
            else
                alert('login failed')
        }
    }
}
</script> -->
