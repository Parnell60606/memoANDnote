import users from '../models/users.js'
import orders from '../models/orders.js'

// copy

// // 建立訂單
/* export const createOrder = async (req, res) => {
    try {
        // 用cart陣列內物件數判斷購物車484空的
        if (req.user.cart.length === 0) {
            return res.status(400).send({ success: false, message: '購物車為空' })
        }
        let result = await users.findById(req.user._id, 'cart').populate('cart.product')
        // 判斷商品是不是被下架
        const canCheckout = result.cart.every(item => item.product.sell)
        if (!canCheckout) {
            return res.status(400).send({ success: false, message: '包含下架商品' })
        }
        result = await orders.create({ user: req.user._id, products: req.user.cart })
        req.user.cart = []
        await req.user.save()
        res.status(200).send({ success: true, message: '', result: result._id })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
} */


/* memo
    檢查有沒有重複訂單
        1. 同使用者 (一個會員一次只能訂一筆)
        2. 同使用者且同日期

    orders 資料
    1.抓會員資料
        (只要特定資料  id name phone email
    2.放前台傳的其他訂單細節  (人數等)
        */


export const createOrder = async (req, res) => {
    try {

        // 先拔USER資料
        const resultUser = await users.findById(req.params.id, ' name email phone')
        if (!result) {
            res.status(404).json({ success: false, message: '找不到資料' })
        } else {
            res.status(200).json({ success: true, message: '', result })
        }

        // 再拔訂單資料


        // 直接拔 orders schema裡面的  ?????? 
        // 用前台傳來的userID 來查詢 pastOrders(過去訂單)  ，populate (把fk連往另一個schema的資料也傳過來)
        let result = await users.findById(req.user._id, 'name email phone').populate('pastOrders.order')
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


        await users.create(req.body)





        await req.user.save()
        res.status(200).send({ success: true, message: '', result: result._id })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}









// 查過去訂單
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

