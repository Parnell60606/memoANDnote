import axios from 'axios'
import { useUserStore } from '../stores/user.js'
import router from '../src/router'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_API
})
// axios ---> axios 攔截請求 --> API SERVER --> axios 攔截回應 --> 呼叫的地方
apiAuth.interceptors.request.use(config => {
    const user = useUserStore()
    config.headers.authorization = `Bearer ${user.token}`
    return config
})
apiAuth.interceptors.response.use(res => {
    return res
}, error => {
    // 如果請求有回應
    if (error.response) {
        // 如果是 401，可能是 JWT 過期
        if (error.response.status === 401) {
            // 確認原始請求的網址不是延長登入，才重新登入
            if (error.config.url !== '/users/extend' && error.config.url !== '/users/logout') {
                const user = useUserStore()
                // 傳送延長請求
                return apiAuth.post('/users/extend', {}).then(({ data }) => {
                    // 更新 JWT
                    user.token = data.result
                    // 使用新的 JWT 再次嘗試原始請求
                    error.config.headers.authorization = `Bearer ${user.token}`
                    return axios(error.config)
                }).catch(_ => {
                    // 重新登入失敗，強制登出
                    user.logout()
                    // 回傳延長登入請求的錯誤訊息到呼叫的地方
                    return Promise.reject(error)
                })
            }
        }
    }
    return Promise.reject(error)
})
