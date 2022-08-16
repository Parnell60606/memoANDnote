/* 登入驗證 copy  */
import passport from 'passport'
import passportJWT from 'passport-jwt'
import passportLocal from 'passport-local'
// 加密
import bcrypt from 'bcrypt'
import users from '../models/users.js'

// 引用 local 驗證策略，帳號密碼驗證
const LocalStrategy = passportLocal.Strategy
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

// 使用LocalStrategy的驗證策略，去新增一個名為 login 的驗證方式，
passport.use('login', new LocalStrategy({
    // LocalStrategy 也可以自訂欄位名稱
    // ↓重新命名這兩個來符合資料欄位
    usernameField: 'account',
    passwordField: 'password'
},
    //  async (解出來的帳號,密碼,最後做完要呼叫去下一步的動作)
    async (account, password, done) => {
        // 驗證過後會執行的 function
        try {
            // 找有沒有這個帳號
            const user = await users.findOne({ account })
            if (!user) {
                return done(null, false, { message: '帳號不存在' })
            }
            // 判斷密碼是否正確
            // bcrypt.compareSync(未加密文字, 已加密文字)
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { message: '密碼錯誤' })
            }
            return done(null, user)
        } catch (error) {
            return done(error, false)
        }
    }))

// 新增一個名為 jwt 的驗證方式，使用 JWT 策略
passport.use('jwt', new JWTStrategy({
    // 從 headers 提取 Bearer Token
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    // JWT 驗證 secret  (解譯jwt的秘鑰)
    secretOrKey: process.env.SECRET,

    // ↓把req資料傳進 callback裡面
    passReqToCallback: true,
    // ↓忽略過期 (自己寫過期驗證)
    ignoreExpiration: true
}, async (req, payload, done) => {
    //                     分鐘  * 1000     毫秒
    const expired = payload.exp * 1000 < Date.now()
    // 如果過期了     網址不是  '/users/extend'              不是登出
    if (expired && req.originalUrl !== '/users/extend' && req.originalUrl !== '/users/logout') {
        return done(null, false, { message: '登入逾期' })
    }
    // payload 是解譯後的資料
    // done(錯誤, 傳到 auth 的資料, 放進 info 的內容)
    // req.headers.authorization 格式為 Bearer asdasdasdasd
    const token = req.headers.authorization.split(' ')[1]
    try {
        // 尋找解譯出來的使用者，且有目前這組序號
        const user = await users.findById(payload._id)
        if (!user) {
            return done(null, false, { message: '使用者不存在' })
        }
        if (user.tokens.indexOf(token) === -1) {
            return done(null, false, { message: '驗證錯誤' })
        }
        return done(null, { user, token })
    } catch (error) {
        return done(error, false)
    }
}))
