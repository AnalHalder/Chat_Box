const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_pic: {
        type: String,
        default: ""
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User