/* 會員登入 */

import { defineStore } from 'pinia'  // 定義一個 ID 為 user 的 store
import { api, apiAuth } from '@/plugins/axios'
import router from '../router'  // 抓 router資烙夾

// 測試用
import Swal from 'sweetalert2'  // 之後再改寫


/* ↓ 老師ㄉ扣 copy */
export const useUserStore = defineStore({
    // 初始狀態，使用箭頭函式
    id: 'user',
    state: () => ({
        token: '',
        account: '',
        role: 0,
        // cart: 0  // 我的 schema 結構沒有cart的表
    }),
    // 可以先將資料處理好用傳出
    getters: {
        // 判斷是不是會員，有沒有登入
        isLogin() {
            return this.token.length !== 0
        },
        isAdmin() {
            return this.role === 1
        },
        avatar() {
            // 訪客圖像   網址 + this.account    << 此網址會自動產生img
            return 'https://source.boringavatars.com/beam/120/' + this.account
        }
    },
    // 修改狀態用的 function
    actions: {
        async login(form) {
            try {
                const { data } = await api.post('/users/login', form)
                this.token = data.result.token
                this.account = data.result.account
                this.role = data.result.role
                this.cart = data.result.cart
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '登入成功'
                })
                router.push('/')
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: '失敗',
                    text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
                })
            }
        },
        async logout() {
            try {
                // await api.delete('/users/logout', {
                //   headers: {
                //     authorization: `Bearer ${this.token}`
                //   }
                // })
                await apiAuth.delete('/users/logout')
                router.push('/')
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '登出成功'
                })
            } catch (_) {
            }
            this.token = ''
            this.account = ''
            this.role = 0
            this.cart = 0
        }
    }
})
