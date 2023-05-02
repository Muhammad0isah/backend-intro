const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please firts name is a required field']
    },
    lastName: {
        type: String,
        required: [true, 'please last name is a required field']
    },
    email:{
        type: String,
        required: [true, 'please last name is a required field']
    },
    password: {
        type: String,
        required: [true, 'please lpassword is a required field']
    },
    age:{
        type: Number,
        default: 0
    },
    plans: {
        enum: ["free", "premium", "pro"],
        default: "free"
    },
    gender: {
        enum: ['male', 'female', 'other'],
        default: 'other'
    }
})


module.exports = mongoose.model('User', userSchema)