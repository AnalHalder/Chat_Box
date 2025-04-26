const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    group_admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    profile_pic: {
        type: String,
        default: ""
    },
})

const Group = mongoose.model("Group", groupSchema)

module.exports = Group