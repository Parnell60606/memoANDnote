/* 驗證方式 copy */
/* import passport from 'passport'
import jsonwebtoken from 'jsonwebtoken'

export const login = (req, res, next) => {
    // 使用 login 驗證方式
    // (err, user, info) 是 done() 傳出的
    passport.authenticate('login', { session: false }, (err, user, info) => {
        // 如果有錯誤，或是沒有找到使用者
        if (err || !user) {
            if (info.message === 'Missing credentials') info.message = '欄位錯誤'
            res.status(400).json({ success: false, message: info.message })
            return
        }
        // 把查詢到的使用者放進 req 物件
        // 之後的 middleware 就能直接使用
        req.user = user
        // 繼續下一個 middleware
        next()
    })(req, res, next)
}

export const jwt = (req, res, next) => {
    // 使用 jwt 驗證方式
    // (err, user, info) 是 done() 傳出的
    passport.authenticate('jwt', { session: false }, (err, data, info) => {
        // 如果有錯誤，或是沒有找到使用者
        if (err || !data) {
            if (info instanceof jsonwebtoken.JsonWebTokenError) {
                res.status(400).json({ success: false, message: 'JWT錯誤' })
            } else {
                res.status(400).json({ success: false, message: info.message })
            }
            return
        }
        req.user = data.user
        req.token = data.token
        next()
    })(req, res, next)
}
 */