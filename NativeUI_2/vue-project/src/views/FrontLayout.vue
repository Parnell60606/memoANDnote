<template>
  <!-- 主題變量↓ -->
  <!-- <n-config-provider :theme-overrides="themeOverrides" inline-theme-disabled preflight-style-disabled> -->
  <n-config-provider :theme-overrides="themeOverrides">

    <n-layout style="height: 100vh; background:antiquewhite; position: relative;">

      <!-- topbar ----------------------------------------------------------------------------->
      <n-layout-header>

        <n-space justify=" space-between">
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



          <div class="login-logout">

            <n-message-provider>
              <RegisterModal />
            </n-message-provider>
          </div>

        </n-space>

      </n-layout-header>

      <!-- 前台網頁內容(渲染) ----------------------------------------------------------------------------->
      <n-layout-content content-style="padding: 24px;">

        <div class="container">

          <n-message-provider>
            <router-view></router-view>
          </n-message-provider>

        </div>

      </n-layout-content>

      <!-- Footer ----------------------------------------------------------------------------->
      <n-layout-footer>
        敷忒r

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

        <!-- 測試用 登出 -->
        <n-message-provider>
          <LogoutModal />
        </n-message-provider>


      </n-layout-footer>

    </n-layout>



  </n-config-provider>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import themeOverrides from '../assets/theme'


</script>

<script>

</script>


<style scoped>
.n-layout-header,
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

.login-logout {
  line-height: 44px;
  /* align-items: center; */
  /* justify-content: center; */
}


a,
a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}

.n-layout-header a {
  color: white;
  /* color: white !important; */
}

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
