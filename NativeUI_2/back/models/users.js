import mongoose, { Schema } from "mongoose";

const schma = new mongoose.Schema({
    account: {
        type: String,
        require: []

    },
    password: {

    },
    email: {
        validator() { }
    },
    phone: {},
    name: {},

    token: {},

})

export default mongoose.model('users', Schema)