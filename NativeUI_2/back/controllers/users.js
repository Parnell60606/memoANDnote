// import users from '../models/users.js';

//  // 密碼加密套件 (避免被駭看光光)
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import products from '../models/products.js'



// 0621版本
// 註冊  creat new user
/* export const register = async (req, res) => {
    try {
        let result = await users.create(req.body)
        // 將 mongoose 文件格式轉成一般 JSON 物件
        result = result.toObject()
        delete result.password
        res.status(200).json({ success: true, message: '', result })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            res.status(400).json({ success: false, message })
        } else if (error.name === 'MongoError' && error.code === 11000) {
            res.status(409).json({ success: false, message: '帳號已被使用' })
        } else {
            res.status(500).json({ success: false, message: '新增失敗' })
        }
    }
}




// 0620版本
/*
export const register = async (req, res) => {
    try {
        if (!req.body.password || req.body.password.length < 8 || req.body.password.length > 20) {
            res.status(400).json({ success: false, message: '密碼格式錯誤' })
            return
        }

        req.body.password = bcrypt.hashSync(req.body.password, 10)
        await users.create(req.body)
        // 設定回應狀態碼200，並把新增的資料回傳
        // res.status(200)
        // res.json(result)
        res.status(200).json({ success: true, message: '' })
    } catch (error) {
        res.status(500).json({ success: false, message: '伺服器錯誤' })
    }
} */


// test 老師檔案
/* export const register = async (req, res) => {
    const password = req.body.password
    if (!password) {
        return res.status(400).send({ success: false, message: '缺少密碼欄位' })
    }
    if (password.length < 8) {
        return res.status(400).send({ success: false, message: '密碼必須 4 個字以上' })
    }
    if (password.length > 20) {
        return res.status(400).send({ success: false, message: '密碼必須 20 個字以下' })
    }
    if (!password.match(/^[A-Za-z0-9]+$/)) {
        return res.status(400).send({ success: false, message: '密碼格式錯誤' })
    }
    req.body.password = bcrypt.hashSync(password, 10)
    try {
        await users.create(req.body)
                // 設定回應狀態碼200，並把新增的資料回傳
        // res.status(200)
        // res.json(result)
        res.status(200).send({ success: true, message: '' })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            return res.status(400).send({ success: false, message })
        } else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).send({ success: false, message: '帳號已存在' })
        } else {
            res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
    }
}

export const login = async (req, res) => {
    try {
        const token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: '7 days' })
        req.user.tokens.push(token)
        await req.user.save()
        res.status(200).send({
            success: true,
            message: '',
            result: {
                token,
                account: req.user.account,
                email: req.user.email,
                cart: req.user.cart.length,
                role: req.user.role
            }
        })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}

export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token !== req.token)
        await req.user.save()
        res.status(200).send({ success: true, message: '' })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}

export const extend = async (req, res) => {
    try {
        const idx = req.user.tokens.findIndex(token => token === req.token)
        const token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: '7 days' })
        req.user.tokens[idx] = token
        await req.user.save()
        res.status(200).send({ success: true, message: '', result: token })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}

export const getUser = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: '',
            result: {
                account: req.user.account,
                email: req.user.email,
                cart: req.user.cart.length,
                role: req.user.role
            }
        })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
} */

// 目前沒有Cart
/* 
export const addCart = async (req, res) => {
    try {
        // 驗證商品
        const result = await products.findById(req.body.product)
        // 沒找到或已下架
        if (!result || !result.sell) {
            return res.status(404).send({ success: false, message: '商品不存在' })
        }
        // 找購物車有沒有這個商品
        const idx = req.user.cart.findIndex(item => item.product.toString() === req.body.product)
        if (idx > -1) {
            req.user.cart[idx].quantity += req.body.quantity
        } else {
            req.user.cart.push({
                product: req.body.product,
                quantity: req.body.quantity
            })
        }
        await req.user.save()
        res.status(200).send({ success: true, message: '', result: req.user.cart.length })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            return res.status(400).send({ success: false, message })
        } else {
            res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
    }
}

export const editCart = async (req, res) => {
    try {
        if (req.body.quantity <= 0) {
            await users.findOneAndUpdate(
                { _id: req.user._id, 'cart.product': req.body.product },
                {
                    $pull: {
                        cart: { product: req.body.product }
                    }
                }
            )
            // const idx = req.user.cart.findIndex(item => item.product.toString() === req.body.product)
            // req.user.cart.splice(idx, 1)
            // await req.user.save()
        } else {
            await users.findOneAndUpdate(
                { _id: req.user._id, 'cart.product': req.body.product },
                {
                    $set: {
                        // $ 代表符合陣列搜尋條件的索引
                        'cart.$.quantity': req.body.quantity
                    }
                }
            )
            // const idx = req.user.cart.findIndex(item => item.product.toString() === req.body.product)
            // req.user.cart[idx].quantity = req.body.quantity
            // await req.user.save()
        }
        res.status(200).send({ success: true, message: '' })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            return res.status(400).send({ success: false, message })
        } else {
            res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
    }
}

export const getCart = async (req, res) => {
    try {
        const result = await users.findById(req.user._id, 'cart').populate('cart.product')
        res.status(200).send({ success: true, message: '', result: result.cart })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}
 */



/* copy */


import users from '../models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const password = req.body.password
    // 驗證密碼
    if (!password) {
        return res.status(400).send({ success: false, message: '缺少密碼欄位' })
    }
    if (password.length < 4) {
        return res.status(400).send({ success: false, message: '密碼必須 4 個字以上' })
    }
    if (password.length > 16) {
        return res.status(400).send({ success: false, message: '密碼必須 16 個字以下' })
    }
    if (!password.match(/^\w[^\W]+$/)) {
        return res.status(400).send({ success: false, message: ' (controllers) 密碼格式錯誤' })
    }
    // bcrypt 密碼加密
    // 因為密碼會存成這樣："$2b$10$643StLWhLHl2dlcMjXsGWOgyUVLiSHdL..bTaqIozwS8GzFEzVP.G"  所以schema的密碼驗證不能放正則表達式(和其他字數限制)
    req.body.password = bcrypt.hashSync(password, 10)
    try {
        // 創建帳號
        await users.create(req.body)
        res.status(200).send({ success: true, message: '' })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const key = Object.keys(error.errors)[0]
            const message = error.errors[key].message
            return res.status(400).send({ success: false, message })
        } else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).send({ success: false, message: '帳號已存在' })
        } else {
            res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
    }
}

// 登入成功的話給token
/* export const login = async (req, res) => {
    try {
        const token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: '7 days' })
        req.user.tokens.push(token)
        await req.user.save()
        res.status(200).send({
            success: true,
            message: '',
            result: {
                token,
                account: req.user.account,
                email: req.user.email,
                role: req.user.role
            }
        })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}

// 登出拿掉token
export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token !== req.token)
        await req.user.save()
        res.status(200).send({ success: true, message: '' })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
} 

export const extend = async (req, res) => {
    try {
        const idx = req.user.tokens.findIndex(token => token === req.token)
        const token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: '7 days' })
        req.user.tokens[idx] = token
        await req.user.save()
        res.status(200).send({ success: true, message: '', result: token })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}
*/



// 抓會員

export const getUser = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: '',
            result: {
                account: req.user.account,
                email: req.user.email,
                role: req.user.role
            }
        })
    } catch (error) {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
}


