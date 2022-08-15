import 'dotenv/config'
// 開網站即可接收資料
import express from 'express'
// mongoDB操作工具
import mongoose from 'mongoose'
// 跨域套件
import cors from 'cors'
import usersRoute from './routes/users.js'


// 連接mondoDB (網址放在.env)
// DB_URL是環境變數可以自己設
mongoose.connect(process.env.DB_URL)

const app = express()

// 讀取 req.body 的 json
app.use(express.json())

app.use('/users', usersRoute)

// 請求方法 (post進 根目錄 的請求會引用這個function)
app.post('/')

// 監聽 (跟line機器人一樣)
app.listen(process.env.PORT || 4000, () => {
    console.log('Server States')
})
