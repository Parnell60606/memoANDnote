import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'  // jwt抓前台資料
import admin from '../middleware/admin.js'   // admin權限

import {
    createOrder,
    getMyOrder,
    getAllOrders

} from '../controllers/orders.js'

// 建立路由
const router = express.Router()


// 還沒有jwt
// router.post('/', auth.jwt, createOrder)

router.post('/', auth.jwt, createOrder)
// router.post('/create', content('multipart/form-data'), auth.jwt, createProduct)


// try
router.get('/getbyid/:id', getMyOrder)



// 怪怪的先刪auth.jwt 
router.get('/all', auth.jwt, admin, getAllOrders)
// router.get('/all', admin, getAllOrders)


export default router

