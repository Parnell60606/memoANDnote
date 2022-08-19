import express from "express";
import users from "../models/users.js";

import content from '../middleware/content.js'


import {
    register,
    login,
    // getUser,
    getData,
} from '../controllers/users.js'

// auth裡面 export 是login，要這樣設定才不會衝突
import * as auth from '../middleware/auth.js'

// 建立路由
const router = express.Router()

// router.post('/', content('application/json'), register)
router.post('/', register)
//          (路由進到/login之後，在執行 login 之前先執行 auth.login)\
//           進 /login之後，先驗證再跑實際登入
router.post('/login', auth.login, login)
// router.get('/:id', getUser)

// auth.jwt >> 驗證過期就不能get
router.get('/me', auth.jwt, getData)


// http://localhost:4000/users/login   登入 
// http://localhost:4000/users/62feeb03f662a7a0c593820   查特定id會員


export default router

