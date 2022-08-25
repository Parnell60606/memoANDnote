import { createPinia } from 'pinia'
// 存local storage (測試的時候先不加)
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
