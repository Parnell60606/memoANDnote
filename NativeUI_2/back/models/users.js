import mongoose from "mongoose";
import validator from "validator";

//          = 轉成可以對資料做操作的model 再匯出
const schema = new mongoose.Schema({
    account: {
        // __v: { type: Number, select: false }, // test
        type: String,
        // 最小最大字串長度
        minlength: [6, '少於8個英文或數字'],
        maxlength: [20, '多於20個英文或數字'],
        // 傳進來的
        require: [true, '帳號請輸入8~16個英文或數字'],
        // 唯一性驗證 帳號只能註冊一次
        unique: true,
        // 驗證格式  \w 匹配字母、数字、底線。等於 [A-Za-z0-9_]
        /* 

            $	匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。
            +	匹配前面的子表达式一次或多次。例如，zo+ 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
            ^開始$結束
            */
        //    [^_ ]不包含底線跟空格
        match: [/^\w[^_ ]+$/, '帳號格式錯誤']

    },
    password: {
        type: String,
        require: [true, '請輸入8~16個英文或數字']

    },
    email: {
        type: String,
        // validator() { }
    },
    phone: {
        type: String,
        maxlength: [20, '手機或電話號碼過長'],
        match: [/^[0-9]+$/, '請輸入數字']

    },
    name: {
        type: String,
        // 刪除前後空格
        trim: true,
    },


    // copy 還沒看懂token功能
    tokens: {
        type: [String]
    },
    role: {
        // 0 = 使用者
        // 1 = 管理員
        type: Number,
        default: 0
    }

},
    // why不用預設的
    { versionKey: false }

) // 不使用版本控制

export default mongoose.model('users', schema)