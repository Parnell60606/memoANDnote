import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

// 個別引入的時候要用??
import naive from 'naive-ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
