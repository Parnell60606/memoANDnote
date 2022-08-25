import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia'

// vue 初始化時自動產生的檔案↓
// import './assets/main.css'

import './assets/test.scss'
import './assets/bootstrap-grid.css'

// 個別引入的時候要用??
import naive from 'naive-ui'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
