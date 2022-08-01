import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import users from './models/users'

// DB_URL是環境變數可以自己設
mongoose.connect(process.env.DB_URL)

const app = express()

// 請求方法 (post進 根目錄 的請求會引用這個function)
app.post('/')

// 監聽 (跟line機器人一樣)
app.listen(process.env.PORT || 4000, () => {
    console.log('Server States')
})