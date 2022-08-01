import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    orderDetails: [{
        /* name email phone 人數  預訂時間   */
        name: {
            type: mongoose.objectId,
            ref: 'users',
        },

    }],
    /* orderDetailsTwo: [name, email, phone],// array要怎麼抓資料ㄚ */
    note: {},
    submitDate: {
        // 客戶送出表單的時間
        type:
    },
    /* finalEditedDate: {
        // 表單最後修改的時間
    } */
})