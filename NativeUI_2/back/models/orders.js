import mongoose from "mongoose";
/* 
1.測試能不能撈
要怎麼撈user資料ㄚ
*/

const schema = new mongoose.Schema({
    user: {
        // id name email phone
        // 要怎麼回傳user 除了id以外ㄉ其他欄位
        type: mongoose.ObjectId,
        ref: 'users',
        required: [true, '使用者未登入']
    },



    // orderDetails: [{
    /*  人數  預訂時間  備註   */
    numberOfPeople: {
        type: Number,
        required: [true, '請輸入人數'],
        max: [20, '訂位人數過多']
    },
    // 待確認
    bookingTime: {
        type: Date,
        required: [true, '請輸入日期']
    },
    usersNote: {
        type: String,
        default: '',
    },
    // }],


    /* orderDetailsTwo: [name, email, phone], */

    orderStatus: {
        // 1.審核中  2.以確認  3.已取消  
        type: Number,
        min: 1,
        max: 3,
        default: 1
    }

}, {
    timestamps: true
    // createdAt: 表示此文檔創建時間的日期
    // updatedAt：表示此文檔上次更新時間的日期
    // 查詢方式看mongoose官方文件的 Timestamps
})

//             mongoose.model(collection 名稱, Schema)
export default mongoose.model('Orders', schema)
// 資料表名稱必須為複數，結尾加 s