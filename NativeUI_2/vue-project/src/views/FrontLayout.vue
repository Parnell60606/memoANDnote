<template>
  <!-- 主題變量↓ -->
  <!-- <n-config-provider :theme-overrides="themeOverrides" inline-theme-disabled preflight-style-disabled> -->
  <n-config-provider :theme-overrides="themeOverrides">

    <n-layout style="height: 100vh; background:antiquewhite;" :native-scrollbar="false">

      <!-- topbar ----------------------------------------------------------------------------->
      <n-layout-header>

        <n-space justify=" space-between">

          <n-space :size="48">

            <router-link to="/">
              <img src="../assets/copy_somepeoples_logo_white_onlyfont.svg" width="40" alt="logo">
            </router-link>


            <n-tabs type="bar" size="large">
              <n-tab name="關於我們">
                <router-link to="/about">
                  關於我們
                </router-link>
              </n-tab>
              <n-tab name="菜單">
                <router-link to="/menu">
                  菜單
                </router-link>
              </n-tab>
              <n-tab name="位置">
                <router-link to="/location">
                  位置
                </router-link>
              </n-tab>
              <n-tab name="訂位">
                <router-link to="/booking">
                  訂位
                </router-link>
              </n-tab>
              <n-tab name="聯絡我們">
                <router-link to="/contactus">
                  聯絡我們
                </router-link>
              </n-tab>
            </n-tabs>

          </n-space>


          <n-space class="header-end-button" :size="24">


            <div class="admin" v-if="isAdmin">
              <n-button round>
                <router-link to="/admin">
                  <div>管理者後台</div>
                </router-link>
              </n-button>
            </div>


            <div class="menber" v-if="isLogin && !isAdmin">
              <n-button round>
                <router-link to="/menber">
                  <div>我的訂單</div>
                </router-link>
              </n-button>
            </div>





            <div class="login-logout">

              <n-message-provider>

                <RegisterModal v-if="!isLogin" />

                <!-- <LogoutModal v-if="isLogin" /> -->
                <!-- logoutModal的Pinia怪怪的會404 代替↓ -->
                <n-button @click="logout" round v-if="isLogin">
                  <div>登出</div>
                </n-button>

              </n-message-provider>
            </div>


          </n-space>

        </n-space>

      </n-layout-header>

      <!-- 前台網頁內容(渲染) ----------------------------------------------------------------------------->
      <!-- <n-layout-content content-style="padding: 24px;"> -->
      <n-layout-content>


        <div class="container">

          <n-message-provider>
            <router-view></router-view>
          </n-message-provider>

        </div>

      </n-layout-content>

      <!-- Footer ----------------------------------------------------------------------------->
      <n-layout-footer>

        <n-space justify="space-around" :size="72">

          <img src="../assets/copy_somepeoples_logo_white.svg" width="100" alt="logo">

          <div class="footer-menu">
            <p>首頁</p>
            <p>關於我們</p>
            <p>位置</p>
            <p>訂位</p>
            <p>聯絡我們</p>

          </div>

          <div class="footer-contact">
            <p>地址：24302新北市泰山區貴子里<br>致遠新村55之1號</p>
            <p>電話：02-0000-0000</p>
            <p>傳真：02-0000-0000</p>
            <p>admin@address.com </p>

          </div>

        </n-space>



        <br>
        <!-- 測試用 連往管理者後台 -->
        <router-link to="/admin">
          <div class="test-button">
            admin後台
          </div>
        </router-link>

        <!-- 測試用 連往會員後台 -->
        <router-link to="/menber">
          <div class="test-button">
            會員後台
          </div>
        </router-link>



      </n-layout-footer>

    </n-layout>



  </n-config-provider>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'

// naive 的 主題變量
import themeOverrides from '../assets/theme'



import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

</script>



<style scoped>
.n-layout-header {
  background: #363B4B;
  padding: 16px;
  color: white;

}

.n-layout-footer {
  /* background: rgba(128, 128, 128, 0.2); */
  background: #363B4B;
  padding: 24px;
  color: white;
}




/* .n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
    min-width: 500px;
    max-width: 500px !important;
} */

.header-end-button {
  /* display: flex; */
  line-height: 48px;
  /* align-items: center; */
  /* justify-content: center; */
}


a,
a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}

/* .n-layout-header a {
  color: white;
} */




.test-button {
  background: rgba(245, 222, 179, 0.2);
  display: inline-block;
  /* width: 20px; */
  height: 30px;
  padding: 10px 30px;
  margin: 0 30px;
  border-radius: 25px;
  transition: background 0.4s ease-in-out 0.1s;

}

.test-button:hover {
  background: #232630;
}



@media (max-width:576px) {
  /* .n-layout-sider {
        background: rgba(128, 128, 128, 1);
        min-width: 20px;
        max-width: 20px !important;
    } */

  h1 {
    color: red;
  }
}
</style>
