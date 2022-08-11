<template>
    <!-- 登入註冊頁面 (用n-card來做) -->
    <div>

        <n-card :bordered="false">


            <n-tabs default-value="signin" size="large" justify-content="space-evenly" animated>
                <n-tab-pane name="signin" tab="登入會員">

                    <n-form>
                        <n-form-item-row label="帳號" v-model="form.account">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="密碼" v-model='form.password'>
                            <n-input />
                        </n-form-item-row>
                    </n-form>

                    <n-button type="primary" block secondary strong round>
                        登入
                    </n-button>

                </n-tab-pane>



                <n-tab-pane name="signup" tab="註冊">

                    <n-form>
                        <n-form-item-row label="姓名">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="帳號">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="密碼">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="信箱">
                            <n-input />
                        </n-form-item-row>
                        <n-form-item-row label="連絡電話">
                            <n-input />
                        </n-form-item-row>
                    </n-form>

                    <n-button type="primary" block secondary strong round>
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
const form = reactive({
    account: '',
    password: ''
})

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
