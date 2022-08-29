import users from '../models/users.js'
import orders from '../models/orders.js'
import jwt from 'jsonwebtoken'
import products from '../models/products.js'




// copy

// // 建立訂單
/* export const createOrder = async (req, res) => {
    try {
        // 用cart陣列內物件數判斷購物車484空的
        if (req.user.cart.length === 0) {
            return res.status(400).send({ success: false, message: '購物車為空' })
        }

        // 抓 該user 的 cart
        let result = await users.findById(req.user._id, 'cart').populate('cart.product')
        // 判斷商品是不是被下架
        const canCheckout = result.cart.every(item => item.product.sell)
        if (!canCheckout) {
            return res.status(400).send({ success: false, message: '包含下架商品' })
        }

        // 新增訂單  欄位：
        // {
        //    user: req.user._id,
        //    products: req.user.cart
        //  }

        result = await orders.create({ user: req.user._id, products: req.user.cart })
        req.user.cart = []

        // 把修好的值傳回數據庫
        await req.user.save()

        // 回傳訂單id
        // 前台在抓id做其他操作 (在前台應該就是order._idㄅ)
        res.status(200).send({ success: true, message: '', result: result._id })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
} */

/* memo
    檢查有沒有重複訂單
        1. 同使用者 (一個會員一次只能訂一筆)
            - 同使用者的待審核訂單
        2. 同使用者且同日期

    orders 資料
    1.抓會員資料
        (只要特定資料  id name phone email
            １. orders schema連會員id (只傳id)， controller再控制要撈的特定資料
            ２. orders schema直接撈會員的特定資料

    2.放前台傳的其他訂單細節  (人數等)

    - (老師檔案做法) 傳會員id就好，後台那邊再拔使用者特定資料 (id name phone email)
    前台：  {{ order.user.account }}  <<顯示order裡面的user的account屬性
        */


/* 一個訂單裡面
    user 的 id name phone email 資料 (fk)
    orders 那邊 前台form 回傳的資料
*/


// 1. 還沒驗證  2. createOrder 要把該訂單資料放到 users.pastorder  會員過去訂單
export const createOrder = async (req, res) => {
    // if (req.body.orderStatus === 1) return res.status(400).send({ success: false, message: '一個會員一次只能訂一筆訂單' })
    // console.log(req.body.orderStatus) // undefine

    // 在會員資料裡面找的話 ， 應該用 這個就好   const result = await users.findById(req.user._id, 'cart').populate('cart.product') 
    // 在所有訂位裡面找 同id  orderStatus 為1 的人

    //  // 找出 _id 為 123 的資料，但只顯示 _id, name, price 三個欄位
    // > db.products.find( { _id: "ac3" } , { name:1,price:1} ) 


    // const youHaveOrdered = orders.find({ user: req.user._id }, { orderStatus: 1 })
    // if ()
    try {

        // console.log(youHaveOrdered)

        const result = await orders.create({
            user: req.user._id,
            numberOfPeople: req.body.numberOfPeople,
            bookingDate: req.body.bookingDate,
            bookingTime: req.body.bookingTime,
            usersNote: req.body.usersNote,
            orderStatus: req.body.orderStatus,
            isFieldBooking: req.body.isFieldBooking
        })
        res.status(200).send({ success: true, message: '', result: result._id })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            return res.status(400).send({ success: false, message })
        } else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).send({ success: false, message: '40404(order)' })
        } else {
            res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
    }
}






//  查過去訂單
export const getMyPastOrders = async (req, res) => {
    try {
        // 用過去訂單數量判斷user過去有沒有訂單
        if (req.user.pastOrders.length === 0) {
            return res.status(400).send({ success: false, message: '過去沒有訂單' })
        }

        // 用前台傳來的userID 來查詢 pastOrders(過去訂單)  ，populate (把fk連往另一個schema的資料也傳過來)
        let result = await users.findById(req.user._id, 'pastOrders').populate('pastOrders.order')
        // 可以使用 Population 功能通過關聯Schema的 field 找到關聯的另一個 document，並且用被關聯 document 的內容替換掉原來關聯欄位(field)的內容。

        //  新增訂單   (其他訂單資料該怎麼寫)
        result = await orders.create({
            user: req.user._id,

            userName: req.user._id,

            numberOfPeople: req.user.numberOfPeople,
            bookingTime: req.user.bookingTime,
            usersNote: req.user.usersNote,
            orderStatus: req.user.orderStatus
        })
        await req.user.save()
        res.status(200).send({ success: true, message: '', result: result._id })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}






//
export const getMyOrders = async (req, res) => {
    try {
        //
        const result = await orders.find({ user: req.user._id }).populate('products.product')
        res.status(200).send({ success: true, message: '', result })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}


// TEST   用ID查訂單
export const getMyOrder = async (req, res) => {
    try {
        const result = await orders.findById(req.params.id)
        if (!result) {
            console.log(result)
            res.status(404).json({ success: false, message: '找不到資料(try catch order' })
        } else {
            res.status(200).json({ success: true, message: '', result })
        }
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}



// 要帶著token抓
export const getAllOrders = async (req, res) => {
    try {
        // .populate('user', 'account')
        // 自動抓 user 欄位對應的 ref 資料，只取 account 欄位
        const result = await orders.find().populate('user', 'userName')
        res.status(200).send({ success: true, message: '', result })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}




// 編輯

// export const editCart = async (req, res) => {
//     try {
//       if (req.body.quantity <= 0) {
//         await users.findOneAndUpdate(
//           { _id: req.user._id, 'cart.product': req.body.product },
//           {
//             $pull: {
//               cart: { product: req.body.product }
//             }
//           }
//         )
//         // const idx = req.user.cart.findIndex(item => item.product.toString() === req.body.product)
//         // req.user.cart.splice(idx, 1)
//         // await req.user.save()
//       } else {
//         await users.findOneAndUpdate(
//           { _id: req.user._id, 'cart.product': req.body.product },
//           {
//             $set: {
//               // $ 代表符合陣列搜尋條件的索引
//               'cart.$.quantity': req.body.quantity
//             }
//           }
//         )
//         // const idx = req.user.cart.findIndex(item => item.product.toString() === req.body.product)
//         // req.user.cart[idx].quantity = req.body.quantity
//         // await req.user.save()
//       }
//       res.status(200).send({ success: true, message: '' })
//     } catch (error) {
//       if (error.name === 'ValidationError') {
//         const key = Object.keys(error.errors)[0]
//         const message = error.errors[key].message
//         return res.status(400).send({ success: false, message })
//       } else {
//         res.status(500).send({ success: false, message: '伺服器錯誤' })
//       }
//     }
//   }