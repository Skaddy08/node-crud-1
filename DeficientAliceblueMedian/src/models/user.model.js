const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User